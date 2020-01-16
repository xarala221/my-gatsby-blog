---
path: 'path: /how-to-create-an-ssl-certificate-usig-nginx-with-ubuntu/'
date: 2020-01-16T22:12:58.236Z
title: 'Nginx: How to create an SSL Self-Signed Certificate on Ubuntu'
description: How you can create an SSL certificate on Ubuntu with Nginx
---

## Introduction

In this tutorial i will help you to create an SSL certificate, using Nginx and Certbot on Ubuntu.

**SSL Certificates** protect your sensitive information such as credit card information, usernames, passwords...

**Nginx** is a free, open-source, high-performance HTTP server.

**Certbot** is a free, open source software tool for automatically using Let’s Encrypt certificates on manually-administrated websites to enable HTTPS.

## Requirements

Nginx
Ubuntu
Comfort with **command Line/Terminal**

## Installation

### 1- Login To Your Server

```sh

$ ssh username@YOUR_SERVER_IP

```

### 2- Add Certbot PPA

```sh

$ sudo apt-get update
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository universe
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update

```

### 3- Install Certbot

```sh
$ sudo apt-get install certbot python-certbot-nginx
```

### 4- Generate the certificate

```sh
$ sudo certbot --nginx
```

Choose your domaine

```

[sudo] password for username:
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx

Which names would you like to activate HTTPS for?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: yourdomaine.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): 1
```

Choose whether or not to redirect HTTP traffic to HTTPS.

```
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
```

Successfully issued

```
Congratulations! You have successfully enabled https://yourdomaine.com

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=yourdomaine.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/yourdomaine.com-0001/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/yourdomaine.com-0001/privkey.pem
   Your cert will expire on 2020-04-14. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le

```

### 5- Test automatic renewal

```sh
$ sudo certbot renew --dry-run
```

Thanks for reading.

See you in the next tutorial
