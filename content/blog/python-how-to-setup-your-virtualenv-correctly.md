---
path: how-to-setup-python-virtualenv-correctly
date: 2020-01-21T10:57:57.941Z
title: 'Python : How to setup your Virtualenv correctly'
description: >-
  In this tutorial i will show you how to setup a Python dependency manger
  correctly
---
## Introduction

**Pipenv** is a dependency manager for Python projects. If you’re familiar with Node.js’ npm or Ruby’s bundler, it is similar in spirit to those tools.

Everytime you want to create a new Python project or you follow a new course, you get sucked with the VirtualEnv ?
What the heck virtualenv is ?
How you can setup it Correctly ?

### Requirements

Python : 3.4 or later
pip

### Package Manager VS Dependency Manager

Based on a [StackOverFlow](https://stackoverflow.com/questions/27285783/package-manager-vs-dependency-manager) answer

**Package Manager** - is used to configure system, ie to setup your development environment and with these settings you can build many projects.

**Dependency Manager** - Is specific to project. You manage all dependencies for a single project and those dependencies are going to be saved on your project. When you start another project you should manage your dependencies again.

### Why we need it

The main purpose of using a dependency manager is to separate your application dependencies, that will give you the ability to use the one Framework in different project with different version.

A simple use case :

Imagine we have two(2) Django applications and we want to install differents versions of Django.

What we do ?

We've the choice to install all versions in one machine, but this is not the ideal way to do.

## How to setup your virtualenv Correctly

### Installation

As Pythonist we've many choices

- Poetry
- Pip
- Pipenv
- etc...

In this tutorial we will use **pipenv** and i think is the easiest to setup.
And it is a recommended for collaborative and Team projects.

**Make sure you've Python and Pip installed in your machine**

Let's check your installation

```sh
$ python --version
```

The output should look something like this

```
Python 3.7.5
```

And check the pip installation

```sh
$ pip --version
```

The output

```
pip 19.3.1 from /usr/local/lib/python3.7/dist-packages/pip (python 3.7
```

### Installing **pipenv** using **pip**

```sh
$ pip install --user pipenv
```

### Check the installation

```sh
$ pipenv --version
```

The output

```
pipenv, version 11.9.0
```

### Create new project

```sh
$ mkdir test_pipen && cd test_pipenv
$ touch app.py
```

## Installing packages for your project

```sh
$ pipenv install requests
```

```
Creating a virtualenv for this project…
Using /usr/bin/python3 (3.7.5) to create virtualenv…
⠋Already using interpreter /usr/bin/python3
Using base prefix '/usr'
New python executable in /home/username/.local/share/virtualenvs/test_pipenv-3gXMtvzy/bin/python3
Also creating executable in /home/username/.local/share/virtualenvs/test_pipenv-3gXMtvzy/bin/python
Installing setuptools, pip, wheel...
done.

Virtualenv location: /home/username/.local/share/virtualenvs/test_pipenv-3gXMtvzy
Creating a Pipfile for this project…
Installing requests…
Looking in indexes: https://pypi.python.org/simple
Collecting requests
 Using cached https://files.pythonhosted.org/packages/51/bd/23c926cd341ea6b7dd0b2a00aba99ae0f828be89d72b2190f27c11d4b7fb/requests-2.22.0-py2.py3-none-any.whl
Collecting idna<2.9,>=2.5
 Using cached https://files.pythonhosted.org/packages/14/2c/cd551d81dbe15200be1cf41cd03869a46fe7226e7450af7a6545bfc474c9/idna-2.8-py2.py3-none-any.whl
Collecting urllib3!=1.25.0,!=1.25.1,<1.26,>=1.21.1
 Using cached https://files.pythonhosted.org/packages/b4/40/a9837291310ee1ccc242ceb6ebfd9eb21539649f193a7c8c86ba15b98539/urllib3-1.25.7-py2.py3-none-any.whl
Collecting chardet<3.1.0,>=3.0.2
 Using cached https://files.pythonhosted.org/packages/bc/a9/01ffebfb562e4274b6487b4bb1ddec7ca55ec7510b22e4c51f14098443b8/chardet-3.0.4-py2.py3-none-any.whl
Collecting certifi>=2017.4.17
 Using cached https://files.pythonhosted.org/packages/b9/63/df50cac98ea0d5b006c55a399c3bf1db9da7b5a24de7890bc9cfd5dd9e99/certifi-2019.11.28-py2.py3-none-any.whl
Installing collected packages: idna, urllib3, chardet, certifi, requests
Successfully installed certifi-2019.11.28 chardet-3.0.4 idna-2.8 requests-2.22.0 urllib3-1.25.7

Adding requests to Pipfile's [packages]…
Pipfile.lock not found, creating…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
Updated Pipfile.lock (5a8f8c)!
Installing dependencies from Pipfile.lock (5a8f8c)…
 🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 5/5 — 00:00:01

```

### Activate your new environment

```sh
$ pipenv shell
$ (test_pipenv-3gXMtvzy) ....
```

Add this line in your app.py file

```python
import requests

response = requests.get('https://httpbin.org/ip')

print('Your IP is {0}'.format(response.json()['origin']))
```

Run the application

```sh
$ python app.py
```

You should get output similar to this:

```
Your IP is 0.0.0.224, 0.0.0.224
```

See you next :-)
