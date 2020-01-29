---
path: how-to-secure-your-vps-server-2020
date: 2020-01-29T16:36:06.819Z
title: 'Security: How to secure your VPS server'
description: In this post i will show you how the easiest way to secure your vps server.
---
A virtual private server (VPS) is a virtual machine sold as a service by an Internet hosting service. The virtual dedicated server (VDS) also has a similar meaning.

> Wikipedia

In the modern world, It's impossible to feel 100% secure and safe, vulnerabilities are everywhere.

The security industry is one of the fastest growing industries in the world today, every day compagnies complain about hacking or some security issue, what every the size of your company you must be conscience about hacking and hacker.
In this modern age, security is very important.

Security should be one of your priorities, physics and logics.

In this article i will share with you some tips to secure your VPS server.

## Upgrade your system

Three reason to upgrade your system

1- Get full advantages of new features and functionalities
2- Bug fixes and Security improvement
3- Remove some outdated packages

Before you update your system make sure you have created a new **user** different of the default user AKA **root**.

## Login To Your Server

```sh
$ ssh root@<your.ip.address>
```

```
root@<servername>:~#
```

### Create a new user

```sh
$ adduser <username>

```

### Give root privileges

```sh
$ usermod -aG sudo <username>
```

### Create SSH Keys

SSH keys provide a more secure way of logging into a server with SSH than using a password alone.

Do this in your machine and hit enter all the way through it will generate a public and private key.

```sh
ssh-keygen
```

Copy the public key

```sh
$ cat ~/.ssh/id_rsa.pub
```

In your server

```sh
$ cd /home/username/
$ mkdir .ssh
cd .ssh
nano authorized_keys
Paste the key and hit "ctrl-x", hit "y" to save and "enter" to exit
```

## Login as the user we have just created

```sh
$ ssh username@<your.ip.address>
```

Run this command to update the packages :

```sh
$ sudo apt update
$ sudo apt upgrade
```

## Disable Root Login

Security expert highly recommended to not use **root** user .

```sh
$ sudo nano /etc/ssh/sshd_config
```

### Make some changes

```
PermitRootLogin no
PasswordAuthentication no
```

### Reload sshd service

```
$ sudo systemctl reload sshd
```

## Configure a FireWall

In this article i use **ufw** firewall, is very easy to setup and it's good for most use cases.

See which apps are registered with the firewall

```sh
$ sudo ufw app list
```

### Allow openSSH

```sh
$ sudo ufw allow OpenSSH
```

### Check the status

```sh
$ sudo ufw status
```

## Install Fail2Ban

Fail2ban is a log-parsing solution that monitors system logs for symptoms of an automated attack on your Server.
Basically, Fail2ban scans log files (e.g. /var/log/apache/error_log) and bans IPs that show the malicious signs -- too many password failures, seeking for exploits, etc.

```sh
$ apt-get install fail2ban
```

The system will start automatically

In order to get it work right you need to configure it and the article can't cover all the details, you can find online resources.

Thank you for reading.

Any tips, idea or suggestion ?
