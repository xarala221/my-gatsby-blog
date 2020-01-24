---
path: deploy-django-application-to-heroku
date: 2020-01-24T08:58:01.388Z
title: 'Python : Deploy Django application on production using  Heroku'
description: >-
  In this post i will show you how the easiest way to deploy Django application
  to the cloud, we will use Heroku.
---
# Deploy Django web application to Heroku
## Introduction
Heroku is a cloud application platform, it facilitate the deployement of a web application.
They support several programming languages, include Python.
## Install Heroku Toolbet
To install heroku Toolket [Sign up to heroku](https://signup.heroku.com/),
Then install the [Heroku Toolbet](https://toolbelt.heroku.com/) it is very powerful command line tool it will help you to manage your application.
After installing the Toolbet, open your Terminal/CMD and login to your account :
```sh
$ heroku login
Enter your Heroku credentials.
Email: your email
Password (typing will be hidden):
Authentication successful.
```
## Preparing our application
place into your application
```sh
$ cd my-application/
```
Here is the list of things you will probably need to add to your project:

- Add a Procfile in the project root;
- Add requirements.txt file with all the requirements in the project root;
- Add Gunicorn to requirements.txt;
- A runtime.txt to specify the correct Python version in the project root;
- Configure whitenoise to serve static files.

## The Procfile
- Create a file named Procfile in the project root 
- Add the following content :
```web: gunicorn my-application.wsgi --log-file -```
**Note: change my-applicatio with the name of your Django project.**
## The requirements.txt
Run this command, this command will list all dependencies :
```sh
$ pip freeze > requirements.txt
You should see somthing like this :
dj-database-url==version
Django==version
gunicorn==version
psycopg2==version
psycopg2-binary==version
pytz==version
whitenoise==version
```

## The runtime.txt
Create a file named runtime.txt in the project root, and put the specific Python version your project use:
``` python 3.8 ```
## Set Up The Static Assets
Configure the STATIC-related parameters on settings.py:
```

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static")
]
```
## Configure Whitenoise
Install Whitenoise
```sh
$ pip install whitenoise
```
Add the **Whitenoise** to your Django application in the **wsgi.py** file:
```
"""
WSGI config for repertoire project.
It exposes the WSGI callable as a module-level variable named ``application``.
For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""
import os
from whitenoise.django import DjangoWhiteNoise
from django.core.wsgi import get_wsgi_application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'my-application.settings')
application = get_wsgi_application()
application = DjangoWhiteNoise(application)
```
Update the **settings.py**
```
STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'
```
Add **whitenoise middleware** at the top of the middleware list in **settings.py**
## Deploy the application
### Update Database Configuration in settings.py (at the bottom of the file)
```
import dj_database_url 
prod_db  =  dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(prod_db)
```
## Create App in Heroku from terminal
```sh
$ heroku create myapplication
Creating ⬢ myapplication... done
https://myapplication.herokuapp.com/ | https://git.heroku.com/myapplication.git
```
> Choose any name for your app. Heroku will inform you if the name already exists
## Add your app domain name to ALLOWED_HOSTS in settings.py.
```
ALLOWED_HOSTS = ['myapplication.herokuapp.com']
```
Initialize Git and connect your new app (or existing one) to Heroku Git remote repository and push the application.
in your terminal / CMD :
```sh
$ git init
$ heroku git:remote -a myapplication
$ git add .
$ commit -m "Initial commit"
$ git push heroku master
```
> If you get an error message with collectstatic, simply disable it by instructing Heroku to ignore running the manage.py collecstatic command during the deployment process.
```sh
$ heroku config:set     DISABLE_COLLECTSTATIC=1  
```
Then, run :
```sh
$ git push heroku master
```
Migrate the database :
```sh
$ heroku run python manage.py migrate
```
Let me know in comment section if you've any error.

Thank you for reading.
