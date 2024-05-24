---
sidebar_label: CLI
id: cli-security-guide
title: Security With the CLI
description: A guide to securing the Codiac platform.
tags:
  - Intro
  - Getting started
---

When you want to limit access to various parts of your enterprise, 
the `cod auth` commands provide a means by which you can manage roles and users, and apply privileges to roles on the various environments and cabinets in your enterprise.


for a summary of the commands in the auth module...
```bash 
cod auth --help
```

### The Built-in Administrator Role

Your user account must have the `adminstrator` role assigned to it to run any commands in the `cod auth` module.

The `administrator` role is built-in and is automatically granted universal access in your organization.   It gets automatically assigned to the user who originally created your organization in Codiac.

* You can assign this role to any user you see fit, 
* you cannot delete it, 
* and you cannot un-assign it from the only user that has it assigned *(in that scenario, you must first assign it to another user so that your organization is never left without an administrator)*.

To check if you're an administrator, you'll need to authenticate...


### Authenticate

First make sure you can log in and out of the system using...

```bash
cod login
cod logout
```

Once logged in you can look at which roles you have assigned...
```bash
cod whoami
```


### Role Based Access Control (RBAC)

The Codiac RBAC model works like this:  

1. There's a user and an entity.
    *  *For example: the user `joe-cool@yourcompany.com` and the cabinet `dev`*.
1. The user has one or more **roles** assigned 
    *  *For example: the user `joe-cool@yourcompany.com`is assigned the roles of `developer` and `manager`*.
1. Roles get **privileges** granted on entities (like cabinets) 
    * *For example: eg: the `developer` role has `read, update, delete` privileges granted on the `dev` cabinet*
1. THEN when a user attempts to perform an action, Codiac enforces the need for that user to have a role that has been granted that privilege on the entity.


### Managing Roles

First let's see what roles you already have in your organization...

```bash
cod auth role list
```

Create a developer role...
```bash
cod role create developer
```

Create a manager role...
```bash
cod role create developer
```

Create a tester role...
```bash
cod role create testhair
```

Oops! Misspelled that one...  Role names are immutable, so you'll need to delete that one and create another

```bash 
cod role delete testhair
cod role create tester
```

### Assigning Roles to Users

Lets take a look at your current users and what roles they have currently assigned...

```bash
cod auth user list
```

To add another user to your organization:
```bash
cod auth user invite -e sally.cool@yourcompany.com
```

Now assign the developer role to that user:
```bash
cod auth role assign -r developer -u sally.cool@yourcompany.com
```

You can also invite and assign in the same step:
```bash
cod auth user invite -e dillon.slick@yourcompany.com -r developer 
```

To unassign a role from a user: 
```bash
cod auth role unassign -r developer -u dillon.slick@yourcompany.com
```

***NOTE: Users will need to log out and log back in for user role assignments to take effect.***

### Protecting Entities

You can limit access to a given enterprise, environment, or cabinet by declaring privileges on it for a given role.

The enterprise lives at the top of the heap so we'll need to provide read access to that in order for users to see enything else inside it, so lets do that for our 2 roles:
```bash 
cod auth enteprise allow -r developer -p read
cod auth enteprise allow -r tester -p read
```
Check out the help for that command (`cod auth enterprise allow --help`) and you'll see that the `-p` flag declares the "Privilege" for that role on that entity.


For instance, let's give the `developer` role the ability to read the dev environment:
```bash
cod auth enviro allow -e dev -r developer -p read
```

Now look at what is allowed on that environment:
```bash
cod auth enviro allowed -e dev 
``` 


WIth that done, let's take a look at what the developer role is currently allowed to access:
```bash
cod auth role allowed developer
```
We only just created that role, so it doesnt have much access; only the Read privilege we just granted it on the `dev` environment.

In fact, our `developer` role has no access to any cabinets inside that environment... We specifically gave privileges only to modify the environment entity itself, meaning the developer cannot actually delete the environment, but these permissions do not cascade down to the cabinet.  

Give the developer the ability to modify an existing cabinet named `spike`: 
```bash
cod auth cabinet allow -e dev -c spike -r developer -p modify
```
We can also **revoke access** to an individual cabinet, which removes all privileges for that role on the cabinet:
```bash
cod auth cabinet allow -e dev -c spike -r tester -p none
```

Now if you log in as a user with the `developer` role, you'll only see the `dev` environment and the `spike` cabinet underneath it.  Any user attempting to deploy or configure this cabinet will have to be assigned the `developer` role to do so.  

Now look at what is allowed on that cabinet:
```bash
cod auth cabinet allowed -e dev -c spike
``` 

### Roles vs Users

Remember:  Users can be assigned zero, one, or many roles.  Its the **roles** that are granted privileges on entities, **not** the users themselves.


### Setting Default Permissions 

By default new cabinets copy permission set from their parent environment.

However, we may want to set specific permissions for new cabinets in a given environment that **differ from** those of the parent environment.  That is, perhaps we want our administrators to set up the environments, and then allow developers to create and remove cabinets at will, without the ability to change the environment itself...

Enter Default Child Permissions.  

Let's grant full permissions to the developer role on any new cabinets that get created in the `dev` environment.  It's the same as the `allow` command we used before, but with the additional `oncabs` command segment:
```bash
cod auth enviro allow oncabs -e dev -r developer -p modify
```

And now we can make the dev environment itself readonly for them:
```bash 
cod auth enviro allow -e dev -r developer -p read
```

Our default permission template for new cabinets will now show up when you look at what's allowed on that environment:
```bash
cod auth enviro allowed -e dev
```

The same default permissions feature is available for environments too, we just set the permissions at the enterprise level.  Here we're allowing the `manager` role `read` access to all new environments by default:
```bash
cod auth enterprise allow onenvs -r manager -p read
``` 
Check it out:
```bash
cod auth enterprise allowed
```
These default child permissions will now get assigned on any new environments created in this enterprise.


### Conclusion

That might have been a lengthy walk-through, but it really boils down to only a few main concepts:

1. Assign roles to users (changes require users to log in again)
1. Assign permissions (roles + privileges) to entities (enterprise, enviro, cab) (no logout required)
1. Set default child permissions as a template to be applied to future environments and cabinets. 
1. use the `allowed` commands to view access.
