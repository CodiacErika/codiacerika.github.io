---
sidebar_position: 1
---
# Onboarding Steps

## What is Codiac?
- An easy to use, cloud based devops solution

## So then, what is Devops?
- DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. In short, it combines the developers and operations into one unit, thus cutting down on time to market and miscommunications. 

## Quick Start

### 1. Prerequisites
- You will need to install these before we begin.
  - **[Node](https://nodejs.org/en/)** 
  - **[VS Code](https://code.visualstudio.com/)**  
  - **[Docker](https://www.docker.com/products/docker-desktop/)**
  - **[Azure-cli](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)**
  - **[Git](https://git-scm.com/downloads)**  
  - **[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)**

### 2. Clone Repo
- Open github
- Clone Codiac Demo Repo
  - search for "https://github.com/codiac-io/codiac-demo"
  - Click the green "code" button
  - Make sure it is on HTTPS
  - Copy the HTTPS link
- Open up the VS Code application and make sure it is on a new window

- Click on "Clone Git Repository"
- Paste the link we previously copied and run it
## 3. Installing Codiac
- open terminal: ctrl + ` **(picture here)**
- In Terminal **(picture here)** run these commands
- run command: 
  ```
  npm i -g @codiac.io/codiac-cli
  ```

- run cmd: 
```
codiac build
```
- run cmd: 
```
codiac publish
```
- run cmd: 
```
codiac deploy
```
- run cmd: 
```
codiac portal
```
## 4. In Codiac Portal
- login
- create new cabinet in the QA environemt [any name]
- open enterprise versions sidebar
- find one you like, drag, drop, confirm
- click on the cabinet name to see the results. TLS takes about 30sec to resolve. wait for it.
## 5. Congrats! You now have Codiac up and ready to go!







