---
path: build-production-ready-application-with-django-adn-postgresql
date: 2020-02-13T20:54:24.315Z
title: How to build production-ready application with Django and PostgreSQL
description: >-
  In this guide i will show you how to build production-ready application with
  Django and PostgreSQL
---
## Introduction

Build basic application everyone can do it but build real world production-ready application require lot of work.

In this guide i will show you how to build production-ready application with Django and Postgresql.

**Django** is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

**RDBMS** is a database management system (DBMS) that is based on the relational model as introduced by **E. F. Codd.**

**PostgreSQL** is The World's Most Advanced Open Source Relational Database.

## Prerequisites

I assume that you've some basic knowledge of Django and want to know how to make your application production-ready.

## Installation

The first step in this guide is to install the pieces we need in order to use postgresql.

The following command will install all packages

```sh
sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib
```

I will use **pipenv** for dependencies management.

This command will install **pipenv** on your system

```sh
pip install --user pipenv
```

## New Django project

Create a new folder and call it what you want

```sh
$ mkdir django_postgres
$ cd django_postgres
```

### Create a virtual environment with **pipenv**

```sh
$ pipenv shell
```

Here is the output of the command

```
Creating a virtualenv for this project…
Using /usr/bin/python3 (3.7.5) to create virtualenv…
⠋Already using interpreter /usr/bin/python3
Using base prefix '/usr'
New python executable in /home/username/.local/share/virtualenvs/django_postgres-6CspIPh4/bin/python3
Also creating executable in /home/username/.local/share/virtualenvs/django_postgres-6CspIPh4/bin/python
Installing setuptools, pip, wheel...
done.

Virtualenv location: /home/username/.local/share/virtualenvs/django_postgres-6CspIPh4
Creating a Pipfile for this project…
Spawning environment shell (/usr/bin/zsh). Use 'exit' to leave.
```

### Install Django

```sh
$ pipenv install django
```

The output of this command

```
Installing django…
Looking in indexes: https://pypi.python.org/simple
Collecting django
 Using cached Django-3.0.3-py3-none-any.whl (7.5 MB)
Collecting asgiref~=3.2
 Using cached asgiref-3.2.3-py2.py3-none-any.whl (18 kB)
Collecting sqlparse>=0.2.2
 Using cached sqlparse-0.3.0-py2.py3-none-any.whl (39 kB)
Collecting pytz
 Using cached pytz-2019.3-py2.py3-none-any.whl (509 kB)
Installing collected packages: asgiref, sqlparse, pytz, django
Successfully installed asgiref-3.2.3 django-3.0.3 pytz-2019.3 sqlparse-0.3.0

Adding django to Pipfile's [packages]…
Pipfile.lock not found, creating…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
Updated Pipfile.lock (7ff369)!
Installing dependencies from Pipfile.lock (7ff369)…
 🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 4/4 — 00:00:00
```

### Install postgresql driver

```sh
$ pipenv install psycopg2-binary
```

The output

```
Installing psycopg2-binary…
Looking in indexes: https://pypi.python.org/simple
Collecting psycopg2-binary
 Using cached psycopg2_binary-2.8.4-cp37-cp37m-manylinux1_x86_64.whl (2.9 MB)
Installing collected packages: psycopg2-binary
Successfully installed psycopg2-binary-2.8.4

Adding psycopg2-binary to Pipfile's [packages]…
Pipfile.lock (7ff369) out of date, updating to (c90257)…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
Updated Pipfile.lock (c90257)!
Installing dependencies from Pipfile.lock (c90257)…
 🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 5/5 — 00:00:01
```

### Create a new Django project

The following command will create a new django project for us

```sh
$ django-admin startproject prodapplication
```

Go to **settings.py** you will see a database configuration like this

```
# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.sqlite3',
       'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
   }
}
```

SQlite is the default database for any Django project it help us to quickly prototyping a new idea.

## Postgres Database & User Setup

Now logged into the postgresql shell

```sh
$ sudo -u postgres psql
```

### Create a database

```
CREATE DATABASE datbase_name;
```

### Create user

```
CREATE USER <username> WITH PASSWORD <password>;
```

### Set default encoding, transaction isolation scheme (Recommended from Django)

```
ALTER ROLE <username> SET client_encoding TO 'utf8';
ALTER ROLE <username> SET default_transaction_isolation TO 'read committed';
ALTER ROLE <username> SET timezone TO 'UTC';
```

### Give User access to database

```
GRANT ALL PRIVILEGES ON DATABASE <datbase_name> TO <username>;
```

### Quit out the shell

```
\q
```

## Manage dependencies

You can use **Pipfile** if you use **pipenv** or create a **requirements.txt** file and put your dependencies on it.

## Ready to go

We've everything installed, now it’s time to do some production stuff.

### Create a new file

I create a new file and called it **local_settings.py**, we will put all the production settings on this file.

Here is our folder structure

```
.
├── Pipfile
├── Pipfile.lock
└── prodapplication
   ├── manage.py
   └── prodapplication
       ├── asgi.py
       ├── __init__.py
       ├── local_settings.py
       ├── settings.py
       ├── urls.py
       └── wsgi.py
```

### Change Debug mode to False

```
DEBUG = False
```

### Change allowed host

```
ALLOWED_HOSTS = ['Your ip', 'www.domain.com', 'domain.com']
```

### Change The secret key

I use this [tool](https://miniwebtool.com/django-secret-key-generator/) to generate a Django secret key

```
SECRET_KEY = <your new secret key>
```

### Change the default database

```
DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.postgresql_psycopg2',
       'HOST': 'localhost',
       'NAME': '<database_name>',
       'USER': '<username>',
       'PASSWORD': '<password>',
       'PORT': '5432',
   }
}
```

### Configure your mail server

```
# Email config
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = '<your smtp server>'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'username'
EMAIL_HOST_PASSWORD = 'password'
EMAIL_USE_TLS = True
```

### Import the new configuration

Put the following code in your **settings.py**

```
try:
   from .local_settings import *
except ImportError:
   pass
```

## Test your new application

Run the following command

```sh
$ python manage.py migrate
$ python manage.py runserver
```

## Conclusion

Performance is very important if it come to the real word application and you must optimise your application and configure it in a way that perform well.
One of the key is to use a production-ready Database, like postgresql.

In this guide you've learned how to write a production Django application.

Thanks for reading.
