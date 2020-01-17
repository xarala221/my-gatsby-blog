---
path: deploy-create-react-app-with-ubuntu-using-nginx
date: 2020-01-17T21:51:02.901Z
title: The easiest way to deploy a React app with Nginx and Ubunut 18.04
description: >-
  How you can deploy ReactJs App or any JavaScript web application With Nginx
  and Ubuntu
---
In this step by step guide, i will show you how to deploy React(Any JS) application.

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [1- Install NodeJS and npm](#1--install-nodejs-and-npm)
  - [2- Install Nginx](#2--install-nginx)
- [Deployment](#deployment)
  - [Create project file](#create-project-file)
  - [Enable the file by linking to the sites-enabled dir](#enable-the-file-by-linking-to-the-sites-enabled-dir)
  - [Test NGINX config](#test-nginx-config)
  - [Restart Nginx Server](#restart-nginx-server)

## Getting Started

In order to follow me along, you need to install some prerequisites.

### Prerequisites

Server requirements

You need a Linux based system, i use Ubuntu 18.04 for this tutorial, you are free to use any OS.

Disk : ~25GB

Memory : 2GB

CPU : 1 core

## Installation

Login To Your Server

```sh
$ ssh username@YOUR_SERVER_IP
```

### 1- Install NodeJS and npm

**Node.js** is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. **Node.js** gives us the possibility to use JavaScript as a BackEnd language like Python, Java or PHP.

**NPM** is a package manager for the JavaScript programming language. It is the default package manager for **Node.js**.

**Use Current Release**

```sh
$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
$ sudo apt-get install nodejs
```

Test NodeJS version

```sh
$ nodejs -V
v13.3.0
```

Test NPM version

```sh
$ npm --v
6.13.1
```

We've successfully installed NodeJs and NPM.

### 2- Install Nginx

Nginx is a free, open-source, high-performance HTTP server.

```sh
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install nginx
```

### Deployment

I will deploy this project from my Github account

```sh
$ git clone https://github.com/xarala221/React-counter-app.git
$ cd React-counter-app
```

Install packages

```sh
$ npm install
```

Test the application

```sh
$ npm start
```

Go to http://yourserverip:3000

Stop the terminal with CTRL+C

### Create project file

```sh
sudo nano /etc/nginx/sites-available/react_counter
```

```
server {
   server_name your_IP domain.com www.domain.com;
   root /home/username/React-counter-app/build;
   index index.html index.htm;
   location / {
   try_files $uri /index.html =404;
   }
}
```

**server_name** put your ip address
**root** we use this to give the server the application location in the disk
**index** The main file

### Enable the file by linking to the sites-enabled dir

sudo ln -s /etc/nginx/sites-available/react_counter /etc/nginx/sites-enabled

### Test NGINX config

```sh
$ sudo nginx -t
```

### Restart Nginx Server

```sh
$ sudo systemctl restart nginx
```

Open your browser and go to http://youripaddress

Thanks for reading.
See you in the next tutorial
