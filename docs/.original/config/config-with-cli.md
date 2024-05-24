# Config with the CLI

### Declaring Config Settings

```
cod config set
```

Now let's write this command again to run without prompting so that we can run it in our script:
```
cod config set --to-script
```

### Deleting Settings

#### Interactively
```sh
cod config delete
```

#### Without need for prompts
```sh
cod config delete --asset my-api --file app/app-config.json --enviro dev \
  --setting hometown --setting favorite-color --setting db.username --setting db.secret --setting db.name --setting db.server
```

#### Using pipes

Let's retrieve all the settings at the environment level for the `dev` environment...
```sh
cod config settings get -a my-api -e dev -f app-config.json
```

Now let's use some pipes in the cli to copy all of those settings into the qa environment
```sh
cod config settings get -a my-api -e dev -f app-config.json | cod config set -a my-api -f app/app-config.json -e qa 
```

What if we want to adjust the values before we copy them out?  We can write then to a file instead...``

```sh
cod config settings get -a my-api -e dev -f app-config.json > temp-settings.json
```

This allows us to then open up `temp-settings.json` and change some values.
Let's change `Hometown` to `Chicago` the db.server to `mongo.qa.ourcompany.com`, and the user and password to reference the secrets for qa.
```json
{
  "hometown": "Chicago",
  "db": {
    "server": "mongo.qa.ourcompany.com",
    "name": "growing",
    "user": "#REF|our-secret-store|growdb-qa-user",
    "password": "#REF|our-secret-store|growdb-qa-password"
  }
}
```

Now we can pipe those settings into a `cod config set` command to add settings for the qa environment... 

```
cat temp-settings.json | cod config set -a my-api -f app/app-config.json -e qa
```

Now let's refresh the qa cabinet with the latest settings:
```
cod config deploy -a my-api -f app-app-config.json -c sprint15
``` 


### Different Ways to View Config

There are 3 different commands to view config settings:

```
cod config view
```
`config view` renders the ultimate file as it would be (without resolving secret references)
```
cod asset view -t config
```
`asset view -t config` renders the actual artifact that lives inside a running container
 and 
```
cod config settings get
```
`config settings get` renders individual settings at a single specific scope


Each of these commands can be used as an export by setting the `--silent` flag and redirecting the output to a file.  eg: 
```
cod config settings get --silent -a my-api -t env --enterprise-scope -o json > myfile.json
```



## Take-aways

There's basically 3 main points to remember:

1. The commands `cod config delete` and `cod config set` read in ONLY setting/value pairs.  You have to set the destinations (asset, file, cabinet, etc) on these commands to declare where they will be written (no matter where the piped input came from).

2. TTY User interaction gets disabled when you pipe stdin.  It get automatically sets the `--silent` flag, so you have to get your destination command set up the way you like it before you execute it.

3. the `--setting` arg is multi-use on `cod config delete`, and it supports globbing.  eg: `--setting 'db.*'`.  
**USE LITERAL QUOTATIONS WHEN GLOBBING**: Otherwise your shell may execute the glob in the current working directory before Codiac gets a chance to interpret it.  That is, your shell may automatically pass a list of local files matching your glob to the Codiac CLI instead of the glob pattern itself. 

Point 1 allows you to do batch deletes, batch edits, and batch copies.
Point 2 will tell you when it's unhappy.
