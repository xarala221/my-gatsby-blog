---
path: build-a-rest-api-with-python-and-django
date: 2020-01-20T21:34:55.264Z
title: Build a Rest API with Python using Django - The easiest way
description: How you can build a Rest api with Python
---

In this tutorial we will transform our Django phonebook Application to a Rest API

> A REST API defines a set of functions which developers can perform requests and receive responses via HTTP protocol such as GET, POST, PUT and DELETE

Think REST API as a web service that provide you the data you want to use in your application(mobile or front-end client).

The key component for a REST API request are:

**GET** — The most common option, returns some data from the API based on the given endpoint .

**POST** — Creates a new record and add it to the database.

**PUT** — Update an existing record.

**DELETE** — Deletes the record on the given endpoint.

## Getting started

```sh
$ git clone https://github.com/xarala221/django-phonebook.git
$ cd django-phonebook
```

## Application setup

```sh
$ pipenv install
Creating a virtualenv for this project…
Using /usr/bin/python3.7m (3.7.5) to create virtualenv…
$ pipenv shell
Spawning environment shell (/usr/bin/zsh). Use 'exit' to leave.
. /home/username/.local/share/virtualenvs/phonebook_rest_api-9zIZds3o/bin/activate
```

## Run the application

```sh
(my-env) $ python manage.py runserver
```

Notice i use **pipenv** instead of pip but you can use pip if you want it's up to you.

The application is running at http://localhost:800/

```sh
.
├── accounts
│   ├── admin.py
│   ├── apps.py
│   ├── forms.py
│   ├── __init__.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── contact
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   ├── 0001_initial.py
│   │   └── __init__.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── db.sqlite3
├── manage.py
├── phonebook
│   ├── asgi.py
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── Pipfile
├── Pipfile.lock
├── README.md
├── requirements.txt
└── templates
   ├── accounts
   │   ├── login.html
   │   └── register.html
   ├── base.html
   ├── contact
   │   ├── contact_details.html
   │   ├── contact_list.html
   │   ├── delete_contact.html
   │   ├── new_contact.html
   │   └── update_contact.html
   ├── index.html
   └── partials
       └── _navbar.html
```

This is our folder structure.

## Setup Django REST Framework

Django REST framework is a powerful and flexible toolkit for building Web APIs.

```sh
(myenv) $ pipenv install djangorestframework
```

In phonebook/settings.py add

```sh
# Application definition
INSTALLED_APPS = [
   'django.contrib.admin',
   'django.contrib.auth',
   'django.contrib.contenttypes',
   'django.contrib.sessions',
   'django.contrib.messages',
   'django.contrib.staticfiles',
   'rest_framework', # add this
   'contact',
]
```

## Serialize the contact Table(Model)

Let's create a new file -- contact/serializers.py

```sh
# contact/serializers.py
from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
   class Meta:
       model = Contact
       fields = '__all__'

```

## Preparing the data

Create a new file -- contact/api.py

```sh
# contact/api.py
from rest_framework import viewsets
from .serializers import ContactSerializer
from .models import Contact


class ContactViewSet(viewsets.ModelViewSet):
   serializer_class = ContactSerializer
   queryset = Contact.objects.all()

```

Update our contact/urls.py

```sh
from django.urls import path, include # add this
from rest_framework.routers import DefaultRouter  # add this
from .views import (
   index, contact_list,
   new_contact, contact_details,
   update_contact, delete_contact
)
from .api import ContactViewSet  # add this
router = DefaultRouter()  # add this
router.register(r'contacts', ContactViewSet,
               basename='contact')  # add this


urlpatterns = [
   path("api/", include(router.urls)),
   path("", index, name="home"),
   path("contacts/", contact_list, name="contacts"),
   path("contacts/new/", new_contact, name="new"),
   path("contacts/<int:id>/details/", contact_details, name="details"),
   path("contacts/<int:id>/update/", update_contact, name="update"),
   path("contacts/<int:id>/delete/", delete_contact, name="delete"),
]

```

Open your browser and go to http://localhost:8000/api/
You will see something like this :

```sh
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
   "contacts": "http://localhost:8000/api/contacts/"
}
```

Click on the link what you see ?
