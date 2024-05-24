---
sidebar_label: CLI Commands
id: cli-commands
title: Codiac CLI Command Reference
description: Detailed list of all the Codiac CLI commands
tags:
  - Intro
  - Getting started
---

Codiac CLI documentation. Comprehensive list of commands, flags, features, and examples.


# Usage

<!-- usage -->
```sh-session
$ npm install -g @codiac.io/codiac-cli
$ codiac COMMAND
running command...
$ codiac (--version|-v)
@codiac.io/codiac-cli/1.3.6 linux-x64 node-v16.20.2
$ codiac --help [COMMAND]
USAGE
  $ codiac COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
- [Usage](#usage)
- [Commands](#commands)
  - [`codiac asset create`](#codiac-asset-create)
  - [`codiac asset destroy`](#codiac-asset-destroy)
  - [`codiac asset get [CMD]`](#codiac-asset-get-cmd)
  - [`codiac asset helm [SETTING]`](#codiac-asset-helm-setting)
  - [`codiac asset list`](#codiac-asset-list)
  - [`codiac asset mon [CMD]`](#codiac-asset-mon-cmd)
  - [`codiac asset monitor [CMD]`](#codiac-asset-monitor-cmd)
  - [`codiac asset new`](#codiac-asset-new)
  - [`codiac asset probe create [CMD]`](#codiac-asset-probe-create-cmd)
  - [`codiac asset recycle`](#codiac-asset-recycle)
  - [`codiac asset view [CMD]`](#codiac-asset-view-cmd)
  - [`codiac asset vol add [MOUNTPATH]`](#codiac-asset-vol-add-mountpath)
  - [`codiac asset vol create [MOUNTPATH]`](#codiac-asset-vol-create-mountpath)
  - [`codiac asset vol del`](#codiac-asset-vol-del)
  - [`codiac asset vol delete`](#codiac-asset-vol-delete)
  - [`codiac asset vol list`](#codiac-asset-vol-list)
  - [`codiac asset volume add [MOUNTPATH]`](#codiac-asset-volume-add-mountpath)
  - [`codiac asset volume create [MOUNTPATH]`](#codiac-asset-volume-create-mountpath)
  - [`codiac asset volume del`](#codiac-asset-volume-del)
  - [`codiac asset volume delete`](#codiac-asset-volume-delete)
  - [`codiac asset volume list`](#codiac-asset-volume-list)
  - [`codiac asset volumes del`](#codiac-asset-volumes-del)
  - [`codiac asset volumes delete`](#codiac-asset-volumes-delete)
  - [`codiac asset volumes list`](#codiac-asset-volumes-list)
  - [`codiac autocomplete [SHELL]`](#codiac-autocomplete-shell)
  - [`codiac branch [NAME]`](#codiac-branch-name)
  - [`codiac branch current`](#codiac-branch-current)
  - [`codiac branch list`](#codiac-branch-list)
  - [`codiac branches current`](#codiac-branches-current)
  - [`codiac branches list`](#codiac-branches-list)
  - [`codiac build`](#codiac-build)
  - [`codiac cab create [CABINET]`](#codiac-cab-create-cabinet)
  - [`codiac cab list`](#codiac-cab-list)
  - [`codiac cab obliterate [CABINET]`](#codiac-cab-obliterate-cabinet)
  - [`codiac cabinet create [CABINET]`](#codiac-cabinet-create-cabinet)
  - [`codiac cabinet list`](#codiac-cabinet-list)
  - [`codiac cabinet obliterate [CABINET]`](#codiac-cabinet-obliterate-cabinet)
  - [`codiac cfg add [SETTING]`](#codiac-cfg-add-setting)
  - [`codiac cfg delete [SETTING]`](#codiac-cfg-delete-setting)
  - [`codiac cfg view [SETTING]`](#codiac-cfg-view-setting)
  - [`codiac cli`](#codiac-cli)
  - [`codiac cluster create [NAME]`](#codiac-cluster-create-name)
  - [`codiac cluster deinit [NAME]`](#codiac-cluster-deinit-name)
  - [`codiac cluster destroy [NAME]`](#codiac-cluster-destroy-name)
  - [`codiac cluster forget`](#codiac-cluster-forget)
  - [`codiac cluster grant [NAME]`](#codiac-cluster-grant-name)
  - [`codiac cluster init [NAME]`](#codiac-cluster-init-name)
  - [`codiac cluster list`](#codiac-cluster-list)
  - [`codiac cluster recreate [NAME]`](#codiac-cluster-recreate-name)
  - [`codiac commit [MESSAGE]`](#codiac-commit-message)
  - [`codiac config add [SETTING]`](#codiac-config-add-setting)
  - [`codiac config delete [SETTING]`](#codiac-config-delete-setting)
  - [`codiac config deploy`](#codiac-config-deploy)
  - [`codiac config import [SETTING]`](#codiac-config-import-setting)
  - [`codiac config set [SETTING]`](#codiac-config-set-setting)
  - [`codiac config view [SETTING]`](#codiac-config-view-setting)
  - [`codiac csp login [PROVIDER]`](#codiac-csp-login-provider)
  - [`codiac csp logout [PROVIDER]`](#codiac-csp-logout-provider)
  - [`codiac dash`](#codiac-dash)
  - [`codiac dep [NAME]`](#codiac-dep-name)
  - [`codiac dep create [URL]`](#codiac-dep-create-url)
  - [`codiac dep install`](#codiac-dep-install)
  - [`codiac dep list`](#codiac-dep-list)
  - [`codiac dep remove [NAME]`](#codiac-dep-remove-name)
  - [`codiac dep source [NAME]`](#codiac-dep-source-name)
  - [`codiac dep src [NAME]`](#codiac-dep-src-name)
  - [`codiac dep syncup DEPENDENCY`](#codiac-dep-syncup-dependency)
  - [`codiac dep unsource [NAME]`](#codiac-dep-unsource-name)
  - [`codiac dep unsrc [NAME]`](#codiac-dep-unsrc-name)
  - [`codiac dep upgrade [DEPENDENCY]`](#codiac-dep-upgrade-dependency)
  - [`codiac deploy`](#codiac-deploy)
  - [`codiac domain map [DOMAIN]`](#codiac-domain-map-domain)
  - [`codiac ent list`](#codiac-ent-list)
  - [`codiac enterprise create [CODE]`](#codiac-enterprise-create-code)
  - [`codiac enterprise list`](#codiac-enterprise-list)
  - [`codiac env add [SETTING]`](#codiac-env-add-setting)
  - [`codiac enviro create [NAME]`](#codiac-enviro-create-name)
  - [`codiac enviro list`](#codiac-enviro-list)
  - [`codiac environment create [NAME]`](#codiac-environment-create-name)
  - [`codiac environment list`](#codiac-environment-list)
  - [`codiac fileshare capture`](#codiac-fileshare-capture)
  - [`codiac filestore capture`](#codiac-filestore-capture)
  - [`codiac help [COMMANDS]`](#codiac-help-commands)
  - [`codiac host map [DOMAIN]`](#codiac-host-map-domain)
  - [`codiac identify [TOKENNAME]`](#codiac-identify-tokenname)
  - [`codiac identity [TOKENNAME]`](#codiac-identity-tokenname)
  - [`codiac identity delete [NAME]`](#codiac-identity-delete-name)
  - [`codiac identity list`](#codiac-identity-list)
  - [`codiac identity remove [NAME]`](#codiac-identity-remove-name)
  - [`codiac image [IMAGENAME]`](#codiac-image-imagename)
  - [`codiac image add [IMAGENAME]`](#codiac-image-add-imagename)
  - [`codiac image delete IMAGENAME`](#codiac-image-delete-imagename)
  - [`codiac image list`](#codiac-image-list)
  - [`codiac image patch IMAGENAME`](#codiac-image-patch-imagename)
  - [`codiac image remove IMAGENAME`](#codiac-image-remove-imagename)
  - [`codiac imageRegistry capture`](#codiac-imageregistry-capture)
  - [`codiac imageRegistry forget`](#codiac-imageregistry-forget)
  - [`codiac imageRegistry pullSecret set`](#codiac-imageregistry-pullsecret-set)
  - [`codiac imageRegistry pullSecret unset`](#codiac-imageregistry-pullsecret-unset)
  - [`codiac images add [IMAGENAME]`](#codiac-images-add-imagename)
  - [`codiac images list`](#codiac-images-list)
  - [`codiac images patch IMAGENAME`](#codiac-images-patch-imagename)
  - [`codiac images remove IMAGENAME`](#codiac-images-remove-imagename)
  - [`codiac images version NAME`](#codiac-images-version-name)
  - [`codiac img [IMAGENAME]`](#codiac-img-imagename)
  - [`codiac img add [IMAGENAME]`](#codiac-img-add-imagename)
  - [`codiac img delete IMAGENAME`](#codiac-img-delete-imagename)
  - [`codiac img list`](#codiac-img-list)
  - [`codiac img patch IMAGENAME`](#codiac-img-patch-imagename)
  - [`codiac img remove IMAGENAME`](#codiac-img-remove-imagename)
  - [`codiac init DIRECTORY`](#codiac-init-directory)
  - [`codiac k9s`](#codiac-k9s)
  - [`codiac kit create [SETTING]`](#codiac-kit-create-setting)
  - [`codiac login`](#codiac-login)
  - [`codiac logout`](#codiac-logout)
  - [`codiac merge [BRANCH]`](#codiac-merge-branch)
  - [`codiac noc cluster create [NAME]`](#codiac-noc-cluster-create-name)
  - [`codiac noc cluster deinit [NAME]`](#codiac-noc-cluster-deinit-name)
  - [`codiac noc cluster destroy [NAME]`](#codiac-noc-cluster-destroy-name)
  - [`codiac noc cluster forget`](#codiac-noc-cluster-forget)
  - [`codiac noc cluster grant [NAME]`](#codiac-noc-cluster-grant-name)
  - [`codiac noc cluster init [NAME]`](#codiac-noc-cluster-init-name)
  - [`codiac noc cluster list`](#codiac-noc-cluster-list)
  - [`codiac noc cluster recreate [NAME]`](#codiac-noc-cluster-recreate-name)
  - [`codiac pkg add [DEFINITIONFILE]`](#codiac-pkg-add-definitionfile)
  - [`codiac pkg delete [PACKAGENAME]`](#codiac-pkg-delete-packagename)
  - [`codiac pkg list`](#codiac-pkg-list)
  - [`codiac pkg patch PACKAGENAME`](#codiac-pkg-patch-packagename)
  - [`codiac pkg remove [PACKAGENAME]`](#codiac-pkg-remove-packagename)
  - [`codiac portal`](#codiac-portal)
  - [`codiac publish [NAME]`](#codiac-publish-name)
  - [`codiac pull [NAME]`](#codiac-pull-name)
  - [`codiac pullsecret`](#codiac-pullsecret)
  - [`codiac pullsecret unset`](#codiac-pullsecret-unset)
  - [`codiac push [NAME]`](#codiac-push-name)
  - [`codiac run`](#codiac-run)
  - [`codiac secretStore`](#codiac-secretstore)
  - [`codiac secretStore capture`](#codiac-secretstore-capture)
  - [`codiac secretStore forget`](#codiac-secretstore-forget)
  - [`codiac stage [FILES]`](#codiac-stage-files)
  - [`codiac stash [FILE]`](#codiac-stash-file)
  - [`codiac status`](#codiac-status)
  - [`codiac stop`](#codiac-stop)
  - [`codiac switch [NAME]`](#codiac-switch-name)
  - [`codiac sync [NAME]`](#codiac-sync-name)
  - [`codiac tenant create [NAME]`](#codiac-tenant-create-name)
  - [`codiac tenant switch [NAME]`](#codiac-tenant-switch-name)
  - [`codiac token [TOKENNAME]`](#codiac-token-tokenname)
  - [`codiac token delete [NAME]`](#codiac-token-delete-name)
  - [`codiac token list`](#codiac-token-list)
  - [`codiac token remove [NAME]`](#codiac-token-remove-name)
  - [`codiac unstage [FILES]`](#codiac-unstage-files)
  - [`codiac update [CHANNEL]`](#codiac-update-channel)
  - [`codiac user login`](#codiac-user-login)
  - [`codiac user show`](#codiac-user-show)
  - [`codiac version`](#codiac-version)
  - [`codiac view dash`](#codiac-view-dash)
  - [`codiac view dashboard`](#codiac-view-dashboard)
  - [`codiac view k9s`](#codiac-view-k9s)
  - [`codiac view pods`](#codiac-view-pods)
  - [`codiac whereami`](#codiac-whereami)
  - [`codiac whoami`](#codiac-whoami)

## `codiac asset create`

Creates a new asset in the given enterprise from an image that exists in a container registry.

```
USAGE
  $ codiac asset create [-h] [-k <value> | -i <value> | -r <value>] [-g] [-o] [-t] [-y   -n <value> -c <value> -e
    <value> -p <value>]

FLAGS
  -c, --code=<value>        The host name to assign this asset in the domain url.  eg: 'myasset' in
                            'myasset.your-domain.com' (Optional: defaults to the asset name).
  -e, --enterprise=<value>  The name of the enterprise in which to create this asset. (defaults to the current
                            enterprise context)
  -g, --hasIngress          Declaration that the asset service is to be externally accessible (optional: defaults to
                            false).
  -h, --help                Show CLI help.
  -i, --image=<value>       The image name including scope prefix if applicable (eg: '@yourCompany/your-api-image').
  -k, --kit=<value>         The name of the kit (with library prefix, eg: 'library/kitName') to use to create the asset.
                            Use '?' to be prompted for a kit (Optional: used instead of calling for the image).
  -n, --name=<value>        The name to give the enterprise asset (Optional: defaults to the image name without the
                            scope prefix).
  -o, --routedWithoutName   Indicates that this asset will be the base ingress against your DNS. eg: true services
                            yourwebsite.com (as root/naked) (optional: defaults to false).
  -p, --port=<value>        The default port to assign the asset when deployed to a cabinet (optional).
  -r, --registry=<value>    The container registry in which the image exists (defaults to docker hub).
  -t, --toScript            Outputs an assembled command string, NO execution
  -y, --silent              (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                            prior runs. Requires: image,registry,name,code,enterprise,port

DESCRIPTION
  Creates a new asset in the given enterprise from an image that exists in a container registry.

ALIASES
  $ codiac asset new
```

## `codiac asset destroy`

UN-deploys a given asset from a given cabinet. Defaults to removing only the pod deployments and leaving the service in place; set the --scorch argument to remove the service.

```
USAGE
  $ codiac asset destroy [-h] [-a <value>] [-v <value>] [-s] [-y]

FLAGS
  -a, --asset=<value>    Search string for the name of the asset to destroy (use ? to be prompted).
  -h, --help             Show CLI help.
  -s, --scorch           (Optional: defaults to false) Destroys the service too, instead of just the deployment and
                         pods.
  -v, --version=<value>  Search string for the version of the asset to destroy  (use ? to be prompted).
  -y, --silent           (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                         prior runs.

DESCRIPTION
  UN-deploys a given asset from a given cabinet.  Defaults to removing only the pod deployments and leaving the service
  in place; set the --scorch argument to remove the service.
```

## `codiac asset get [CMD]`

Renders a selected type of content for an asset

```
USAGE
  $ codiac asset get [CMD] [-h] [-e <value>] [-a <value>] [-n <value>] [-c <value>] [-r <value>] [-t
    logs|term|exec|env|config|status] [--terminal bash|sh] [-f] [-l <value>] [-F <value>] [--takeDefaults | [--silent |
    --echo | --toscript]]

ARGUMENTS
  CMD  (requires type=exec) command and its space-separated arguments to run in the target replica.

FLAGS
  -F, --configFile=<value>   (requires type=config) The root pathname to the config file to fetch.
  -a, --asset=<value>        The name of the asset to view.
  -c, --cabinet=<value>      The name of the cabinet from which the content is to be drawn.
  -e, --enterprise=<value>   The name of the enterprise containing the asset being viewed.
  -f, --logsFollow           (requires type=logs) Follow (aka watch, tail, stream) the output.
  -h, --help                 Show CLI help.
  -l, --logsTail=<value>     [default: 10] (requires type=logs) Lines of recent logs to include in the output.  Enter -1
                             to include the entire log history stored in the container.
  -n, --environment=<value>  The name of the environment in which the cabinet resides.
  -r, --replica=<value>      The name of one of the asset instances currently running in the cabinet.
  -t, --type=<option>        The type of content to retrieve.
                             <options: logs|term|exec|env|config|status>
  --echo                     Echo interaction mode; renders the equivalent non-interactive cli command for future use
                             before final execution.
  --silent                   Non-Interactive mode; executes without any user interaction and fails on any missing or
                             invalid arguments.
  --takeDefaults             Prevents prompting for confirmation on parameters that were passed in or were set to
                             default values.
  --terminal=<option>        Command used to start the terminal (defaults to "bash")
                             <options: bash|sh>
  --toscript                 Toscript interaction mode; renders the equivalent non-interactive cli command WITHOUT any
                             execution.

DESCRIPTION
  Renders a selected type of content for an asset

ALIASES
  $ codiac asset monitor
  $ codiac asset mon
  $ codiac asset get
```

## `codiac asset helm [SETTING]`

Creates a new asset in the given enterprise from an image that exists in a container registry.

```
USAGE
  $ codiac asset helm [SETTING] [-h] [-i <value>] [-y  -r <value> -n <value> -c <value> -e <value> -p <value> -g
    -o]

ARGUMENTS
  SETTING  The key for the config setting to add

FLAGS
  -c, --code=<value>        The host name to assign this asset in the domain url.  eg: 'myasset' in
                            'myasset.your-domain.com' (Optional: defaults to the asset name).
  -e, --enterprise=<value>  The name of the enterprise in which to create this asset. (defaults to the current
                            enterprise context)
  -g, --hasIngress          Declaration that the asset service is to be externally accessible (optional: defaults to
                            false).
  -h, --help                Show CLI help.
  -i, --chart=<value>       The chart name including scope prefix if applicable (eg: '@yourCompany/your-helm-chart').
  -n, --name=<value>        The name to give the enterprise asset (Optional: defaults to the image name without the
                            scope prefix).
  -o, --routedWithoutName   Indicates that this asset will be the base ingress against your DNS. eg: true services
                            yourwebsite.com (as root/naked) (optional: defaults to false).
  -p, --port=<value>        The default port to assign the asset when deployed to a cabinet (optional).
  -r, --registry=<value>    The chart registry in which the chart exists (defaults to docker hub).
  -y, --silent              (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                            prior runs. Requires: image,registry,name,code,enterprise,port,hasIngress,routedWithoutName

DESCRIPTION
  Creates a new asset in the given enterprise from an image that exists in a container registry.

ALIASES
  $ codiac asset new
```

## `codiac asset list`

Shows the list of assets in a given enterprise.

```
USAGE
  $ codiac asset list [-o json|yaml|tree|text] [-h]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: tree] format in which to render the data.
                         <options: json|yaml|tree|text>

DESCRIPTION
  Shows the list of assets in a given enterprise.
```

## `codiac asset mon [CMD]`

Renders a selected type of content for an asset

```
USAGE
  $ codiac asset mon [CMD] [-h] [-e <value>] [-a <value>] [-n <value>] [-c <value>] [-r <value>] [-t
    logs|term|exec|env|config|status] [--terminal bash|sh] [-f] [-l <value>] [-F <value>] [--takeDefaults | [--silent |
    --echo | --toscript]]

ARGUMENTS
  CMD  (requires type=exec) command and its space-separated arguments to run in the target replica.

FLAGS
  -F, --configFile=<value>   (requires type=config) The root pathname to the config file to fetch.
  -a, --asset=<value>        The name of the asset to view.
  -c, --cabinet=<value>      The name of the cabinet from which the content is to be drawn.
  -e, --enterprise=<value>   The name of the enterprise containing the asset being viewed.
  -f, --logsFollow           (requires type=logs) Follow (aka watch, tail, stream) the output.
  -h, --help                 Show CLI help.
  -l, --logsTail=<value>     [default: 10] (requires type=logs) Lines of recent logs to include in the output.  Enter -1
                             to include the entire log history stored in the container.
  -n, --environment=<value>  The name of the environment in which the cabinet resides.
  -r, --replica=<value>      The name of one of the asset instances currently running in the cabinet.
  -t, --type=<option>        The type of content to retrieve.
                             <options: logs|term|exec|env|config|status>
  --echo                     Echo interaction mode; renders the equivalent non-interactive cli command for future use
                             before final execution.
  --silent                   Non-Interactive mode; executes without any user interaction and fails on any missing or
                             invalid arguments.
  --takeDefaults             Prevents prompting for confirmation on parameters that were passed in or were set to
                             default values.
  --terminal=<option>        Command used to start the terminal (defaults to "bash")
                             <options: bash|sh>
  --toscript                 Toscript interaction mode; renders the equivalent non-interactive cli command WITHOUT any
                             execution.

DESCRIPTION
  Renders a selected type of content for an asset

ALIASES
  $ codiac asset monitor
  $ codiac asset mon
  $ codiac asset get
```

## `codiac asset monitor [CMD]`

Renders a selected type of content for an asset

```
USAGE
  $ codiac asset monitor [CMD] [-h] [-e <value>] [-a <value>] [-n <value>] [-c <value>] [-r <value>] [-t
    logs|term|exec|env|config|status] [--terminal bash|sh] [-f] [-l <value>] [-F <value>] [--takeDefaults | [--silent |
    --echo | --toscript]]

ARGUMENTS
  CMD  (requires type=exec) command and its space-separated arguments to run in the target replica.

FLAGS
  -F, --configFile=<value>   (requires type=config) The root pathname to the config file to fetch.
  -a, --asset=<value>        The name of the asset to view.
  -c, --cabinet=<value>      The name of the cabinet from which the content is to be drawn.
  -e, --enterprise=<value>   The name of the enterprise containing the asset being viewed.
  -f, --logsFollow           (requires type=logs) Follow (aka watch, tail, stream) the output.
  -h, --help                 Show CLI help.
  -l, --logsTail=<value>     [default: 10] (requires type=logs) Lines of recent logs to include in the output.  Enter -1
                             to include the entire log history stored in the container.
  -n, --environment=<value>  The name of the environment in which the cabinet resides.
  -r, --replica=<value>      The name of one of the asset instances currently running in the cabinet.
  -t, --type=<option>        The type of content to retrieve.
                             <options: logs|term|exec|env|config|status>
  --echo                     Echo interaction mode; renders the equivalent non-interactive cli command for future use
                             before final execution.
  --silent                   Non-Interactive mode; executes without any user interaction and fails on any missing or
                             invalid arguments.
  --takeDefaults             Prevents prompting for confirmation on parameters that were passed in or were set to
                             default values.
  --terminal=<option>        Command used to start the terminal (defaults to "bash")
                             <options: bash|sh>
  --toscript                 Toscript interaction mode; renders the equivalent non-interactive cli command WITHOUT any
                             execution.

DESCRIPTION
  Renders a selected type of content for an asset

ALIASES
  $ codiac asset monitor
  $ codiac asset mon
  $ codiac asset get
```

## `codiac asset new`

Creates a new asset in the given enterprise from an image that exists in a container registry.

```
USAGE
  $ codiac asset new [-h] [-k <value> | -i <value> | -r <value>] [-g] [-o] [-t] [-y   -n <value> -c <value> -e
    <value> -p <value>]

FLAGS
  -c, --code=<value>        The host name to assign this asset in the domain url.  eg: 'myasset' in
                            'myasset.your-domain.com' (Optional: defaults to the asset name).
  -e, --enterprise=<value>  The name of the enterprise in which to create this asset. (defaults to the current
                            enterprise context)
  -g, --hasIngress          Declaration that the asset service is to be externally accessible (optional: defaults to
                            false).
  -h, --help                Show CLI help.
  -i, --image=<value>       The image name including scope prefix if applicable (eg: '@yourCompany/your-api-image').
  -k, --kit=<value>         The name of the kit (with library prefix, eg: 'library/kitName') to use to create the asset.
                            Use '?' to be prompted for a kit (Optional: used instead of calling for the image).
  -n, --name=<value>        The name to give the enterprise asset (Optional: defaults to the image name without the
                            scope prefix).
  -o, --routedWithoutName   Indicates that this asset will be the base ingress against your DNS. eg: true services
                            yourwebsite.com (as root/naked) (optional: defaults to false).
  -p, --port=<value>        The default port to assign the asset when deployed to a cabinet (optional).
  -r, --registry=<value>    The container registry in which the image exists (defaults to docker hub).
  -t, --toScript            Outputs an assembled command string, NO execution
  -y, --silent              (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                            prior runs. Requires: image,registry,name,code,enterprise,port

DESCRIPTION
  Creates a new asset in the given enterprise from an image that exists in a container registry.

ALIASES
  $ codiac asset new
```

## `codiac asset probe create [CMD]`

Declares the implementation of a health or readiness probe for an asset.

```
USAGE
  $ codiac asset probe create [CMD] -u readiness|liveness|startup [-h] [-n <value>] [-a <value>] [-v <value>] [-d
    <value>] [-p <value>] [--predefined <value> | --exec | --grpc | --http | --socket] [-x <value>] [--execCommand
    <value> ] [--grpcHost <value> ] [--grpcPort <value> ] [--httpScheme http|https ] [--httpHost <value> ] [--httpPort
    <value> ] [--httpPath <value> ] [-h <value> ] [--socketHost <value> ] [--socketPort <value> ]

ARGUMENTS
  CMD  (requires --exec) command and its space-separated arguments to run in the target replica.

FLAGS
  -a, --asset=<value>          The name of the asset to which this probe is to apply.
  -d, --delay=<value>          The time (in seconds) to wait before the first execution of the probe.
  -h, --help                   Show CLI help.
  -h, --httpHeader=<value>...  (For use only with http) Key value pair (in format x=y) to be used as an http header in
                               an http probe action.
  -n, --enterprise=<value>     The name of the enterprise to which this probe is to apply.
  -p, --period=<value>         [default: 10] How often (in seconds) to fire the probe.
  -u, --usage=<option>         (required) [default: readiness] The diagnostic purpose the probe will serve.
                               <options: readiness|liveness|startup>
  -v, --versions=<value>       Asset version range for which this probe is to be used. (optional: defaults to >=latest)
  -x, --action=<value>         The JSON specification for the probe action itself.  The structure follows the
                               actionType.
  --exec                       Declares the probe shall be carried out as an executable CLI command. A return code of
                               zero indicates success.  Any nonzero result indicates failure.
  --execCommand=<value>...     (For use only with exec) The executable command to run as the probe, as a single string,
                               or as an array of commands and arguments.  If it returns any nonzero result, the probe
                               gets interpreted as a negative/failure.
  --grpc                       Declares the probe shall be carried out as a grpc api request.
  --grpcHost=<value>           (For use only with grpc).
  --grpcPort=<value>           (For use only with grpc).
  --http                       Declares the probe shall be carried out as an http request. Any code greater than or
                               equal to 200 and less than 400 indicates success. Any other code indicates failure.
  --httpHost=<value>           .
  --httpPath=<value>           (For use only with http).
  --httpPort=<value>           (For use only with http).
  --httpScheme=<option>        (For use only with http) The http protocol to use.
                               <options: http|https>
  --predefined=<value>         Calls out by name for an existing standard or shared probe action.  Use this argument
                               instead of defining the probe action with the exec, grpc, http or socket arguments.
  --socket                     Declares the probe shall be carried out as a TCP Socket request.
  --socketHost=<value>         (For use only with socket).
  --socketPort=<value>         (For use only with socket).

DESCRIPTION
  Declares the implementation of a health or readiness probe for an asset.

ALIASES
  $ codiac asset probe create

EXAMPLES
  cod probe:create --predefined builtin-heartbeat-file-exists

  cod probe:create -p 15 --exec --execCommand "cat /app/data/last-heartbeat.json"

  cod probe:create -n acme -a myapi -u readiness -p 15 --exec --execCommand "cat /app/data/last-heartbeat.json"

  cod probe:create -n acme -a myapi -u readiness -p 15 --exec --execCommand cat --execCommand /app/data/last-heartbeat.json

  cod probe:create -n acme -a myapi -u readiness -p 15 --http --httpScheme https --httpHost myapi.acme.com --httpPort 443 --httpPath /diag/heartbeat -h Accept=application/json -h user-agent=MyUserAgent
```

## `codiac asset recycle`

Deploys a given asset to a given cabinet. Defaults to current version.

```
USAGE
  $ codiac asset recycle [-h] [-a <value>] [-v <value>] [-y -e <value> -c <value>]

FLAGS
  -a, --asset=<value>           Search string for the name of the asset to deploy (use ? to be prompted).
  -c, --cabinetName=<value>     Target cabinet name you want deploy
  -e, --enterpriseCode=<value>  Code (name) of the enterprise to deploy
  -h, --help                    Show CLI help.
  -v, --version=<value>         Search string for the version of the asset to deploy  (use ? to be prompted).
  -y, --silent                  (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                                from prior runs. Requires: enterpriseCode,cabinetName

DESCRIPTION
  Deploys a given asset to a given cabinet.  Defaults to current version.
```

## `codiac asset view [CMD]`

Renders a selected type of content for an asset

```
USAGE
  $ codiac asset view [CMD] [-h] [-e <value>] [-a <value>] [-n <value>] [-c <value>] [-r <value>] [-t
    logs|term|exec|env|config|status] [--terminal bash|sh] [-f] [-l <value>] [-F <value>] [--takeDefaults | [--silent |
    --echo | --toscript]]

ARGUMENTS
  CMD  (requires type=exec) command and its space-separated arguments to run in the target replica.

FLAGS
  -F, --configFile=<value>   (requires type=config) The root pathname to the config file to fetch.
  -a, --asset=<value>        The name of the asset to view.
  -c, --cabinet=<value>      The name of the cabinet from which the content is to be drawn.
  -e, --enterprise=<value>   The name of the enterprise containing the asset being viewed.
  -f, --logsFollow           (requires type=logs) Follow (aka watch, tail, stream) the output.
  -h, --help                 Show CLI help.
  -l, --logsTail=<value>     [default: 10] (requires type=logs) Lines of recent logs to include in the output.  Enter -1
                             to include the entire log history stored in the container.
  -n, --environment=<value>  The name of the environment in which the cabinet resides.
  -r, --replica=<value>      The name of one of the asset instances currently running in the cabinet.
  -t, --type=<option>        The type of content to retrieve.
                             <options: logs|term|exec|env|config|status>
  --echo                     Echo interaction mode; renders the equivalent non-interactive cli command for future use
                             before final execution.
  --silent                   Non-Interactive mode; executes without any user interaction and fails on any missing or
                             invalid arguments.
  --takeDefaults             Prevents prompting for confirmation on parameters that were passed in or were set to
                             default values.
  --terminal=<option>        Command used to start the terminal (defaults to "bash")
                             <options: bash|sh>
  --toscript                 Toscript interaction mode; renders the equivalent non-interactive cli command WITHOUT any
                             execution.

DESCRIPTION
  Renders a selected type of content for an asset

ALIASES
  $ codiac asset monitor
  $ codiac asset mon
  $ codiac asset get
```

## `codiac asset vol add [MOUNTPATH]`

Declares a named path for mounting a volume to instances of the asset.

```
USAGE
  $ codiac asset vol add [MOUNTPATH] [-h] [-d <value>] [-y -n <value>]

ARGUMENTS
  MOUNTPATH  Fully qualified mounting path, inside the container, of the folder being mapped as a volume.  Must be
             unique for the asset.

FLAGS
  -d, --description=<value>  Any notes or other information to help clarify the intended purpose of this folder, to
                             assist during the configuration phase when assigning an actual physical file store to it.
  -h, --help                 Show CLI help.
  -n, --name=<value>         Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for
                             the asset.
  -y, --silent               (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                             from prior runs. Requires: name

DESCRIPTION
  Declares a named path for mounting a volume to instances of the asset.

ALIASES
  $ codiac asset vol create
  $ codiac asset vol add
  $ codiac asset volume add
```

## `codiac asset vol create [MOUNTPATH]`

Declares a named path for mounting a volume to instances of the asset.

```
USAGE
  $ codiac asset vol create [MOUNTPATH] [-h] [-d <value>] [-y -n <value>]

ARGUMENTS
  MOUNTPATH  Fully qualified mounting path, inside the container, of the folder being mapped as a volume.  Must be
             unique for the asset.

FLAGS
  -d, --description=<value>  Any notes or other information to help clarify the intended purpose of this folder, to
                             assist during the configuration phase when assigning an actual physical file store to it.
  -h, --help                 Show CLI help.
  -n, --name=<value>         Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for
                             the asset.
  -y, --silent               (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                             from prior runs. Requires: name

DESCRIPTION
  Declares a named path for mounting a volume to instances of the asset.

ALIASES
  $ codiac asset vol create
  $ codiac asset vol add
  $ codiac asset volume add
```

## `codiac asset vol del`

Deletes an existing volume mount in the asset

```
USAGE
  $ codiac asset vol del [-h] [-y -n <value>]

FLAGS
  -h, --help          Show CLI help.
  -n, --name=<value>  Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for the
                      asset.
  -y, --silent        (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior
                      runs. Requires: name

DESCRIPTION
  Deletes an existing volume mount in the asset

ALIASES
  $ codiac asset vol delete
  $ codiac asset volumes delete
  $ codiac asset volume del
  $ codiac asset vol del
  $ codiac asset volumes del
```

## `codiac asset vol delete`

Deletes an existing volume mount in the asset

```
USAGE
  $ codiac asset vol delete [-h] [-y -n <value>]

FLAGS
  -h, --help          Show CLI help.
  -n, --name=<value>  Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for the
                      asset.
  -y, --silent        (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior
                      runs. Requires: name

DESCRIPTION
  Deletes an existing volume mount in the asset

ALIASES
  $ codiac asset vol delete
  $ codiac asset volumes delete
  $ codiac asset volume del
  $ codiac asset vol del
  $ codiac asset volumes del
```

## `codiac asset vol list`

Renders the currently declared mount paths for the asset.

```
USAGE
  $ codiac asset vol list [-h] [-p <value>] [-o pretty|json|yaml|auto] [-y -n <value>]

FLAGS
  -h, --help             Show CLI help.
  -n, --name=<value>     Filter volumes within the asset by mount name.
  -o, --output=<option>  [default: auto] Output format of the actual settings data document.
                         <options: pretty|json|yaml|auto>
  -p, --path=<value>     Filter volumes within the asset by mount path.
  -y, --silent           (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                         prior runs. Requires: name

DESCRIPTION
  Renders the currently declared mount paths for the asset.

ALIASES
  $ codiac asset vol list
  $ codiac asset volumes list
```

## `codiac asset volume add [MOUNTPATH]`

Declares a named path for mounting a volume to instances of the asset.

```
USAGE
  $ codiac asset volume add [MOUNTPATH] [-h] [-d <value>] [-y -n <value>]

ARGUMENTS
  MOUNTPATH  Fully qualified mounting path, inside the container, of the folder being mapped as a volume.  Must be
             unique for the asset.

FLAGS
  -d, --description=<value>  Any notes or other information to help clarify the intended purpose of this folder, to
                             assist during the configuration phase when assigning an actual physical file store to it.
  -h, --help                 Show CLI help.
  -n, --name=<value>         Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for
                             the asset.
  -y, --silent               (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                             from prior runs. Requires: name

DESCRIPTION
  Declares a named path for mounting a volume to instances of the asset.

ALIASES
  $ codiac asset vol create
  $ codiac asset vol add
  $ codiac asset volume add
```

## `codiac asset volume create [MOUNTPATH]`

Declares a named path for mounting a volume to instances of the asset.

```
USAGE
  $ codiac asset volume create [MOUNTPATH] [-h] [-d <value>] [-y -n <value>]

ARGUMENTS
  MOUNTPATH  Fully qualified mounting path, inside the container, of the folder being mapped as a volume.  Must be
             unique for the asset.

FLAGS
  -d, --description=<value>  Any notes or other information to help clarify the intended purpose of this folder, to
                             assist during the configuration phase when assigning an actual physical file store to it.
  -h, --help                 Show CLI help.
  -n, --name=<value>         Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for
                             the asset.
  -y, --silent               (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                             from prior runs. Requires: name

DESCRIPTION
  Declares a named path for mounting a volume to instances of the asset.

ALIASES
  $ codiac asset vol create
  $ codiac asset vol add
  $ codiac asset volume add
```

## `codiac asset volume del`

Deletes an existing volume mount in the asset

```
USAGE
  $ codiac asset volume del [-h] [-y -n <value>]

FLAGS
  -h, --help          Show CLI help.
  -n, --name=<value>  Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for the
                      asset.
  -y, --silent        (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior
                      runs. Requires: name

DESCRIPTION
  Deletes an existing volume mount in the asset

ALIASES
  $ codiac asset vol delete
  $ codiac asset volumes delete
  $ codiac asset volume del
  $ codiac asset vol del
  $ codiac asset volumes del
```

## `codiac asset volume delete`

Deletes an existing volume mount in the asset

```
USAGE
  $ codiac asset volume delete [-h] [-y -n <value>]

FLAGS
  -h, --help          Show CLI help.
  -n, --name=<value>  Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for the
                      asset.
  -y, --silent        (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior
                      runs. Requires: name

DESCRIPTION
  Deletes an existing volume mount in the asset

ALIASES
  $ codiac asset vol delete
  $ codiac asset volumes delete
  $ codiac asset volume del
  $ codiac asset vol del
  $ codiac asset volumes del
```

## `codiac asset volume list`

Renders the currently declared mount paths for the asset.

```
USAGE
  $ codiac asset volume list [-h] [-p <value>] [-o pretty|json|yaml|auto] [-y -n <value>]

FLAGS
  -h, --help             Show CLI help.
  -n, --name=<value>     Filter volumes within the asset by mount name.
  -o, --output=<option>  [default: auto] Output format of the actual settings data document.
                         <options: pretty|json|yaml|auto>
  -p, --path=<value>     Filter volumes within the asset by mount path.
  -y, --silent           (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                         prior runs. Requires: name

DESCRIPTION
  Renders the currently declared mount paths for the asset.

ALIASES
  $ codiac asset vol list
  $ codiac asset volumes list
```

## `codiac asset volumes del`

Deletes an existing volume mount in the asset

```
USAGE
  $ codiac asset volumes del [-h] [-y -n <value>]

FLAGS
  -h, --help          Show CLI help.
  -n, --name=<value>  Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for the
                      asset.
  -y, --silent        (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior
                      runs. Requires: name

DESCRIPTION
  Deletes an existing volume mount in the asset

ALIASES
  $ codiac asset vol delete
  $ codiac asset volumes delete
  $ codiac asset volume del
  $ codiac asset vol del
  $ codiac asset volumes del
```

## `codiac asset volumes delete`

Deletes an existing volume mount in the asset

```
USAGE
  $ codiac asset volumes delete [-h] [-y -n <value>]

FLAGS
  -h, --help          Show CLI help.
  -n, --name=<value>  Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for the
                      asset.
  -y, --silent        (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior
                      runs. Requires: name

DESCRIPTION
  Deletes an existing volume mount in the asset

ALIASES
  $ codiac asset vol delete
  $ codiac asset volumes delete
  $ codiac asset volume del
  $ codiac asset vol del
  $ codiac asset volumes del
```

## `codiac asset volumes list`

Renders the currently declared mount paths for the asset.

```
USAGE
  $ codiac asset volumes list [-h] [-p <value>] [-o pretty|json|yaml|auto] [-y -n <value>]

FLAGS
  -h, --help             Show CLI help.
  -n, --name=<value>     Filter volumes within the asset by mount name.
  -o, --output=<option>  [default: auto] Output format of the actual settings data document.
                         <options: pretty|json|yaml|auto>
  -p, --path=<value>     Filter volumes within the asset by mount path.
  -y, --silent           (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                         prior runs. Requires: name

DESCRIPTION
  Renders the currently declared mount paths for the asset.

ALIASES
  $ codiac asset vol list
  $ codiac asset volumes list
```

## `codiac autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ codiac autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ codiac autocomplete

  $ codiac autocomplete bash

  $ codiac autocomplete zsh

  $ codiac autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.4.6/src/commands/autocomplete/index.ts)_

## `codiac branch [NAME]`

Creates a new branch for the parent project and any sourced dependencies.

```
USAGE
  $ codiac branch [NAME] [-s] [-h]

ARGUMENTS
  NAME  The name of the branch to create.

FLAGS
  -h, --help    Show CLI help.
  -s, --switch  Automatically switches to the new branch after creating it.

DESCRIPTION
  Creates a new branch for the parent project and any sourced dependencies.
```

_See code: [src/commands/branch.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/branch.ts)_

## `codiac branch current`

Renders the name of the current branch (for the main project and for any sourced dependencies).

```
USAGE
  $ codiac branch current [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Renders the name of the current branch (for the main project and for any sourced dependencies).

ALIASES
  $ codiac branches current
```

## `codiac branch list`

Lists out existing branches for the project repo.

```
USAGE
  $ codiac branch list [-h] [-r | -l]

FLAGS
  -h, --help     Displays the help document for this command.
  -l, --locals   (Optional, defaults to false) Limits to local branches only.
  -r, --remotes  (Optional, defaults to false) Limits to remote branches only.

DESCRIPTION
  Lists out existing branches for the project repo.

ALIASES
  $ codiac branches list
```

## `codiac branches current`

Renders the name of the current branch (for the main project and for any sourced dependencies).

```
USAGE
  $ codiac branches current [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Renders the name of the current branch (for the main project and for any sourced dependencies).

ALIASES
  $ codiac branches current
```

## `codiac branches list`

Lists out existing branches for the project repo.

```
USAGE
  $ codiac branches list [-h] [-r | -l]

FLAGS
  -h, --help     Displays the help document for this command.
  -l, --locals   (Optional, defaults to false) Limits to local branches only.
  -r, --remotes  (Optional, defaults to false) Limits to remote branches only.

DESCRIPTION
  Lists out existing branches for the project repo.

ALIASES
  $ codiac branches list
```

## `codiac build`

Builds the project and the docker container

```
USAGE
  $ codiac build [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>]
    [--withoutdefaults] [-v] [-h] [-f <value>] [-n] [-d -b <value>] [--version <value>] [-M] [-m] [-p] [-r] [-c] [-s
    images|packages] [-i <value>] [-t <value>]

FLAGS
  -M, --major                     Increments the version by one Major version number (using Major.Minor.Patch).
  -b, --buildDef=<value>          Replaces the default build command with the given process.  For a multi-command
                                  sequence, separate each with a Pipe (|) character.
  -c, --clear                     Completely deletes the output folder before building.
  -d, --asDefault                 Overwrites the default build command for the project with the buildDef argument
  -f, --frameworkVersion=<value>  (Future) Explicitly sets the version of the Toyhauler base image to use (default:
                                  latest).
  -h, --help                      Show CLI help.
  -i, --image=<value>...          (optional, defaults to all) Limits the list of images to build.  Value must match the
                                  name property of an image export defined in the codiac project file (codiac.json)
  -m, --minor                     Increments the version by one Minor version number (using Major.Minor.Patch).
  -n, --noCache                   Ignores the local Docker image cache, thereby forcing a fresh download of each image
                                  from its container registry layer in the build.
  -p, --patch                     Increments the version by one Patch version number (using Major.Minor.Patch).
  -r, --prerelease                Increments the prerelease number (using Major.Minor.Patch-PreRelease).  NOTE:
                                  Increments the Patch version number when appending.
  -s, --skip=<option>             (optional) Prevents the building of any declared container images or packages.
                                  <options: images|packages>
  -t, --buildTarget=<value>       (optional) Calls out the only stage to be built for images defined with multistage
                                  builds.
  -v, --verbose                   Renders additional logging levels (detail, trace, and debug) to the console output.
  --as=<value>                    Fires this command with an argument list that was previously remembered using the
                                  --rememberAs flag.
  --remember                      Saves the arguments, so they are invoked as defaults whenever this command gets
                                  called.
  --rememberAs=<value>            Saves the given argument list so that it can be called by name.
  --unremember=<value>            Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                  that were previously stored under the given name (use "--unRemember default" to clear
                                  default argument list memorized with the --remember flag).
  --version=<value>               Overwrites the full version for the build (using Major.Minor.Patch).
  --withoutdefaults               Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Builds the project and the docker container
```

_See code: [src/commands/build.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/build.ts)_

## `codiac cab create [CABINET]`

Initializes a cabinet for a given enterprise and environment. Overwrites any existing if forced, otherwise returns an error if the cabinet already exists.

```
USAGE
  $ codiac cab create [CABINET] [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>]
    [--withoutdefaults] [-v] [-h] [-f] [-e <value>]

ARGUMENTS
  CABINET  The name of the cabinet to create

FLAGS
  -e, --environment=<value>  (optional: defaults to that of the current project branch) The name of the environment this
                             cabinet will be grouped under.
  -f, --force                Overwrites and reinitializes if the cabinet already exists.
  -h, --help                 Show CLI help.
  -v, --verbose              Renders additional logging levels (detail, trace, and debug) to the console output.
  --as=<value>               Fires this command with an argument list that was previously remembered using the
                             --rememberAs flag.
  --remember                 Saves the arguments, so they are invoked as defaults whenever this command gets called.
  --rememberAs=<value>       Saves the given argument list so that it can be called by name.
  --unremember=<value>       Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                             were previously stored under the given name (use "--unRemember default" to clear default
                             argument list memorized with the --remember flag).
  --withoutdefaults          Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Initializes a cabinet for a given enterprise and environment.  Overwrites any existing if forced, otherwise returns an
  error if the cabinet already exists.

ALIASES
  $ codiac cab create
```

## `codiac cab list`

Shows the list of cabinets and environment.

```
USAGE
  $ codiac cab list [-o json|yaml|tree|text] [-h]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: tree] format in which to render the data.
                         <options: json|yaml|tree|text>

DESCRIPTION
  Shows the list of cabinets and environment.

ALIASES
  $ codiac cab list
```

## `codiac cab obliterate [CABINET]`

Hard-deletes an entire cabinet and everything in it; makes it as if the cabinet itself never existed.

```
USAGE
  $ codiac cab obliterate [CABINET] [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>]
    [--withoutdefaults] [-v] [-h] [-e <value>]

ARGUMENTS
  CABINET  The name of the cabinet

FLAGS
  -e, --environment=<value>  (optional: defaults to that of the current project branch) The name of the environment this
                             cabinet will be grouped under.
  -h, --help                 Show CLI help.
  -v, --verbose              Renders additional logging levels (detail, trace, and debug) to the console output.
  --as=<value>               Fires this command with an argument list that was previously remembered using the
                             --rememberAs flag.
  --remember                 Saves the arguments, so they are invoked as defaults whenever this command gets called.
  --rememberAs=<value>       Saves the given argument list so that it can be called by name.
  --unremember=<value>       Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                             were previously stored under the given name (use "--unRemember default" to clear default
                             argument list memorized with the --remember flag).
  --withoutdefaults          Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Hard-deletes an entire cabinet and everything in it; makes it as if the cabinet itself never existed.

ALIASES
  $ codiac cab obliterate
```

## `codiac cabinet create [CABINET]`

Initializes a cabinet for a given enterprise and environment. Overwrites any existing if forced, otherwise returns an error if the cabinet already exists.

```
USAGE
  $ codiac cabinet create [CABINET] [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>]
    [--withoutdefaults] [-v] [-h] [-f] [-e <value>]

ARGUMENTS
  CABINET  The name of the cabinet to create

FLAGS
  -e, --environment=<value>  (optional: defaults to that of the current project branch) The name of the environment this
                             cabinet will be grouped under.
  -f, --force                Overwrites and reinitializes if the cabinet already exists.
  -h, --help                 Show CLI help.
  -v, --verbose              Renders additional logging levels (detail, trace, and debug) to the console output.
  --as=<value>               Fires this command with an argument list that was previously remembered using the
                             --rememberAs flag.
  --remember                 Saves the arguments, so they are invoked as defaults whenever this command gets called.
  --rememberAs=<value>       Saves the given argument list so that it can be called by name.
  --unremember=<value>       Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                             were previously stored under the given name (use "--unRemember default" to clear default
                             argument list memorized with the --remember flag).
  --withoutdefaults          Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Initializes a cabinet for a given enterprise and environment.  Overwrites any existing if forced, otherwise returns an
  error if the cabinet already exists.

ALIASES
  $ codiac cab create
```

## `codiac cabinet list`

Shows the list of cabinets and environment.

```
USAGE
  $ codiac cabinet list [-o json|yaml|tree|text] [-h]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: tree] format in which to render the data.
                         <options: json|yaml|tree|text>

DESCRIPTION
  Shows the list of cabinets and environment.

ALIASES
  $ codiac cab list
```

## `codiac cabinet obliterate [CABINET]`

Hard-deletes an entire cabinet and everything in it; makes it as if the cabinet itself never existed.

```
USAGE
  $ codiac cabinet obliterate [CABINET] [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>]
    [--withoutdefaults] [-v] [-h] [-e <value>]

ARGUMENTS
  CABINET  The name of the cabinet

FLAGS
  -e, --environment=<value>  (optional: defaults to that of the current project branch) The name of the environment this
                             cabinet will be grouped under.
  -h, --help                 Show CLI help.
  -v, --verbose              Renders additional logging levels (detail, trace, and debug) to the console output.
  --as=<value>               Fires this command with an argument list that was previously remembered using the
                             --rememberAs flag.
  --remember                 Saves the arguments, so they are invoked as defaults whenever this command gets called.
  --rememberAs=<value>       Saves the given argument list so that it can be called by name.
  --unremember=<value>       Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                             were previously stored under the given name (use "--unRemember default" to clear default
                             argument list memorized with the --remember flag).
  --withoutdefaults          Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Hard-deletes an entire cabinet and everything in it; makes it as if the cabinet itself never existed.

ALIASES
  $ codiac cab obliterate
```

## `codiac cfg add [SETTING]`

Adds a key value pair to the app config

```
USAGE
  $ codiac cfg add [SETTING] [-h] [-s <value>] [-v <value>] [-n <value> | -e <value> | -c <value>] [-f
    <value>]

ARGUMENTS
  SETTING  The key for the config setting to add

FLAGS
  -c, --cabinet=<value>      The name of the cabinet to which this value is to apply.
  -e, --environment=<value>  The name of the environment to which this value is to apply.
  -f, --file=<value>         The path-name to the file to which the settings are written, relative to the root of the
                             Codiac project.
  -h, --help                 Show CLI help.
  -n, --enterprise=<value>   The name of the enterprise to which this value is to apply.
  -s, --setting=<value>      The config key (in dotpath/JSONPath), relative to the root of the config.
  -v, --value=<value>        The actual concrete data to be applied as the setting value.

DESCRIPTION
  Adds a key value pair to the app config

ALIASES
  $ codiac config set
  $ codiac cfg add
```

## `codiac cfg delete [SETTING]`

Removes the given keys from the app config

```
USAGE
  $ codiac cfg delete [SETTING] [-h] [-s <value>] [-n <value> | -e <value> | -c <value>] [-f <value>]

ARGUMENTS
  SETTING  (optional) Specific config key to remove. Omit to select from a list. Enter "all" to clear the entire config.

FLAGS
  -c, --cabinet=<value>      The name of the cabinet to which this value is to apply.
  -e, --environment=<value>  The name of the environment to which this value is to apply.
  -f, --file=<value>         The path-name to the config file holding the settings, relative to the root of the Codiac
                             project.
  -h, --help                 Show CLI help.
  -n, --enterprise=<value>   The name of the enterprise to which this value is to apply.
  -s, --setting=<value>      The config key (in dotpath/JSONPath), relative to the root of the config.

DESCRIPTION
  Removes the given keys from the app config

ALIASES
  $ codiac cfg delete
```

## `codiac cfg view [SETTING]`

Shows the values that are explicitly set in the given config

```
USAGE
  $ codiac cfg view [SETTING] [-h] [-p] [-a <value>] [-f <value>] [-y [-c <value> |  | ] ] [-o
    pretty|json|yaml|auto]

ARGUMENTS
  SETTING  (optional) Name of specific setting value to view; omit to show all.

FLAGS
  -a, --asset=<value>    Search string for the name of the asset to deploy (use ? to be prompted).
  -c, --cabinet=<value>  The name of the cabinet to assemble the configuration for.
  -f, --file=<value>     [default: app-config.json] The relative pathname of the config file to view (relative to the
                         root of the codiac project).
  -h, --help             Show CLI help.
  -o, --output=<option>  [default: auto] Output format of the actual settings data document.
                         <options: pretty|json|yaml|auto>
  -p, --prompt           Invokes a prompt to select from the existing settings.
  -y, --silent           (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                         prior runs.

DESCRIPTION
  Shows the values that are explicitly set in the given config

ALIASES
  $ codiac cfg view

EXAMPLES
  $ cod config:view

  $ cod config:view port

  $ cod config:view -p

  $ cod config:view -o pretty

  $ cod config:view -c dev2 -f settings.json -o pretty
```

## `codiac cli`

Applies settings to the Codiac CLI itself (scoped to the local machine).

```
USAGE
  $ codiac cli [-h] [-s <value>]

FLAGS
  -h, --help            Show the help docs for this command.
  -s, --set=<value>...  A key=value expression for the setting to apply.  Leave this argument out of your call to get a
                        list of the available settings keys and their types.

DESCRIPTION
  Applies settings to the Codiac CLI itself (scoped to the local machine).
```

_See code: [src/commands/cli.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/cli.ts)_

## `codiac cluster create [NAME]`

Provisions the physical cluster

```
USAGE
  $ codiac cluster create [NAME] [-h] [-p <value>] [-k <value>] [-u <value>] [-u <value>] [-y <value> -s <value> -g
    <value> -l <value> -n <value> -q <value>] [-t]

ARGUMENTS
  NAME  Proposed name of the cluster

FLAGS
  -g, --resourceGroup=<value>         The Azure resource group to create for the cluster.
  -h, --help                          Show CLI help.
  -k, --subnet=<value>                The resource id of the subnet in which the cluster is to be created.
  -l, --location=<value>              The short name of the azure data center in which the cliuster is to reside.
  -n, --nodeSpec=<value>              The identifier for the type of VM to use for nodes in the cluster.
  -p, --owner=<value>                 Tenant code of the private owner of the cluster
  -q, --nodeQty=<value>               The starting node count with which to create the cluster.
  -s, --providerSubscription=<value>  The Azure subscription Id under which to create the cluster.
  -t, --toScript                      Outputs an assembled command string, NO execution
  -u, --identityUserId=<value>        OPTIONAL. ID of Svc Principal or Managed Identity to execute as. To create k8s
                                      cluster, IP address, and container Pull.  If none supplied Codiac will try to
                                      create one.
  -u, --identityUserName=<value>      OPTIONAL. Name of Svc Principal or Managed Identity to execute as. To create k8s
                                      cluster, IP address, and container Pull.  If none supplied Codiac will try to
                                      create one.
  -y, --silent=<value>                (Optional: defaults to false) Prevents confirmations of user-values. Required:
                                      providerSubscription,resourceGroup,location,nodeSpec,nodeQty

DESCRIPTION
  Provisions the physical cluster

ALIASES
  $ codiac cluster create
```

## `codiac cluster deinit [NAME]`

Deinitialization of the cluster (uninstalls the ingress controller and tls cert manager services)

```
USAGE
  $ codiac cluster deinit [NAME] [-h] [-p aws|azure|dockerHub|other] [-y -n <value>]

ARGUMENTS
  NAME  Name of existing cluster.

FLAGS
  -h, --help               Show CLI help.
  -n, --name=<value>       Name of the cluster.
  -p, --provider=<option>  Code for the cloud service provider.
                           <options: aws|azure|dockerHub|other>
  -y, --silent             (Optional: defaults to false) Prevents interactive user-interface and throws if interaction
                           is needed. Requires arguments: [--name -n]

DESCRIPTION
  Deinitialization of the cluster (uninstalls the ingress controller and tls cert manager services)

ALIASES
  $ codiac cluster deinit
```

## `codiac cluster destroy [NAME]`

Kills the physical cluster, but not the Codiac cluster definition record

```
USAGE
  $ codiac cluster destroy [NAME] [-h] [-p] [-i] [-p azure|aws|dockerHub|other] [-y -n <value>]

ARGUMENTS
  NAME  Proposed name of the cluster

FLAGS
  -h, --help               Show CLI help.
  -i, --deleteIdentity     (optional: defaults to false) Ensures that identity security account for the cluster shall
                           also be deleted after the cluster itself is destroyed.
  -n, --name=<value>       Name of the cluster.
  -p, --partials           Include clusters that were never fully created.
  -p, --provider=<option>  Code for the cloud service provider.
                           <options: azure|aws|dockerHub|other>
  -y, --silent             (Optional: defaults to false) Prevents confirmations of user-values. Required: name

DESCRIPTION
  Kills the physical cluster, but not the Codiac cluster definition record

ALIASES
  $ codiac cluster destroy
```

## `codiac cluster forget`

Permanently removes the record of a cluster. This command does NOT affect any infrastructure; it simply removes the cluster from the Codiac consciousness. Use `cod cluster capture` to re-acquire an existing but forgotten cluster. You must remove all cabinets and environments in a cluster before forgetting it.

```
USAGE
  $ codiac cluster forget [-y -n <value> -p azure|aws|dockerHub|other]

FLAGS
  -n, --name=<value>       Name of the cluster.
  -p, --provider=<option>  Code for the cloud service provider.
                           <options: azure|aws|dockerHub|other>
  -y, --silent             (Optional: defaults to false) Prevents confirmations of user-values. Required: ["name",
                           "provider"]

DESCRIPTION
  Permanently removes the record of a cluster.  This command does NOT affect any infrastructure; it simply removes the
  cluster from the Codiac consciousness.  Use `cod cluster capture` to re-acquire an existing but forgotten cluster.
  You must remove all cabinets and environments in a cluster before forgetting it.

ALIASES
  $ codiac cluster forget
```

## `codiac cluster grant [NAME]`

(AWS Only) Provides cluster access to the given user.

```
USAGE
  $ codiac cluster grant [NAME] [-h] [-y -c <value> -u <value>]

ARGUMENTS
  NAME  Proposed name of the cluster

FLAGS
  -c, --cluster=<value>  Name of the cluster.
  -h, --help             Show CLI help.
  -u, --user=<value>     AWS usernames (as email) to add.
  -y, --silent           (Optional: defaults to false) Prevents confirmations of user-values.

DESCRIPTION
  (AWS Only) Provides cluster access to the given user.

ALIASES
  $ codiac cluster grant
```

## `codiac cluster init [NAME]`

Post-create initialization for the cluster (installs the ingress controller service)

```
USAGE
  $ codiac cluster init [NAME] [-h] [-p azure|aws|dockerHub|other] [-y -n <value>]

ARGUMENTS
  NAME  Name of existing cluster to initialize.

FLAGS
  -h, --help               Show CLI help.
  -n, --name=<value>       Name of the cluster.
  -p, --provider=<option>  Code for the cloud service provider.
                           <options: azure|aws|dockerHub|other>
  -y, --silent             (Optional: defaults to false) Prevents interactive user-interface and throws if interaction
                           is needed. Requires arguments: [--name -n]

DESCRIPTION
  Post-create initialization for the cluster (installs the ingress controller service)

ALIASES
  $ codiac cluster init
```

## `codiac cluster list`

Shows the list of clusters.

```
USAGE
  $ codiac cluster list [-o text|tree|json|yaml] [-h]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: tree] format in which to render the data.
                         <options: text|tree|json|yaml>

DESCRIPTION
  Shows the list of clusters.

ALIASES
  $ codiac cluster list
```

## `codiac cluster recreate [NAME]`

Provisions the physical cluster using the existing ClusterDef record (with any changes provided by the caller).

```
USAGE
  $ codiac cluster recreate [NAME] [-h] [-p <value>] [-s <value>] [-g <value>] [-l <value>] [-k <value>] [-v <value>]
    [-w -n <value> -q <value>] [--identityName <value>] [-y] [-t]

ARGUMENTS
  NAME  Name of an existing cluster to re-create

FLAGS
  -g, --resourceGroup=<value>         The Azure resource group to create for the cluster.
  -h, --help                          Show CLI help.
  -k, --subnet=<value>                The resource id of the subnet in which the cluster is to be created.
  -l, --location=<value>              The short name of the azure data center in which the cliuster is to reside.
  -n, --nodeSpec=<value>              The identifier for the type of VM to use for nodes in the cluster.
  -p, --owner=<value>                 Tenant code of the private owner of the cluster
  -q, --nodeQty=<value>               The starting node count with which to create the cluster.
  -s, --providerSubscription=<value>  The Azure subscription Id under which to create the cluster.
  -t, --toScript                      Outputs an assembled command string, NO execution
  -v, --k8sVersion=<value>            The Kubernetes version for the new cluster.  This must be a supported version from
                                      the cloud provider.
  -w, --windowsSupport                Add a windows nodepool.
  -y, --silent                        (Optional: defaults to false) Prevents confirmations of user-values. Required:
  --identityName=<value>              name of an existing service principal to use for the cluster identity

DESCRIPTION
  Provisions the physical cluster using the existing ClusterDef record (with any changes provided by the caller).

ALIASES
  $ codiac cluster recreate
```

## `codiac commit [MESSAGE]`

Commits the currently staged changes on the current branch of the main project and on any sourced dependencies.

```
USAGE
  $ codiac commit [MESSAGE] [-h]

ARGUMENTS
  MESSAGE  The description to include in this particular commit.

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Commits the currently staged changes on the current branch of the main project and on any sourced dependencies.
```

_See code: [src/commands/commit.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/commit.ts)_

## `codiac config add [SETTING]`

Adds a key value pair to the app config

```
USAGE
  $ codiac config add [SETTING] [-h] [-s <value>] [-v <value>] [-n <value> | -e <value> | -c <value>] [-f
    <value>]

ARGUMENTS
  SETTING  The key for the config setting to add

FLAGS
  -c, --cabinet=<value>      The name of the cabinet to which this value is to apply.
  -e, --environment=<value>  The name of the environment to which this value is to apply.
  -f, --file=<value>         The path-name to the file to which the settings are written, relative to the root of the
                             Codiac project.
  -h, --help                 Show CLI help.
  -n, --enterprise=<value>   The name of the enterprise to which this value is to apply.
  -s, --setting=<value>      The config key (in dotpath/JSONPath), relative to the root of the config.
  -v, --value=<value>        The actual concrete data to be applied as the setting value.

DESCRIPTION
  Adds a key value pair to the app config

ALIASES
  $ codiac config set
  $ codiac cfg add
```

## `codiac config delete [SETTING]`

Removes the given keys from the app config

```
USAGE
  $ codiac config delete [SETTING] [-h] [-s <value>] [-n <value> | -e <value> | -c <value>] [-f <value>]

ARGUMENTS
  SETTING  (optional) Specific config key to remove. Omit to select from a list. Enter "all" to clear the entire config.

FLAGS
  -c, --cabinet=<value>      The name of the cabinet to which this value is to apply.
  -e, --environment=<value>  The name of the environment to which this value is to apply.
  -f, --file=<value>         The path-name to the config file holding the settings, relative to the root of the Codiac
                             project.
  -h, --help                 Show CLI help.
  -n, --enterprise=<value>   The name of the enterprise to which this value is to apply.
  -s, --setting=<value>      The config key (in dotpath/JSONPath), relative to the root of the config.

DESCRIPTION
  Removes the given keys from the app config

ALIASES
  $ codiac cfg delete
```

## `codiac config deploy`

Deploys a given asset to a given cabinet. Defaults to current version.

```
USAGE
  $ codiac config deploy [-h] [-a <value>] [-v <value>] [-y -e <value> -c <value>]

FLAGS
  -a, --asset=<value>           Search string for the name of the asset to deploy (use ? to be prompted).
  -c, --cabinetName=<value>     Target cabinet name you want deploy
  -e, --enterpriseCode=<value>  Code (name) of the enterprise to deploy
  -h, --help                    Show CLI help.
  -v, --version=<value>         Search string for the version of the asset to deploy  (use ? to be prompted).
  -y, --silent                  (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                                from prior runs. Requires: enterpriseCode,cabinetName

DESCRIPTION
  Deploys a given asset to a given cabinet.  Defaults to current version.
```

## `codiac config import [SETTING]`

Adds a key value pair to the app config

```
USAGE
  $ codiac config import [SETTING] [-h] [-n <value> | -e <value> | -c <value>] [-s <value>] [-f <value>]

ARGUMENTS
  SETTING  The key for the config setting to add

FLAGS
  -c, --cabinet=<value>          The name of the cabinet to which this value is to apply.
  -e, --environment=<value>      The name of the environment to which this value is to apply.
  -f, --runtimePathName=<value>  (optional, uses the original filename) The pathname relative to the app root to assume
                                 in the container.
  -h, --help                     Show CLI help.
  -n, --enterprise=<value>       The name of the enterprise to which this value is to apply.
  -s, --sourceFile=<value>       The path-name to the LOCAL file to which the settings are written, relative to the root
                                 of the Codiac project.

DESCRIPTION
  Adds a key value pair to the app config

ALIASES
  $ codiac cfg add
```

## `codiac config set [SETTING]`

Adds a key value pair to the app config

```
USAGE
  $ codiac config set [SETTING] [-h] [-s <value>] [-v <value>] [-n <value> | -e <value> | -c <value>] [-f
    <value>]

ARGUMENTS
  SETTING  The key for the config setting to add

FLAGS
  -c, --cabinet=<value>      The name of the cabinet to which this value is to apply.
  -e, --environment=<value>  The name of the environment to which this value is to apply.
  -f, --file=<value>         The path-name to the file to which the settings are written, relative to the root of the
                             Codiac project.
  -h, --help                 Show CLI help.
  -n, --enterprise=<value>   The name of the enterprise to which this value is to apply.
  -s, --setting=<value>      The config key (in dotpath/JSONPath), relative to the root of the config.
  -v, --value=<value>        The actual concrete data to be applied as the setting value.

DESCRIPTION
  Adds a key value pair to the app config

ALIASES
  $ codiac config set
  $ codiac cfg add
```

## `codiac config view [SETTING]`

Shows the values that are explicitly set in the given config

```
USAGE
  $ codiac config view [SETTING] [-h] [-p] [-a <value>] [-f <value>] [-y [-c <value> |  | ] ] [-o
    pretty|json|yaml|auto]

ARGUMENTS
  SETTING  (optional) Name of specific setting value to view; omit to show all.

FLAGS
  -a, --asset=<value>    Search string for the name of the asset to deploy (use ? to be prompted).
  -c, --cabinet=<value>  The name of the cabinet to assemble the configuration for.
  -f, --file=<value>     [default: app-config.json] The relative pathname of the config file to view (relative to the
                         root of the codiac project).
  -h, --help             Show CLI help.
  -o, --output=<option>  [default: auto] Output format of the actual settings data document.
                         <options: pretty|json|yaml|auto>
  -p, --prompt           Invokes a prompt to select from the existing settings.
  -y, --silent           (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                         prior runs.

DESCRIPTION
  Shows the values that are explicitly set in the given config

ALIASES
  $ codiac cfg view

EXAMPLES
  $ cod config:view

  $ cod config:view port

  $ cod config:view -p

  $ cod config:view -o pretty

  $ cod config:view -c dev2 -f settings.json -o pretty
```

## `codiac csp login [PROVIDER]`

Authenticates with the given Cloud Service Provider (CSP), eg: aws, azure, docker. Use this command both to validate credentials and to declare the csp user account for subsequent commands involving that provider.

```
USAGE
  $ codiac csp login [PROVIDER] [-u <value> | --clientSecret] [-p <value> | ] [-y]

ARGUMENTS
  PROVIDER  (aws|azure|dockerHub|other) Code indicating the Cloud Service Provider (CSP) being authenticated with.

FLAGS
  -p, --password=<value>  (must be provided via stdin) The password at the given cloud provider.
  -u, --user=<value>      The username at the given cloud provider.
  -y, --silent            (Optional: defaults to false) Suppresses any user-interaction.
  --clientSecret          (must be provided interactively or via stdin) Invokes the OAuth Client Credentials Flow. Used
                          to authenticate when no user is present, such as an internal service or in a devops pipeline.
                          Note: This is a secret that must be created when Codiac gets registered as a trusted
                          application in your cloud service provider subscription (eg: in azure, this is an app
                          registration in Azure AD).

DESCRIPTION
  Authenticates with the given Cloud Service Provider (CSP), eg: aws, azure, docker.  Use this command both to validate
  credentials and to declare the csp user account for subsequent commands involving that provider.

EXAMPLES
  cod csp login

  cod csp login docker

  cat mypassword.txt | cod csp login -u me@mydomain.com --silent docker

  cat theclientsecret.txt | cod csp login --clientSecret --silent azure
```

## `codiac csp logout [PROVIDER]`

Closes session with the given Cloud Service Provider (CSP), eg: aws, azure, docker. Use this command to clear the local cache for your security account at that provider.

```
USAGE
  $ codiac csp logout [PROVIDER] [-y]

ARGUMENTS
  PROVIDER  (aws|azure|dockerHub|other) Code indicating the Cloud Service Provider (CSP) being authenticated with.

FLAGS
  -y, --silent  (Optional: defaults to false) Suppresses any user-interaction.

DESCRIPTION
  Closes session with the given Cloud Service Provider (CSP), eg: aws, azure, docker.  Use this command to clear the
  local cache for your security account at that provider.

EXAMPLES
  cod csp logout

  cod csp logout docker

  cod csp logout --silent azure
```

## `codiac dash`

Spins up the dashboard for a given cabinet

```
USAGE
  $ codiac dash [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Spins up the dashboard for a given cabinet

ALIASES
  $ codiac view dash
  $ codiac dash
```

## `codiac dep [NAME]`

Installs a package into current project.

```
USAGE
  $ codiac dep [NAME] [-h] [-v <value>]

ARGUMENTS
  NAME  The official unique name of the package to install.

FLAGS
  -h, --help             Show CLI help.
  -v, --version=<value>  version of the package to install

DESCRIPTION
  Installs a package into current project.
```

_See code: [src/commands/dep.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/dep.ts)_

## `codiac dep create [URL]`

Sources a new dependency into the project from an existing repo url, initializes it with the package repository, and publishes the initial version if it is not already. If the package repository is already initialized, the latest package version is used.

```
USAGE
  $ codiac dep create [URL] -n <value> [-h] [-v <value>]

ARGUMENTS
  URL  The official clone url for the repository.

FLAGS
  -h, --help             Show CLI help.
  -n, --pkgName=<value>  (required) Package name including any scope prefix (eg: @codiac.io/)
  -v, --version=<value>  Version to apply to the dependency package if it has not yet been initialized.

DESCRIPTION
  Sources a new dependency into the project from an existing repo url, initializes it with the package repository, and
  publishes the initial version if it is not already.  If the package repository is already initialized, the latest
  package version is used.
```

## `codiac dep install`

installs any missing dependency packages into the local project folder.

```
USAGE
  $ codiac dep install [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  installs any missing dependency packages into the local project folder.
```

## `codiac dep list`

Shows the dependencies for the project.

```
USAGE
  $ codiac dep list [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Shows the dependencies for the project.
```

## `codiac dep remove [NAME]`

Removes a dependency from the project.

```
USAGE
  $ codiac dep remove [NAME] [-h] [-d]

ARGUMENTS
  NAME  The official unique name of the dependency package.

FLAGS
  -d, --discard  If the dependency to remove is sourced into the project, setting this flag discards all uncommitted
                 changes (staged and unstaged) before removing it.  Again, uncomitted changes are LOST when this flag is
                 set.
  -h, --help     Show CLI help.

DESCRIPTION
  Removes a dependency from the project.
```

## `codiac dep source [NAME]`

Loads the source code for the given dependency

```
USAGE
  $ codiac dep source [NAME] [-h] [-d <value>]

ARGUMENTS
  NAME  The official unique name of the dependency package.

FLAGS
  -d, --distSubPath=<value>  Subfolder path, relative to the root of the submodule,  to the folder from which the
                             package is created,  aka: the build output folder or 'dist' folder (eg: bin, dist, or lib,
                             ...etc).  This folder is used as the target folder for npm link.
  -h, --help                 Show CLI help.

DESCRIPTION
  Loads the source code for the given dependency

ALIASES
  $ codiac dep src
```

## `codiac dep src [NAME]`

Loads the source code for the given dependency

```
USAGE
  $ codiac dep src [NAME] [-h] [-d <value>]

ARGUMENTS
  NAME  The official unique name of the dependency package.

FLAGS
  -d, --distSubPath=<value>  Subfolder path, relative to the root of the submodule,  to the folder from which the
                             package is created,  aka: the build output folder or 'dist' folder (eg: bin, dist, or lib,
                             ...etc).  This folder is used as the target folder for npm link.
  -h, --help                 Show CLI help.

DESCRIPTION
  Loads the source code for the given dependency

ALIASES
  $ codiac dep src
```

## `codiac dep syncup DEPENDENCY`

Publishes the dependency in its current state and upgrades to it in the main project.

```
USAGE
  $ codiac dep syncup DEPENDENCY [-h]

ARGUMENTS
  DEPENDENCY  The package name of the dependency to sync up into the main project

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Publishes the dependency in its current state and upgrades to it in the main project.
```

## `codiac dep unsource [NAME]`

Exits source mode for the given dependency by physically removing its source code folder from the project, and points the project dependency back to the package version it previously depended on.

```
USAGE
  $ codiac dep unsource [NAME] [-h] [-d] [-c]

ARGUMENTS
  NAME  The official unique name of the dependency package.

FLAGS
  -c, --comment  The commit message for any outstanding changes.
  -d, --discard  Discards all uncommitted changes (staged and unstaged) before unsourcing, and goes back to the
                 previously installed version of the dependency.  Again, uncomitted changes are LOST when this flag is
                 set.
  -h, --help     Show CLI help.

DESCRIPTION
  Exits source mode for the given dependency by physically removing its source code folder from the project, and points
  the project dependency back to the package version it previously depended on.

ALIASES
  $ codiac dep unsrc
```

## `codiac dep unsrc [NAME]`

Exits source mode for the given dependency by physically removing its source code folder from the project, and points the project dependency back to the package version it previously depended on.

```
USAGE
  $ codiac dep unsrc [NAME] [-h] [-d] [-c]

ARGUMENTS
  NAME  The official unique name of the dependency package.

FLAGS
  -c, --comment  The commit message for any outstanding changes.
  -d, --discard  Discards all uncommitted changes (staged and unstaged) before unsourcing, and goes back to the
                 previously installed version of the dependency.  Again, uncomitted changes are LOST when this flag is
                 set.
  -h, --help     Show CLI help.

DESCRIPTION
  Exits source mode for the given dependency by physically removing its source code folder from the project, and points
  the project dependency back to the package version it previously depended on.

ALIASES
  $ codiac dep unsrc
```

## `codiac dep upgrade [DEPENDENCY]`

describe the command here

```
USAGE
  $ codiac dep upgrade [DEPENDENCY] [-h] [-v <value>]

ARGUMENTS
  DEPENDENCY  The dependency to upgrade

FLAGS
  -h, --help             Show CLI help.
  -v, --version=<value>  version of the package to install

DESCRIPTION
  describe the command here
```

## `codiac deploy`

Deploys a given asset to a given cabinet. Defaults to current version.

```
USAGE
  $ codiac deploy [-h] [-a <value>] [-u <value>] [-n <value>] [-p <value>] [-y -e <value> -c <value>]

FLAGS
  -a, --asset=<value>             Search string for the name of the asset to deploy (use ? or ?? to be prompted).
  -c, --cabinetName=<value>       Target cabinet name you want deploy
  -e, --enterpriseCode=<value>    Code (name) of the enterprise to deploy
  -h, --help                      Show CLI help.
  -n, --providerUserName=<value>  OPTIONAL: For silent/scripted calls, bring cloud creds to auth against
  -p, --providerPassword=<value>  OPTIONAL: For silent/scripted calls, bring cloud creds to auth against
  -u, --version=<value>           Search string for the version of the asset to deploy  (use ? or ?? to be prompted).
  -y, --silent                    (Optional: defaults to false) Prevents confirmations of user-values that are
                                  remembered from prior runs. Requires: enterpriseCode,cabinetName

DESCRIPTION
  Deploys a given asset to a given cabinet.  Defaults to current version.
```

_See code: [src/commands/deploy.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/deploy.ts)_

## `codiac domain map [DOMAIN]`

Declares a strategy for mapping assets to ingress routes for a domain name.

```
USAGE
  $ codiac domain map [DOMAIN] [-h] [-n <value>] [-e <value> | -v <value>] [-c <value> | ] [-x]

ARGUMENTS
  DOMAIN  The domain name to route (eg: "my-company.com")

FLAGS
  -c, --cabinet=<value>      The name of the cabinet on which to apply this naming strategy.  Must be qualified by also
                             setting enterprise.  NOTE: You can leave this blank if there is only one. If cabinet names
                             are not unique, use the --enterprise/-e argument to fully qualify the cabinet name.
  -e, --enterprise=<value>   The name of the enterprise on which to apply this naming strategy. NOTE: You can leave this
                             blank if there is only one.
  -h, --help                 Show CLI help.
  -n, --naming=<value>       The host naming strategy to apply.
  -v, --environment=<value>  The name of the environment on which to apply this naming strategy. Must be qualified by
                             also setting enterprise.  NOTE: You can leave this blank if there is only one.
  -x, --noninteractive       Throws errors if user interaction is required.

DESCRIPTION
  Declares a strategy for mapping assets to ingress routes for a domain name.

ALIASES
  $ codiac domain map
```

## `codiac ent list`

Shows the list of enterprises.

```
USAGE
  $ codiac ent list [-o json|yaml|tree|text] [-h]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: tree] format in which to render the data.
                         <options: json|yaml|tree|text>

DESCRIPTION
  Shows the list of enterprises.

ALIASES
  $ codiac ent list
```

## `codiac enterprise create [CODE]`

Creates a new enterprise under the current tenant.

```
USAGE
  $ codiac enterprise create [CODE] [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>]
    [--withoutdefaults] [-v] [-h]

ARGUMENTS
  CODE  The unique human-readable identitifer to use for the enterprise (must be alphanunmeric with no spaces).

FLAGS
  -h, --help            Show CLI help.
  -v, --verbose         Renders additional logging levels (detail, trace, and debug) to the console output.
  --as=<value>          Fires this command with an argument list that was previously remembered using the --rememberAs
                        flag.
  --remember            Saves the arguments, so they are invoked as defaults whenever this command gets called.
  --rememberAs=<value>  Saves the given argument list so that it can be called by name.
  --unremember=<value>  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                        previously stored under the given name (use "--unRemember default" to clear default argument
                        list memorized with the --remember flag).
  --withoutdefaults     Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Creates a new enterprise under the current tenant.
```

## `codiac enterprise list`

Shows the list of enterprises.

```
USAGE
  $ codiac enterprise list [-o json|yaml|tree|text] [-h]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: tree] format in which to render the data.
                         <options: json|yaml|tree|text>

DESCRIPTION
  Shows the list of enterprises.

ALIASES
  $ codiac ent list
```

## `codiac env add [SETTING]`

Adds a key value pair to the app config

```
USAGE
  $ codiac env add [SETTING] [-h] [-s <value>] [-v <value>] [-n <value> | -e <value> | -c <value>]

ARGUMENTS
  SETTING  The name of the environment variable to add

FLAGS
  -c, --cabinet=<value>      The name of the cabinet to which this value is to apply.
  -e, --environment=<value>  The name of the environment to which this value is to apply.
  -h, --help                 Show CLI help.
  -n, --enterprise=<value>   The name of the enterprise to which this value is to apply.
  -s, --setting=<value>      The name of the environment variable to add.
  -v, --value=<value>        The actual concrete data to be applied as the setting value.

DESCRIPTION
  Adds a key value pair to the app config
```

## `codiac enviro create [NAME]`

Initializes a cabinet for a given enterprise and environment. Overwrites any existing if forced, otherwise returns an error if the cabinet already exists.

```
USAGE
  $ codiac enviro create [NAME] [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>]
    [--withoutdefaults] [-v] [-h]

ARGUMENTS
  NAME  The name of the environment to create

FLAGS
  -h, --help            Show CLI help.
  -v, --verbose         Renders additional logging levels (detail, trace, and debug) to the console output.
  --as=<value>          Fires this command with an argument list that was previously remembered using the --rememberAs
                        flag.
  --remember            Saves the arguments, so they are invoked as defaults whenever this command gets called.
  --rememberAs=<value>  Saves the given argument list so that it can be called by name.
  --unremember=<value>  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                        previously stored under the given name (use "--unRemember default" to clear default argument
                        list memorized with the --remember flag).
  --withoutdefaults     Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Initializes a cabinet for a given enterprise and environment.  Overwrites any existing if forced, otherwise returns an
  error if the cabinet already exists.

ALIASES
  $ codiac enviro create
```

## `codiac enviro list`

Shows the list of environments.

```
USAGE
  $ codiac enviro list [-o json|yaml|tree|text] [-h]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: tree] format in which to render the data.
                         <options: json|yaml|tree|text>

DESCRIPTION
  Shows the list of environments.

ALIASES
  $ codiac enviro list
```

## `codiac environment create [NAME]`

Initializes a cabinet for a given enterprise and environment. Overwrites any existing if forced, otherwise returns an error if the cabinet already exists.

```
USAGE
  $ codiac environment create [NAME] [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>]
    [--withoutdefaults] [-v] [-h]

ARGUMENTS
  NAME  The name of the environment to create

FLAGS
  -h, --help            Show CLI help.
  -v, --verbose         Renders additional logging levels (detail, trace, and debug) to the console output.
  --as=<value>          Fires this command with an argument list that was previously remembered using the --rememberAs
                        flag.
  --remember            Saves the arguments, so they are invoked as defaults whenever this command gets called.
  --rememberAs=<value>  Saves the given argument list so that it can be called by name.
  --unremember=<value>  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                        previously stored under the given name (use "--unRemember default" to clear default argument
                        list memorized with the --remember flag).
  --withoutdefaults     Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Initializes a cabinet for a given enterprise and environment.  Overwrites any existing if forced, otherwise returns an
  error if the cabinet already exists.

ALIASES
  $ codiac enviro create
```

## `codiac environment list`

Shows the list of environments.

```
USAGE
  $ codiac environment list [-o json|yaml|tree|text] [-h]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: tree] format in which to render the data.
                         <options: json|yaml|tree|text>

DESCRIPTION
  Shows the list of environments.

ALIASES
  $ codiac enviro list
```

## `codiac fileshare capture`

Creates a reference point in the given enterprise for an existing filestore instance in a cloud provider subscription.

```
USAGE
  $ codiac fileshare capture [-h] [--resourceGroup <value>] [-y -e <value> -n <value> --storageAccount <value>
    --shareName <value> --providerSubscriptionId <value>  ]

FLAGS
  -e, --enterprise=<value>          The name of the enterprise in which to create this asset. (defaults to the current
                                    enterprise context)
  -h, --help                        Show CLI help.
  -n, --name=<value>                The name by which to identify this fileshare definition within the enterprise
                                    (Optional: defaults to the shareName).
  -y, --silent                      (Optional: defaults to false) Prevents confirmations of user-values that are
                                    remembered from prior runs. Requires:
                                    enterprise,name,storageAccount,shareName,providerSubscriptionId,resourceId,accessKey
  --providerSubscriptionId=<value>  The identifier of the cloud provider subscription under which the file storage
                                    account resides.
  --resourceGroup=<value>           The name of the Azure resource group under which the instance is to be created
                                    (Azure-specific).
  --shareName=<value>               The name of the fileshare to connect to within the file storage account.
  --storageAccount=<value>          The name within the cloud provider of the file storage account within which the
                                    share resides.

DESCRIPTION
  Creates a reference point in the given enterprise for an existing filestore instance in a cloud provider subscription.

ALIASES
  $ codiac fileshare capture
```

## `codiac filestore capture`

Creates a reference point in the given enterprise for an existing filestore instance in a cloud provider subscription.

```
USAGE
  $ codiac filestore capture [-h] [--resourceGroup <value>] [-y -e <value> -n <value> --storageAccount <value>
    --shareName <value> --providerSubscriptionId <value>  ]

FLAGS
  -e, --enterprise=<value>          The name of the enterprise in which to create this asset. (defaults to the current
                                    enterprise context)
  -h, --help                        Show CLI help.
  -n, --name=<value>                The name by which to identify this fileshare definition within the enterprise
                                    (Optional: defaults to the shareName).
  -y, --silent                      (Optional: defaults to false) Prevents confirmations of user-values that are
                                    remembered from prior runs. Requires:
                                    enterprise,name,storageAccount,shareName,providerSubscriptionId,resourceId,accessKey
  --providerSubscriptionId=<value>  The identifier of the cloud provider subscription under which the file storage
                                    account resides.
  --resourceGroup=<value>           The name of the Azure resource group under which the instance is to be created
                                    (Azure-specific).
  --shareName=<value>               The name of the fileshare to connect to within the file storage account.
  --storageAccount=<value>          The name within the cloud provider of the file storage account within which the
                                    share resides.

DESCRIPTION
  Creates a reference point in the given enterprise for an existing filestore instance in a cloud provider subscription.

ALIASES
  $ codiac fileshare capture
```

## `codiac help [COMMANDS]`

Display help for codiac.

```
USAGE
  $ codiac help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for codiac.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `codiac host map [DOMAIN]`

Declares a strategy for mapping assets to ingress routes for a domain name.

```
USAGE
  $ codiac host map [DOMAIN] [-h] [-n <value>] [-e <value> | -v <value>] [-c <value> | ] [-x]

ARGUMENTS
  DOMAIN  The domain name to route (eg: "my-company.com")

FLAGS
  -c, --cabinet=<value>      The name of the cabinet on which to apply this naming strategy.  Must be qualified by also
                             setting enterprise.  NOTE: You can leave this blank if there is only one. If cabinet names
                             are not unique, use the --enterprise/-e argument to fully qualify the cabinet name.
  -e, --enterprise=<value>   The name of the enterprise on which to apply this naming strategy. NOTE: You can leave this
                             blank if there is only one.
  -h, --help                 Show CLI help.
  -n, --naming=<value>       The host naming strategy to apply.
  -v, --environment=<value>  The name of the environment on which to apply this naming strategy. Must be qualified by
                             also setting enterprise.  NOTE: You can leave this blank if there is only one.
  -x, --noninteractive       Throws errors if user interaction is required.

DESCRIPTION
  Declares a strategy for mapping assets to ingress routes for a domain name.

ALIASES
  $ codiac domain map
```

## `codiac identify [TOKENNAME]`

Stores an identity token for the current user, for use with a component tool (such as npm). This command acts as an upsert.

```
USAGE
  $ codiac identify [TOKENNAME] -t <value> [-h] [-p npm|azart|other] [-s <value>] [-r <value>] [-g <value> -e
    <value> -f <value>]

ARGUMENTS
  TOKENNAME  (optional) Conventional name (token_for_[provider]_[scope]) for the tokenized identity.  This name will
             also be used for the build environment variable carrying the token.

FLAGS
  -e, --email=<value>         (Azure Artifacts [aka: azart] only) The email address for this identity.  Npm requires for
                              this, but never uses it.
  -f, --feed=<value>          (Azure Artifacts [aka: azart] only) The human readable identifier for the package feed
  -g, --organization=<value>  (Azure Artifacts [aka: azart] only) Human readable identifier for the organization account
                              with the provider.
  -h, --help                  Renders the help document for this command.
  -p, --provider=<option>     [default: npm] The source of the token.
                              <options: npm|azart|other>
  -r, --registryUrl=<value>   The component tool that issued and can consume the token.
  -s, --scope=<value>         The subdivision within the registry for which this token is honored.
  -t, --token=<value>         (required) The actual raw token string itself issued by the provider

DESCRIPTION
  Stores an identity token for the current user, for use with a component tool (such as npm).  This command acts as an
  upsert.

ALIASES
  $ codiac identify
  $ codiac token
```

## `codiac identity [TOKENNAME]`

Stores an identity token for the current user, for use with a component tool (such as npm). This command acts as an upsert.

```
USAGE
  $ codiac identity [TOKENNAME] -t <value> [-h] [-p npm|azart|other] [-s <value>] [-r <value>] [-g <value> -e
    <value> -f <value>]

ARGUMENTS
  TOKENNAME  (optional) Conventional name (token_for_[provider]_[scope]) for the tokenized identity.  This name will
             also be used for the build environment variable carrying the token.

FLAGS
  -e, --email=<value>         (Azure Artifacts [aka: azart] only) The email address for this identity.  Npm requires for
                              this, but never uses it.
  -f, --feed=<value>          (Azure Artifacts [aka: azart] only) The human readable identifier for the package feed
  -g, --organization=<value>  (Azure Artifacts [aka: azart] only) Human readable identifier for the organization account
                              with the provider.
  -h, --help                  Renders the help document for this command.
  -p, --provider=<option>     [default: npm] The source of the token.
                              <options: npm|azart|other>
  -r, --registryUrl=<value>   The component tool that issued and can consume the token.
  -s, --scope=<value>         The subdivision within the registry for which this token is honored.
  -t, --token=<value>         (required) The actual raw token string itself issued by the provider

DESCRIPTION
  Stores an identity token for the current user, for use with a component tool (such as npm).  This command acts as an
  upsert.

ALIASES
  $ codiac identify
  $ codiac token
```

_See code: [src/commands/identity.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/identity.ts)_

## `codiac identity delete [NAME]`

Removes an identity token from storage for the current user.

```
USAGE
  $ codiac identity delete [NAME] [-h]

ARGUMENTS
  NAME  The name of the token to delete.  Use the 'identity:list' command to view the currently stored tokens.

FLAGS
  -h, --help  Displays the help document for this command.

DESCRIPTION
  Removes an identity token from storage for the current user.

ALIASES
  $ codiac identity remove
  $ codiac token delete
  $ codiac token remove
```

## `codiac identity list`

Lists out the identity tokens currently stored for the current user.

```
USAGE
  $ codiac identity list [-h] [-o table|extended|json|csv]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: table] Format for the response data.
                         <options: table|extended|json|csv>

DESCRIPTION
  Lists out the identity tokens currently stored for the current user.

ALIASES
  $ codiac token list
```

## `codiac identity remove [NAME]`

Removes an identity token from storage for the current user.

```
USAGE
  $ codiac identity remove [NAME] [-h]

ARGUMENTS
  NAME  The name of the token to delete.  Use the 'identity:list' command to view the currently stored tokens.

FLAGS
  -h, --help  Displays the help document for this command.

DESCRIPTION
  Removes an identity token from storage for the current user.

ALIASES
  $ codiac identity remove
  $ codiac token delete
  $ codiac token remove
```

## `codiac image [IMAGENAME]`

Configures a container image to be built and published by the project.

```
USAGE
  $ codiac image [IMAGENAME] [-h] [-i <value>] [-e <value>] [-s <value>] [-y -r <value> -p <value> -f
    <value> -u <value> ] [-b <value>]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -b, --buildParams=<value>...
      Additional freeform arguments to apply to the Docker build command.

  -e, --environment=<value>
      (optional) Declaration that this registry shall be the target when publishing to the given environment.

  -f, --sourceFile=<value>
      Path and filename of the image definition file, relative to the project root, (eg: "./Dockerfile").  If omitted, the
      build will use an in-memory image definition auto-generated at build time.

  -h, --help
      Show CLI help.

  -i, --infoUrl=<value>
      (Optional) Address on the registry website or portal of the human-readable web page for the image.

  -p, --port=<value>
      Recommended port number to assign, in the toybox template, to an Asset defined by this image.

  -r, --registryUrl=<value>
      [default: https://index.docker.io/v1] (Optional, defaults to Docker Hub) Address of the container registry to which
      the image will be published (without protocol prefix), eg: "yourimages.azurecr.io".  NOTE: This registry will be
      used by the "publish" command, whereas when running in "local" mode, images will instead be registered to the
      built-in image registry on the local machine.  NOTE:  This url shall define the default publishing target, for use
      when publishing for any environment, unless otherwise specified.

  -s, --password=<value>
      (optional) Password credential for the given registry.  WARNING!! these username/password credentials will be stored
      in the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -u, --username=<value>
      (optional) Login credential for the given registry.  WARNING!! these username/password credentials will be stored in
      the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -y, --silent
      (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior runs. Requires:
      registryUrl,port,sourceFile,username,name

DESCRIPTION
  Configures a container image to be built and published by the project.

ALIASES
  $ codiac image
  $ codiac image add
  $ codiac img
  $ codiac img add
```

## `codiac image add [IMAGENAME]`

Configures a container image to be built and published by the project.

```
USAGE
  $ codiac image add [IMAGENAME] [-h] [-i <value>] [-e <value>] [-s <value>] [-y -r <value> -p <value> -f
    <value> -u <value> ] [-b <value>]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -b, --buildParams=<value>...
      Additional freeform arguments to apply to the Docker build command.

  -e, --environment=<value>
      (optional) Declaration that this registry shall be the target when publishing to the given environment.

  -f, --sourceFile=<value>
      Path and filename of the image definition file, relative to the project root, (eg: "./Dockerfile").  If omitted, the
      build will use an in-memory image definition auto-generated at build time.

  -h, --help
      Show CLI help.

  -i, --infoUrl=<value>
      (Optional) Address on the registry website or portal of the human-readable web page for the image.

  -p, --port=<value>
      Recommended port number to assign, in the toybox template, to an Asset defined by this image.

  -r, --registryUrl=<value>
      [default: https://index.docker.io/v1] (Optional, defaults to Docker Hub) Address of the container registry to which
      the image will be published (without protocol prefix), eg: "yourimages.azurecr.io".  NOTE: This registry will be
      used by the "publish" command, whereas when running in "local" mode, images will instead be registered to the
      built-in image registry on the local machine.  NOTE:  This url shall define the default publishing target, for use
      when publishing for any environment, unless otherwise specified.

  -s, --password=<value>
      (optional) Password credential for the given registry.  WARNING!! these username/password credentials will be stored
      in the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -u, --username=<value>
      (optional) Login credential for the given registry.  WARNING!! these username/password credentials will be stored in
      the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -y, --silent
      (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior runs. Requires:
      registryUrl,port,sourceFile,username,name

DESCRIPTION
  Configures a container image to be built and published by the project.

ALIASES
  $ codiac image
  $ codiac image add
  $ codiac img
  $ codiac img add
```

## `codiac image delete IMAGENAME`

Deletes the given image export from the configuration.

```
USAGE
  $ codiac image delete IMAGENAME [-h]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Deletes the given image export from the configuration.

ALIASES
  $ codiac image remove
  $ codiac img remove
  $ codiac image delete
  $ codiac img delete
```

## `codiac image list`

Renders the list of container images that are configured as project exports.

```
USAGE
  $ codiac image list [-h] [-o table|extended|json|csv]

FLAGS
  -h, --help             Show CLI help.
  -o, --output=<option>  [default: table] Format for the response data.
                         <options: table|extended|json|csv>

DESCRIPTION
  Renders the list of container images that are configured as project exports.

ALIASES
  $ codiac image list
  $ codiac img list
```

## `codiac image patch IMAGENAME`

Applies the given values to an existing image export configuration. Both registryUrl and environment act as filters to limit the operation. That is, an upsert of registry targets is performed for the given image, based on the given registryUrl and/or environment.

```
USAGE
  $ codiac image patch IMAGENAME [-h] [-s <value>] [-u <value>]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -h, --help           Show CLI help.
  -s, --set=<value>    Space-delimited list of key-value pairs tp apply with json-path on the left and the desired value
                       on the right.  (eg:  --set .targets.default.registryUrl=mystuff.azurecr.io)
  -u, --unset=<value>  Space-delimited list of properties to clear, in json-path format.  (eg:  --unset
                       .targets.default)

DESCRIPTION
  Applies the given values to an existing image export configuration.  Both registryUrl and environment act as filters
  to limit the operation.  That is, an upsert of registry targets is performed for the given image, based on the given
  registryUrl and/or environment.

ALIASES
  $ codiac image patch
  $ codiac img patch
```

## `codiac image remove IMAGENAME`

Deletes the given image export from the configuration.

```
USAGE
  $ codiac image remove IMAGENAME [-h]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Deletes the given image export from the configuration.

ALIASES
  $ codiac image remove
  $ codiac img remove
  $ codiac image delete
  $ codiac img delete
```

## `codiac imageRegistry capture`

Upserts the primary and secondary pull secret references for the given container registry.

```
USAGE
  $ codiac imageRegistry capture [-u <value>] [-p aws|azure|dockerHub|other] [-s <value>] [-l <value>] [-z] [-y    -n
    <value>] [-h]

FLAGS
  -h, --help                    Show CLI help.
  -l, --location=<value>        The data center in which the registry resides (use the code name, eg: in Aws use
                                'us-east-1', NOT 'Virginia, US').
  -n, --name=<value>            The resource name of the container registry within the cloud provider subscription.
  -p, --provider=<option>       The cloud provider hosting the container registry.
                                <options: aws|azure|dockerHub|other>
  -s, --subscriptionId=<value>  The id of the cloud provider account in which the registry resides.
  -u, --url=<value>             The container registry url.
  -y, --silent                  (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                                from prior runs. Requires: registry,storeType,storeName,name
  -z, --toScript                Outputs an assembled command string, NO execution

DESCRIPTION
  Upserts the primary and secondary pull secret references for the given container registry.

ALIASES
  $ codiac pullsecret unset
```

## `codiac imageRegistry forget`

Removes the reference to the given container registry for the tenant. Does NOT delete the registry itself.

```
USAGE
  $ codiac imageRegistry forget [-z] [-y -r <value>] [-h]

FLAGS
  -h, --help              Show CLI help.
  -r, --registry=<value>  The container registry to forget.
  -y, --silent            (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                          prior runs. Requires: registry
  -z, --toScript          Outputs an assembled command string, NO execution

DESCRIPTION
  Removes the reference to the given container registry for the tenant.  Does NOT delete the registry itself.
```

## `codiac imageRegistry pullSecret set`

Upserts the primary and secondary pull secret references for the given container registry.

```
USAGE
  $ codiac imageRegistry pullSecret set [-f primary|secondary] [-z] [-y [-r <value> | ] -t
    awsKeyVault|azBlob|azKeyVault|etcd|mongoCollection|mongoDocument -s <value> -n <value>] [-h]

FLAGS
  -f, --item=<option>       [default: primary] Applies the command to either the primary (default) or seoncdary secret
                            for the image registry.
                            <options: primary|secondary>
  -h, --help                Show CLI help.
  -n, --name=<value>        The name of the secret within the secret store.
  -r, --registry=<value>    The container registry in which the image exists (defaults to docker hub).
  -s, --storeName=<value>   The name of the secret store containing the actual pull secrets.
  -t, --storeType=<option>  The type of secret store containing the actual pull secrets.
                            <options: awsKeyVault|azBlob|azKeyVault|etcd|mongoCollection|mongoDocument>
  -y, --silent              (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                            prior runs. Requires: registry,storeType,storeName,name
  -z, --toScript            Outputs an assembled command string, NO execution

DESCRIPTION
  Upserts the primary and secondary pull secret references for the given container registry.

ALIASES
  $ codiac pullsecret
```

## `codiac imageRegistry pullSecret unset`

Removes the primary or secondary pull secret reference for the given container registry.

```
USAGE
  $ codiac imageRegistry pullSecret unset [-f primary|secondary] [-z] [-y [-r <value> | ]   ] [-h]

FLAGS
  -f, --item=<option>     [default: primary] Applies the command to either the primary (default) or seoncdary secret for
                          the image registry.
                          <options: primary|secondary>
  -h, --help              Show CLI help.
  -r, --registry=<value>  The container registry in which the image exists (defaults to docker hub).
  -y, --silent            (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                          prior runs. Requires: registry,storeType,storeName,name
  -z, --toScript          Outputs an assembled command string, NO execution

DESCRIPTION
  Removes the primary or secondary pull secret reference for the given container registry.

ALIASES
  $ codiac pullsecret unset
```

## `codiac images add [IMAGENAME]`

Configures a container image to be built and published by the project.

```
USAGE
  $ codiac images add [IMAGENAME] [-h] [-i <value>] [-e <value>] [-s <value>] [-y -r <value> -p <value> -f
    <value> -u <value> ] [-b <value>]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -b, --buildParams=<value>...
      Additional freeform arguments to apply to the Docker build command.

  -e, --environment=<value>
      (optional) Declaration that this registry shall be the target when publishing to the given environment.

  -f, --sourceFile=<value>
      Path and filename of the image definition file, relative to the project root, (eg: "./Dockerfile").  If omitted, the
      build will use an in-memory image definition auto-generated at build time.

  -h, --help
      Show CLI help.

  -i, --infoUrl=<value>
      (Optional) Address on the registry website or portal of the human-readable web page for the image.

  -p, --port=<value>
      Recommended port number to assign, in the toybox template, to an Asset defined by this image.

  -r, --registryUrl=<value>
      [default: https://index.docker.io/v1] (Optional, defaults to Docker Hub) Address of the container registry to which
      the image will be published (without protocol prefix), eg: "yourimages.azurecr.io".  NOTE: This registry will be
      used by the "publish" command, whereas when running in "local" mode, images will instead be registered to the
      built-in image registry on the local machine.  NOTE:  This url shall define the default publishing target, for use
      when publishing for any environment, unless otherwise specified.

  -s, --password=<value>
      (optional) Password credential for the given registry.  WARNING!! these username/password credentials will be stored
      in the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -u, --username=<value>
      (optional) Login credential for the given registry.  WARNING!! these username/password credentials will be stored in
      the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -y, --silent
      (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior runs. Requires:
      registryUrl,port,sourceFile,username,name

DESCRIPTION
  Configures a container image to be built and published by the project.

ALIASES
  $ codiac image
  $ codiac image add
  $ codiac img
  $ codiac img add
```

## `codiac images list`

Renders the list of container images that are configured as project exports.

```
USAGE
  $ codiac images list [-h] [-o table|extended|json|csv]

FLAGS
  -h, --help             Show CLI help.
  -o, --output=<option>  [default: table] Format for the response data.
                         <options: table|extended|json|csv>

DESCRIPTION
  Renders the list of container images that are configured as project exports.

ALIASES
  $ codiac image list
  $ codiac img list
```

## `codiac images patch IMAGENAME`

Applies the given values to an existing image export configuration. Both registryUrl and environment act as filters to limit the operation. That is, an upsert of registry targets is performed for the given image, based on the given registryUrl and/or environment.

```
USAGE
  $ codiac images patch IMAGENAME [-h] [-s <value>] [-u <value>]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -h, --help           Show CLI help.
  -s, --set=<value>    Space-delimited list of key-value pairs tp apply with json-path on the left and the desired value
                       on the right.  (eg:  --set .targets.default.registryUrl=mystuff.azurecr.io)
  -u, --unset=<value>  Space-delimited list of properties to clear, in json-path format.  (eg:  --unset
                       .targets.default)

DESCRIPTION
  Applies the given values to an existing image export configuration.  Both registryUrl and environment act as filters
  to limit the operation.  That is, an upsert of registry targets is performed for the given image, based on the given
  registryUrl and/or environment.

ALIASES
  $ codiac image patch
  $ codiac img patch
```

## `codiac images remove IMAGENAME`

Deletes the given image export from the configuration.

```
USAGE
  $ codiac images remove IMAGENAME [-h]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Deletes the given image export from the configuration.

ALIASES
  $ codiac image remove
  $ codiac img remove
  $ codiac image delete
  $ codiac img delete
```

## `codiac images version NAME`

Output the local version a given image. useful for ci/cd automation.

```
USAGE
  $ codiac images version NAME [-h] [-o stdOut|json]

ARGUMENTS
  NAME  Image name

FLAGS
  -h, --help             Show CLI help.
  -o, --output=<option>  [default: stdOut] Format for the response data.
                         <options: stdOut|json>

DESCRIPTION
  Output the local version a given image. useful for ci/cd automation.

ALIASES
  $ codiac image list
  $ codiac img list
```

## `codiac img [IMAGENAME]`

Configures a container image to be built and published by the project.

```
USAGE
  $ codiac img [IMAGENAME] [-h] [-i <value>] [-e <value>] [-s <value>] [-y -r <value> -p <value> -f
    <value> -u <value> ] [-b <value>]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -b, --buildParams=<value>...
      Additional freeform arguments to apply to the Docker build command.

  -e, --environment=<value>
      (optional) Declaration that this registry shall be the target when publishing to the given environment.

  -f, --sourceFile=<value>
      Path and filename of the image definition file, relative to the project root, (eg: "./Dockerfile").  If omitted, the
      build will use an in-memory image definition auto-generated at build time.

  -h, --help
      Show CLI help.

  -i, --infoUrl=<value>
      (Optional) Address on the registry website or portal of the human-readable web page for the image.

  -p, --port=<value>
      Recommended port number to assign, in the toybox template, to an Asset defined by this image.

  -r, --registryUrl=<value>
      [default: https://index.docker.io/v1] (Optional, defaults to Docker Hub) Address of the container registry to which
      the image will be published (without protocol prefix), eg: "yourimages.azurecr.io".  NOTE: This registry will be
      used by the "publish" command, whereas when running in "local" mode, images will instead be registered to the
      built-in image registry on the local machine.  NOTE:  This url shall define the default publishing target, for use
      when publishing for any environment, unless otherwise specified.

  -s, --password=<value>
      (optional) Password credential for the given registry.  WARNING!! these username/password credentials will be stored
      in the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -u, --username=<value>
      (optional) Login credential for the given registry.  WARNING!! these username/password credentials will be stored in
      the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -y, --silent
      (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior runs. Requires:
      registryUrl,port,sourceFile,username,name

DESCRIPTION
  Configures a container image to be built and published by the project.

ALIASES
  $ codiac image
  $ codiac image add
  $ codiac img
  $ codiac img add
```

## `codiac img add [IMAGENAME]`

Configures a container image to be built and published by the project.

```
USAGE
  $ codiac img add [IMAGENAME] [-h] [-i <value>] [-e <value>] [-s <value>] [-y -r <value> -p <value> -f
    <value> -u <value> ] [-b <value>]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -b, --buildParams=<value>...
      Additional freeform arguments to apply to the Docker build command.

  -e, --environment=<value>
      (optional) Declaration that this registry shall be the target when publishing to the given environment.

  -f, --sourceFile=<value>
      Path and filename of the image definition file, relative to the project root, (eg: "./Dockerfile").  If omitted, the
      build will use an in-memory image definition auto-generated at build time.

  -h, --help
      Show CLI help.

  -i, --infoUrl=<value>
      (Optional) Address on the registry website or portal of the human-readable web page for the image.

  -p, --port=<value>
      Recommended port number to assign, in the toybox template, to an Asset defined by this image.

  -r, --registryUrl=<value>
      [default: https://index.docker.io/v1] (Optional, defaults to Docker Hub) Address of the container registry to which
      the image will be published (without protocol prefix), eg: "yourimages.azurecr.io".  NOTE: This registry will be
      used by the "publish" command, whereas when running in "local" mode, images will instead be registered to the
      built-in image registry on the local machine.  NOTE:  This url shall define the default publishing target, for use
      when publishing for any environment, unless otherwise specified.

  -s, --password=<value>
      (optional) Password credential for the given registry.  WARNING!! these username/password credentials will be stored
      in the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -u, --username=<value>
      (optional) Login credential for the given registry.  WARNING!! these username/password credentials will be stored in
      the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -y, --silent
      (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior runs. Requires:
      registryUrl,port,sourceFile,username,name

DESCRIPTION
  Configures a container image to be built and published by the project.

ALIASES
  $ codiac image
  $ codiac image add
  $ codiac img
  $ codiac img add
```

## `codiac img delete IMAGENAME`

Deletes the given image export from the configuration.

```
USAGE
  $ codiac img delete IMAGENAME [-h]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Deletes the given image export from the configuration.

ALIASES
  $ codiac image remove
  $ codiac img remove
  $ codiac image delete
  $ codiac img delete
```

## `codiac img list`

Renders the list of container images that are configured as project exports.

```
USAGE
  $ codiac img list [-h] [-o table|extended|json|csv]

FLAGS
  -h, --help             Show CLI help.
  -o, --output=<option>  [default: table] Format for the response data.
                         <options: table|extended|json|csv>

DESCRIPTION
  Renders the list of container images that are configured as project exports.

ALIASES
  $ codiac image list
  $ codiac img list
```

## `codiac img patch IMAGENAME`

Applies the given values to an existing image export configuration. Both registryUrl and environment act as filters to limit the operation. That is, an upsert of registry targets is performed for the given image, based on the given registryUrl and/or environment.

```
USAGE
  $ codiac img patch IMAGENAME [-h] [-s <value>] [-u <value>]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -h, --help           Show CLI help.
  -s, --set=<value>    Space-delimited list of key-value pairs tp apply with json-path on the left and the desired value
                       on the right.  (eg:  --set .targets.default.registryUrl=mystuff.azurecr.io)
  -u, --unset=<value>  Space-delimited list of properties to clear, in json-path format.  (eg:  --unset
                       .targets.default)

DESCRIPTION
  Applies the given values to an existing image export configuration.  Both registryUrl and environment act as filters
  to limit the operation.  That is, an upsert of registry targets is performed for the given image, based on the given
  registryUrl and/or environment.

ALIASES
  $ codiac image patch
  $ codiac img patch
```

## `codiac img remove IMAGENAME`

Deletes the given image export from the configuration.

```
USAGE
  $ codiac img remove IMAGENAME [-h]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Deletes the given image export from the configuration.

ALIASES
  $ codiac image remove
  $ codiac img remove
  $ codiac image delete
  $ codiac img delete
```

## `codiac init DIRECTORY`

Declares the given folder as a project root

```
USAGE
  $ codiac init DIRECTORY [-h] [-c <value>] [-t <value>]

ARGUMENTS
  DIRECTORY  Path to the desired project root, relative to current directory.

FLAGS
  -c, --clone=<value>        (Optional) The git repo from which to hydrate the project folder.
  -h, --help                 Show CLI help.
  -t, --projectType=<value>  (Optional) The type of Codiac project to scaffold.

DESCRIPTION
  Declares the given folder as a project root
```

_See code: [src/commands/init.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/init.ts)_

## `codiac k9s`

Spins up the k9s cli pod viewer

```
USAGE
  $ codiac k9s [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Spins up the k9s cli pod viewer

ALIASES
  $ codiac view k9s
  $ codiac k9s
```

## `codiac kit create [SETTING]`

Creates a new kit from an existing asset.

```
USAGE
  $ codiac kit create [SETTING] [-h] [-s <value>] [-y -a <value> -e <value> -n <value>     ]

ARGUMENTS
  SETTING  The key for the config setting to add

FLAGS
  -a, --asset=<value>       The enterprise asset from which to create the kit.
  -e, --enterprise=<value>  The name of the enterprise containing the given asset. (defaults to the current enterprise
                            context)
  -h, --help                Show CLI help.
  -n, --name=<value>        Override for the name to give the new kit (Optional: defaults to the asset name).
  -s, --scope=<value>       The globally unique name for the directory in which to register the kit.  This value
                            prefixes the kit name to ensure global uniqueness (Optional: defaults to the public shared
                            library).
  -y, --silent              (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                            prior runs. Requires:
                            asset,enterprise,name,code,enterprise,port,hasIngress,routedWithoutName

DESCRIPTION
  Creates a new kit from an existing asset.
```

## `codiac login`

Codiac system login to authenticate user under a tenant.

```
USAGE
  $ codiac login [-h] [-t <value>] [-o -u <value> [-i | -p <value>]] [-y  ]

FLAGS
  -h, --help                Show CLI help.
  -i, --passwordIn          Reads the password directly from the standard input stream.  Enables users to avoid
                            explicitly rendering it in a command string. eg:  `cat mypass.txt | cod login -u joecool
                            --passwordIn`.  Invokes `--silent` mode, so interaction will be disabled.
  -o, --tokenOut            Writes the token as the sole stdout content (so that it is available to be piped or
                            redirected elsewhere, eg `cod login > mycodiactoken.txt`).  Leaves stdout empty on errors.
                            Invokes `--silent` mode, so interaction will be disabled.
  -p, --password=<value>    password on Codiac
  -t, --tenantCode=<value>  Human-readable Identifier for the Codiac tenant to log in under (optional: defaults to the
                            tenant code for the current project or prompts you to select one from your profile).
  -u, --username=<value>    Username on Codiac
  -y, --silent              (Optional: defaults to false) Prevents interactive user-interface and throws if interaction
                            is needed. Requires arguments: [--username -u, --passwordIn -i]

DESCRIPTION
  Codiac system login to authenticate user under a tenant.

ALIASES
  $ codiac user login
```

_See code: [src/commands/login.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/login.ts)_

## `codiac logout`

Resets the current user to anonymous and clears any local user cache.

```
USAGE
  $ codiac logout

DESCRIPTION
  Resets the current user to anonymous and clears any local user cache.

EXAMPLES
  $ codiac logout
```

_See code: [src/commands/logout.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/logout.ts)_

## `codiac merge [BRANCH]`

Merges the given branch into the current branch of the main project and on any sourced dependencies.

```
USAGE
  $ codiac merge [BRANCH] [-h] [-c]

ARGUMENTS
  BRANCH  The branch name to merge into the current one.

FLAGS
  -c, --commit  Commits if merge succeeds.
  -h, --help    Show CLI help.

DESCRIPTION
  Merges the given branch into the current branch of the main project and on any sourced dependencies.
```

_See code: [src/commands/merge.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/merge.ts)_

## `codiac noc cluster create [NAME]`

Provisions the physical cluster

```
USAGE
  $ codiac noc cluster create [NAME] [-h] [-p <value>] [-k <value>] [-u <value>] [-u <value>] [-y <value> -s <value> -g
    <value> -l <value> -n <value> -q <value>] [-t]

ARGUMENTS
  NAME  Proposed name of the cluster

FLAGS
  -g, --resourceGroup=<value>         The Azure resource group to create for the cluster.
  -h, --help                          Show CLI help.
  -k, --subnet=<value>                The resource id of the subnet in which the cluster is to be created.
  -l, --location=<value>              The short name of the azure data center in which the cliuster is to reside.
  -n, --nodeSpec=<value>              The identifier for the type of VM to use for nodes in the cluster.
  -p, --owner=<value>                 Tenant code of the private owner of the cluster
  -q, --nodeQty=<value>               The starting node count with which to create the cluster.
  -s, --providerSubscription=<value>  The Azure subscription Id under which to create the cluster.
  -t, --toScript                      Outputs an assembled command string, NO execution
  -u, --identityUserId=<value>        OPTIONAL. ID of Svc Principal or Managed Identity to execute as. To create k8s
                                      cluster, IP address, and container Pull.  If none supplied Codiac will try to
                                      create one.
  -u, --identityUserName=<value>      OPTIONAL. Name of Svc Principal or Managed Identity to execute as. To create k8s
                                      cluster, IP address, and container Pull.  If none supplied Codiac will try to
                                      create one.
  -y, --silent=<value>                (Optional: defaults to false) Prevents confirmations of user-values. Required:
                                      providerSubscription,resourceGroup,location,nodeSpec,nodeQty

DESCRIPTION
  Provisions the physical cluster

ALIASES
  $ codiac cluster create
```

## `codiac noc cluster deinit [NAME]`

Deinitialization of the cluster (uninstalls the ingress controller and tls cert manager services)

```
USAGE
  $ codiac noc cluster deinit [NAME] [-h] [-p aws|azure|dockerHub|other] [-y -n <value>]

ARGUMENTS
  NAME  Name of existing cluster.

FLAGS
  -h, --help               Show CLI help.
  -n, --name=<value>       Name of the cluster.
  -p, --provider=<option>  Code for the cloud service provider.
                           <options: aws|azure|dockerHub|other>
  -y, --silent             (Optional: defaults to false) Prevents interactive user-interface and throws if interaction
                           is needed. Requires arguments: [--name -n]

DESCRIPTION
  Deinitialization of the cluster (uninstalls the ingress controller and tls cert manager services)

ALIASES
  $ codiac cluster deinit
```

## `codiac noc cluster destroy [NAME]`

Kills the physical cluster, but not the Codiac cluster definition record

```
USAGE
  $ codiac noc cluster destroy [NAME] [-h] [-p] [-i] [-p azure|aws|dockerHub|other] [-y -n <value>]

ARGUMENTS
  NAME  Proposed name of the cluster

FLAGS
  -h, --help               Show CLI help.
  -i, --deleteIdentity     (optional: defaults to false) Ensures that identity security account for the cluster shall
                           also be deleted after the cluster itself is destroyed.
  -n, --name=<value>       Name of the cluster.
  -p, --partials           Include clusters that were never fully created.
  -p, --provider=<option>  Code for the cloud service provider.
                           <options: azure|aws|dockerHub|other>
  -y, --silent             (Optional: defaults to false) Prevents confirmations of user-values. Required: name

DESCRIPTION
  Kills the physical cluster, but not the Codiac cluster definition record

ALIASES
  $ codiac cluster destroy
```

## `codiac noc cluster forget`

Permanently removes the record of a cluster. This command does NOT affect any infrastructure; it simply removes the cluster from the Codiac consciousness. Use `cod cluster capture` to re-acquire an existing but forgotten cluster. You must remove all cabinets and environments in a cluster before forgetting it.

```
USAGE
  $ codiac noc cluster forget [-y -n <value> -p azure|aws|dockerHub|other]

FLAGS
  -n, --name=<value>       Name of the cluster.
  -p, --provider=<option>  Code for the cloud service provider.
                           <options: azure|aws|dockerHub|other>
  -y, --silent             (Optional: defaults to false) Prevents confirmations of user-values. Required: ["name",
                           "provider"]

DESCRIPTION
  Permanently removes the record of a cluster.  This command does NOT affect any infrastructure; it simply removes the
  cluster from the Codiac consciousness.  Use `cod cluster capture` to re-acquire an existing but forgotten cluster.
  You must remove all cabinets and environments in a cluster before forgetting it.

ALIASES
  $ codiac cluster forget
```

## `codiac noc cluster grant [NAME]`

(AWS Only) Provides cluster access to the given user.

```
USAGE
  $ codiac noc cluster grant [NAME] [-h] [-y -c <value> -u <value>]

ARGUMENTS
  NAME  Proposed name of the cluster

FLAGS
  -c, --cluster=<value>  Name of the cluster.
  -h, --help             Show CLI help.
  -u, --user=<value>     AWS usernames (as email) to add.
  -y, --silent           (Optional: defaults to false) Prevents confirmations of user-values.

DESCRIPTION
  (AWS Only) Provides cluster access to the given user.

ALIASES
  $ codiac cluster grant
```

## `codiac noc cluster init [NAME]`

Post-create initialization for the cluster (installs the ingress controller service)

```
USAGE
  $ codiac noc cluster init [NAME] [-h] [-p azure|aws|dockerHub|other] [-y -n <value>]

ARGUMENTS
  NAME  Name of existing cluster to initialize.

FLAGS
  -h, --help               Show CLI help.
  -n, --name=<value>       Name of the cluster.
  -p, --provider=<option>  Code for the cloud service provider.
                           <options: azure|aws|dockerHub|other>
  -y, --silent             (Optional: defaults to false) Prevents interactive user-interface and throws if interaction
                           is needed. Requires arguments: [--name -n]

DESCRIPTION
  Post-create initialization for the cluster (installs the ingress controller service)

ALIASES
  $ codiac cluster init
```

## `codiac noc cluster list`

Shows the list of clusters.

```
USAGE
  $ codiac noc cluster list [-o text|tree|json|yaml] [-h]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: tree] format in which to render the data.
                         <options: text|tree|json|yaml>

DESCRIPTION
  Shows the list of clusters.

ALIASES
  $ codiac cluster list
```

## `codiac noc cluster recreate [NAME]`

Provisions the physical cluster using the existing ClusterDef record (with any changes provided by the caller).

```
USAGE
  $ codiac noc cluster recreate [NAME] [-h] [-p <value>] [-s <value>] [-g <value>] [-l <value>] [-k <value>] [-v <value>]
    [-w -n <value> -q <value>] [--identityName <value>] [-y] [-t]

ARGUMENTS
  NAME  Name of an existing cluster to re-create

FLAGS
  -g, --resourceGroup=<value>         The Azure resource group to create for the cluster.
  -h, --help                          Show CLI help.
  -k, --subnet=<value>                The resource id of the subnet in which the cluster is to be created.
  -l, --location=<value>              The short name of the azure data center in which the cliuster is to reside.
  -n, --nodeSpec=<value>              The identifier for the type of VM to use for nodes in the cluster.
  -p, --owner=<value>                 Tenant code of the private owner of the cluster
  -q, --nodeQty=<value>               The starting node count with which to create the cluster.
  -s, --providerSubscription=<value>  The Azure subscription Id under which to create the cluster.
  -t, --toScript                      Outputs an assembled command string, NO execution
  -v, --k8sVersion=<value>            The Kubernetes version for the new cluster.  This must be a supported version from
                                      the cloud provider.
  -w, --windowsSupport                Add a windows nodepool.
  -y, --silent                        (Optional: defaults to false) Prevents confirmations of user-values. Required:
  --identityName=<value>              name of an existing service principal to use for the cluster identity

DESCRIPTION
  Provisions the physical cluster using the existing ClusterDef record (with any changes provided by the caller).

ALIASES
  $ codiac cluster recreate
```

## `codiac pkg add [DEFINITIONFILE]`

Configures a package to be built and published by the project.

```
USAGE
  $ codiac pkg add [DEFINITIONFILE] [-h] [-r <value>] [-e <value>] [-u <value>] [-s <value>]

ARGUMENTS
  DEFINITIONFILE  Path and filename of the package definition file, relative to the codiac project root, (eg:
                  "./package.json")

FLAGS
  -e, --environment=<value>  (optional) Declaration that this registry shall be the target when publishing to the given
                             environment.
  -h, --help                 Show CLI help.
  -r, --registryUrl=<value>  Address of the registry to which the package will be published (without protocol prefix),
                             eg: "yourpackages.azurecr.io".  NOTE: This registry will be used by the "codiac publish"
                             command, whereas when running in "local" mode, packages will instead be registered to the
                             built-in package registry on the local machine.  NOTE:  This url shall define the default
                             publishing target, for use when publishing for any environment, unless otherwise specified.
  -s, --password=<value>     (optional) Password credential for the given registry.  WARNING!! these username/password
                             credentials will be stored in the codiac config file in this project, and therefore
                             configuring username and password in this manner is not recommended!
  -u, --username=<value>     (optional) Login credential for the given registry.  WARNING!! these username/password
                             credentials will be stored in the codiac config file in this project, and therefore
                             configuring username and password in this manner is not recommended!

DESCRIPTION
  Configures a package to be built and published by the project.
```

## `codiac pkg delete [PACKAGENAME]`

Deletes the given package export from the configuration.

```
USAGE
  $ codiac pkg delete [PACKAGENAME] [-h]

ARGUMENTS
  PACKAGENAME  package name including, scope prefix. eg:  "your-company/your-package"

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Deletes the given package export from the configuration.

ALIASES
  $ codiac pkg delete
```

## `codiac pkg list`

Renders the list of packages that are configured as project exports.

```
USAGE
  $ codiac pkg list [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Renders the list of packages that are configured as project exports.
```

## `codiac pkg patch PACKAGENAME`

Applies the given values to an existing package export configuration. Both registryUrl and environment act as filters to limit the operation. That is, an upsert of registry targets is performed for the given package, based on the given registryUrl and/or environment.

```
USAGE
  $ codiac pkg patch PACKAGENAME [-h] [-s <value>] [-u <value>]

ARGUMENTS
  PACKAGENAME  package name including, scope prefix. eg:  "your-company/your-package"

FLAGS
  -h, --help           Show CLI help.
  -s, --set=<value>    Space-delimited list of key-value pairs tp apply with json-path on the left and the desired value
                       on the right.  (eg:  --set .targets.default.registryUrl=mystuff.azurecr.io)
  -u, --unset=<value>  Space-delimited list of properties to clear, in json-path format.  (eg:  --unset
                       .targets.default)

DESCRIPTION
  Applies the given values to an existing package export configuration.  Both registryUrl and environment act as filters
  to limit the operation.  That is, an upsert of registry targets is performed for the given package, based on the given
  registryUrl and/or environment.
```

## `codiac pkg remove [PACKAGENAME]`

Deletes the given package export from the configuration.

```
USAGE
  $ codiac pkg remove [PACKAGENAME] [-h]

ARGUMENTS
  PACKAGENAME  package name including, scope prefix. eg:  "your-company/your-package"

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Deletes the given package export from the configuration.

ALIASES
  $ codiac pkg delete
```

## `codiac portal`

Starts the codiac relay services, maintains container instance, and opens the web app.

```
USAGE
  $ codiac portal

DESCRIPTION
  Starts the codiac relay services, maintains container instance, and opens the web app.
```

_See code: [src/commands/portal.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/portal.ts)_

## `codiac publish [NAME]`

Publishes the exports (packages and images) declared in the ProjectConfig.

```
USAGE
  $ codiac publish [NAME] [-h] [-r] [-l] [-y -i <value> -u <value> -p <value>] [-o] [-i]

ARGUMENTS
  NAME  The official unique name of a currently sourced dependency.  Applies the command to ONLY this sourced
        dependency.

FLAGS
  -h, --help              Show CLI help.
  -i, --image=<value>...  (optional, defaults to all) Limits the list of images to publish.  Value must match the name
                          property of an image export defined in the codiac project file (codiac.json)
  -i, --includeDeps       Also performs the operation on any currently source dependencies.
  -l, --local             Publishes to the local built-in image registry.  NOTE: this setting gets remembered and is
                          used for subsequent calls unless otherwise specified.
  -o, --only              Applies the command only the sourced dependencies selected from a prompt. Quits if no
                          dependencies are currently sourced.
  -p, --password=<value>  (optional, prompts as needed) Password or token at the target registry.
  -r, --remote            Publishes to the remote image registry.  NOTE: this setting gets remembered and is used for
                          subsequent calls unless otherwise specified.
  -u, --username=<value>  (optional, prompts as needed) Username at the target registry.
  -y, --silent            Suppresses user dialogue.

DESCRIPTION
  Publishes the exports (packages and images) declared in the ProjectConfig.
```

_See code: [src/commands/publish.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/publish.ts)_

## `codiac pull [NAME]`

Pulls all commits from upstream to local.

```
USAGE
  $ codiac pull [NAME] [-h] [-o] [-i]

ARGUMENTS
  NAME  The official unique name of a currently sourced dependency.  Applies the command to ONLY this sourced
        dependency.

FLAGS
  -h, --help         Show CLI help.
  -i, --includeDeps  Also performs the operation on any currently source dependencies.
  -o, --only         Applies the command only the sourced dependencies selected from a prompt. Quits if no dependencies
                     are currently sourced.

DESCRIPTION
  Pulls all commits from upstream to local.
```

_See code: [src/commands/pull.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/pull.ts)_

## `codiac pullsecret`

Upserts the primary and secondary pull secret references for the given container registry.

```
USAGE
  $ codiac pullsecret [-f primary|secondary] [-z] [-y [-r <value> | ] -t
    awsKeyVault|azBlob|azKeyVault|etcd|mongoCollection|mongoDocument -s <value> -n <value>] [-h]

FLAGS
  -f, --item=<option>       [default: primary] Applies the command to either the primary (default) or seoncdary secret
                            for the image registry.
                            <options: primary|secondary>
  -h, --help                Show CLI help.
  -n, --name=<value>        The name of the secret within the secret store.
  -r, --registry=<value>    The container registry in which the image exists (defaults to docker hub).
  -s, --storeName=<value>   The name of the secret store containing the actual pull secrets.
  -t, --storeType=<option>  The type of secret store containing the actual pull secrets.
                            <options: awsKeyVault|azBlob|azKeyVault|etcd|mongoCollection|mongoDocument>
  -y, --silent              (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                            prior runs. Requires: registry,storeType,storeName,name
  -z, --toScript            Outputs an assembled command string, NO execution

DESCRIPTION
  Upserts the primary and secondary pull secret references for the given container registry.

ALIASES
  $ codiac pullsecret
```

## `codiac pullsecret unset`

Upserts the primary and secondary pull secret references for the given container registry.

```
USAGE
  $ codiac pullsecret unset [-u <value>] [-p aws|azure|dockerHub|other] [-s <value>] [-l <value>] [-z] [-y    -n
    <value>] [-h]

FLAGS
  -h, --help                    Show CLI help.
  -l, --location=<value>        The data center in which the registry resides (use the code name, eg: in Aws use
                                'us-east-1', NOT 'Virginia, US').
  -n, --name=<value>            The resource name of the container registry within the cloud provider subscription.
  -p, --provider=<option>       The cloud provider hosting the container registry.
                                <options: aws|azure|dockerHub|other>
  -s, --subscriptionId=<value>  The id of the cloud provider account in which the registry resides.
  -u, --url=<value>             The container registry url.
  -y, --silent                  (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                                from prior runs. Requires: registry,storeType,storeName,name
  -z, --toScript                Outputs an assembled command string, NO execution

DESCRIPTION
  Upserts the primary and secondary pull secret references for the given container registry.

ALIASES
  $ codiac pullsecret unset
```

## `codiac push [NAME]`

Pushes all local commits upstream.

```
USAGE
  $ codiac push [NAME] [-h] [-o] [-i]

ARGUMENTS
  NAME  The official unique name of a currently sourced dependency.  Applies the command to ONLY this sourced
        dependency.

FLAGS
  -h, --help         Show CLI help.
  -i, --includeDeps  Also performs the operation on any currently source dependencies.
  -o, --only         Applies the command only the sourced dependencies selected from a prompt. Quits if no dependencies
                     are currently sourced.

DESCRIPTION
  Pushes all local commits upstream.
```

_See code: [src/commands/push.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/push.ts)_

## `codiac run`

Runs the latest build of the api container locally.

```
USAGE
  $ codiac run [-b] [-d] [-e <value>] [-h] [-i] [-n <value>] [-m <value>] [-p <value>] [-l <value>] [-w]
    [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>] [--withoutdefaults] [-v]

FLAGS
  -b, --build                 Triggers a new local build beforehand.
  -d, --detach                Run container in background and print the container ID.
  -e, --entrypoint=<value>    Overrides the default container startup command.
  -h, --help                  Renders the help document for this command.
  -i, --interactive           Run the container interactively (in the console; dies with the console).  Use
                              -e|--entrypoint to override the startup command for the container.
  -l, --internalPort=<value>  (default: 5775) The port the application inside the container is listening on.  Sets the
                              port to which map incoming requests on the container.  This port mapping MUST match
                              whatever port number the actual application is listening on.
  -m, --mountFolder=<value>   Mounts a folder on the host as a read-write volume on the container. In format
                              "src=~/my/local/folder,dst=/root/in/container".
  -n, --network=<value>       The docker network to which the container will be attached (defaults to a network named as
                              the company code, which will be created on demand as a bridge network).
  -p, --port=<value>          (default: 5775) Sets the external port to open on the container.  That is, the port on
                              which the api will be listening to calls from outside the container.
  -v, --verbose               Renders additional logging levels (detail, trace, and debug) to the console output.
  -w, --watch                 Forces a detach run and follows log output from the container.
  --as=<value>                Fires this command with an argument list that was previously remembered using the
                              --rememberAs flag.
  --remember                  Saves the arguments, so they are invoked as defaults whenever this command gets called.
  --rememberAs=<value>        Saves the given argument list so that it can be called by name.
  --unremember=<value>        Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                              were previously stored under the given name (use "--unRemember default" to clear default
                              argument list memorized with the --remember flag).
  --withoutdefaults           Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Runs the latest build of the api container locally.
```

_See code: [src/commands/run.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/run.ts)_

## `codiac secretStore`

Upserts a reference to an existing secretStore.

```
USAGE
  $ codiac secretStore [-u <value>] [-p azure|aws|dockerHub|other] [-s <value>] [-l <value>] [-z] [-y    -n
    <value>] [-h]

FLAGS
  -h, --help                    Show CLI help.
  -l, --location=<value>        The region or data center in which the secret store resides (use the code name, eg: in
                                Aws use 'us-east-1', NOT 'Virginia, US').
  -n, --name=<value>            The resource name of the secret store within the cloud provider subscription.
  -p, --provider=<option>       The cloud provider hosting the secret store.
                                <options: azure|aws|dockerHub|other>
  -s, --subscriptionId=<value>  The id of the cloud provider account in which the secret store resides (in Aws, this is
                                the 'AccountId').
  -u, --url=<value>             The container registry url.
  -y, --silent                  (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                                from prior runs. Requires: registry,storeType,storeName,name
  -z, --toScript                Outputs an assembled command string, NO execution

DESCRIPTION
  Upserts a reference to an existing secretStore.

ALIASES
  $ codiac secretStore
```

## `codiac secretStore capture`

Upserts a reference to an existing secretStore.

```
USAGE
  $ codiac secretStore capture [-u <value>] [-p azure|aws|dockerHub|other] [-s <value>] [-l <value>] [-z] [-y    -n
    <value>] [-h]

FLAGS
  -h, --help                    Show CLI help.
  -l, --location=<value>        The region or data center in which the secret store resides (use the code name, eg: in
                                Aws use 'us-east-1', NOT 'Virginia, US').
  -n, --name=<value>            The resource name of the secret store within the cloud provider subscription.
  -p, --provider=<option>       The cloud provider hosting the secret store.
                                <options: azure|aws|dockerHub|other>
  -s, --subscriptionId=<value>  The id of the cloud provider account in which the secret store resides (in Aws, this is
                                the 'AccountId').
  -u, --url=<value>             The container registry url.
  -y, --silent                  (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                                from prior runs. Requires: registry,storeType,storeName,name
  -z, --toScript                Outputs an assembled command string, NO execution

DESCRIPTION
  Upserts a reference to an existing secretStore.

ALIASES
  $ codiac secretStore
```

## `codiac secretStore forget`

Removes the reference to the given container registry for the tenant. Does NOT delete the registry itself.

```
USAGE
  $ codiac secretStore forget [-z] [-y -n <value>] [-h]

FLAGS
  -h, --help          Show CLI help.
  -n, --name=<value>  The name of the secret store to forget.
  -y, --silent        (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior
                      runs. Requires: name
  -z, --toScript      Outputs an assembled command string, NO execution

DESCRIPTION
  Removes the reference to the given container registry for the tenant.  Does NOT delete the registry itself.
```

## `codiac stage [FILES]`

Flags files to be included in the next commit.

```
USAGE
  $ codiac stage [FILES] [-h] [-A] [-c <value>]

ARGUMENTS
  FILES  Space-separated list of files to stage. Paths are relative to the main project root.

FLAGS
  -A, --all             Include all modified files.
  -c, --commit=message  Commit the staged changes using the given message
  -h, --help            Show CLI help.

DESCRIPTION
  Flags files to be included in the next commit.
```

_See code: [src/commands/stage.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/stage.ts)_

## `codiac stash [FILE]`

describe the command here

```
USAGE
  $ codiac stash [FILE] [-h] [-n <value>] [-f]

ARGUMENTS
  FILE  path to the file to stash.

FLAGS
  -f, --force
  -h, --help          Show CLI help.
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here
```

_See code: [src/commands/stash.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/stash.ts)_

## `codiac status`

Shows the current uncommitted changes in the current branch.

```
USAGE
  $ codiac status [-h] [-s] [-u]

FLAGS
  -h, --help      Show CLI help.
  -s, --staged    Include the list of staged changes.
  -u, --unstaged  Include the list of unstaged changes.

DESCRIPTION
  Shows the current uncommitted changes in the current branch.
```

_See code: [src/commands/status.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/status.ts)_

## `codiac stop`

Stops the running container for this project

```
USAGE
  $ codiac stop [-h] [-r]

FLAGS
  -h, --help    Show CLI help.
  -r, --remove  Deletes the container after stopping it

DESCRIPTION
  Stops the running container for this project
```

_See code: [src/commands/stop.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/stop.ts)_

## `codiac switch [NAME]`

Changes branch on the main project and any sourced dependencies.

```
USAGE
  $ codiac switch [NAME] [-h]

ARGUMENTS
  NAME  The name of the branch to switch to (Optional: will prompt the user when missing).

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Changes branch on the main project and any sourced dependencies.
```

_See code: [src/commands/switch.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/switch.ts)_

## `codiac sync [NAME]`

Merges the given branch into the current branch.

```
USAGE
  $ codiac sync [NAME] -b <value> [-h] [-o] [-i]

ARGUMENTS
  NAME  The official unique name of a currently sourced dependency.  Applies the command to ONLY this sourced
        dependency.

FLAGS
  -b, --with=<value>  (required) Branch to merge into this one
  -h, --help          Show CLI help.
  -i, --includeDeps   Also performs the operation on any currently source dependencies.
  -o, --only          Applies the command only the sourced dependencies selected from a prompt. Quits if no dependencies
                      are currently sourced.

DESCRIPTION
  Merges the given branch into the current branch.
```

_See code: [src/commands/sync.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/sync.ts)_

## `codiac tenant create [NAME]`

Registers a new tenant with the current user as the administrator.

```
USAGE
  $ codiac tenant create [NAME] [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>]
    [--withoutdefaults] [-v] [-y -n <value> -c <value>] [-h]

ARGUMENTS
  NAME  The name of the environment to create

FLAGS
  -c, --code=<value>    (Optional, not recommended) Proposed human readable unique identifier code for the tenant
                        origanization.  This command will fail if the given tenant code is already taken.
  -h, --help            Show CLI help.
  -n, --name=<value>    Full name of the tenant organization.
  -v, --verbose         Renders additional logging levels (detail, trace, and debug) to the console output.
  -y, --silent          Suppresses user interaction.
  --as=<value>          Fires this command with an argument list that was previously remembered using the --rememberAs
                        flag.
  --remember            Saves the arguments, so they are invoked as defaults whenever this command gets called.
  --rememberAs=<value>  Saves the given argument list so that it can be called by name.
  --unremember=<value>  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                        previously stored under the given name (use "--unRemember default" to clear default argument
                        list memorized with the --remember flag).
  --withoutdefaults     Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Registers a new tenant with the current user as the administrator.
```

## `codiac tenant switch [NAME]`

Sets a different tenant context from the current user's list of tenants.

```
USAGE
  $ codiac tenant switch [NAME] [--as <value>] [--remember] [--rememberAs <value>] [--unremember <value>]
    [--withoutdefaults] [-v] [-h]

ARGUMENTS
  NAME  The name of the environment to create

FLAGS
  -h, --help            Show CLI help.
  -v, --verbose         Renders additional logging levels (detail, trace, and debug) to the console output.
  --as=<value>          Fires this command with an argument list that was previously remembered using the --rememberAs
                        flag.
  --remember            Saves the arguments, so they are invoked as defaults whenever this command gets called.
  --rememberAs=<value>  Saves the given argument list so that it can be called by name.
  --unremember=<value>  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                        previously stored under the given name (use "--unRemember default" to clear default argument
                        list memorized with the --remember flag).
  --withoutdefaults     Prevents any relevant saved defaults from being invoked for this call.

DESCRIPTION
  Sets a different tenant context from the current user's list of tenants.
```

## `codiac token [TOKENNAME]`

Stores an identity token for the current user, for use with a component tool (such as npm). This command acts as an upsert.

```
USAGE
  $ codiac token [TOKENNAME] -t <value> [-h] [-p npm|azart|other] [-s <value>] [-r <value>] [-g <value> -e
    <value> -f <value>]

ARGUMENTS
  TOKENNAME  (optional) Conventional name (token_for_[provider]_[scope]) for the tokenized identity.  This name will
             also be used for the build environment variable carrying the token.

FLAGS
  -e, --email=<value>         (Azure Artifacts [aka: azart] only) The email address for this identity.  Npm requires for
                              this, but never uses it.
  -f, --feed=<value>          (Azure Artifacts [aka: azart] only) The human readable identifier for the package feed
  -g, --organization=<value>  (Azure Artifacts [aka: azart] only) Human readable identifier for the organization account
                              with the provider.
  -h, --help                  Renders the help document for this command.
  -p, --provider=<option>     [default: npm] The source of the token.
                              <options: npm|azart|other>
  -r, --registryUrl=<value>   The component tool that issued and can consume the token.
  -s, --scope=<value>         The subdivision within the registry for which this token is honored.
  -t, --token=<value>         (required) The actual raw token string itself issued by the provider

DESCRIPTION
  Stores an identity token for the current user, for use with a component tool (such as npm).  This command acts as an
  upsert.

ALIASES
  $ codiac identify
  $ codiac token
```

## `codiac token delete [NAME]`

Removes an identity token from storage for the current user.

```
USAGE
  $ codiac token delete [NAME] [-h]

ARGUMENTS
  NAME  The name of the token to delete.  Use the 'identity:list' command to view the currently stored tokens.

FLAGS
  -h, --help  Displays the help document for this command.

DESCRIPTION
  Removes an identity token from storage for the current user.

ALIASES
  $ codiac identity remove
  $ codiac token delete
  $ codiac token remove
```

## `codiac token list`

Lists out the identity tokens currently stored for the current user.

```
USAGE
  $ codiac token list [-h] [-o table|extended|json|csv]

FLAGS
  -h, --help             Displays the help document for this command.
  -o, --output=<option>  [default: table] Format for the response data.
                         <options: table|extended|json|csv>

DESCRIPTION
  Lists out the identity tokens currently stored for the current user.

ALIASES
  $ codiac token list
```

## `codiac token remove [NAME]`

Removes an identity token from storage for the current user.

```
USAGE
  $ codiac token remove [NAME] [-h]

ARGUMENTS
  NAME  The name of the token to delete.  Use the 'identity:list' command to view the currently stored tokens.

FLAGS
  -h, --help  Displays the help document for this command.

DESCRIPTION
  Removes an identity token from storage for the current user.

ALIASES
  $ codiac identity remove
  $ codiac token delete
  $ codiac token remove
```

## `codiac unstage [FILES]`

Flags files to be included in the next commit.

```
USAGE
  $ codiac unstage [FILES] [-h] [-A]

ARGUMENTS
  FILES  Space-separated list of files to stage. Paths are relative to the main project root.

FLAGS
  -A, --all   Include all modified files.
  -h, --help  Show CLI help.

DESCRIPTION
  Flags files to be included in the next commit.
```

_See code: [src/commands/unstage.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/unstage.ts)_

## `codiac update [CHANNEL]`

update the codiac CLI

```
USAGE
  $ codiac update [CHANNEL] [-a] [-v <value> | -i] [--force]

FLAGS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
  --force                Force a re-download of the requested version.

DESCRIPTION
  update the codiac CLI

EXAMPLES
  Update to the stable channel:

    $ codiac update stable

  Update to a specific version:

    $ codiac update --version 1.0.0

  Interactively select version:

    $ codiac update --interactive

  See available versions:

    $ codiac update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.1.17/src/commands/update.ts)_

## `codiac user login`

Codiac system login to authenticate user under a tenant.

```
USAGE
  $ codiac user login [-h] [-t <value>] [-o -u <value> [-i | -p <value>]] [-y  ]

FLAGS
  -h, --help                Show CLI help.
  -i, --passwordIn          Reads the password directly from the standard input stream.  Enables users to avoid
                            explicitly rendering it in a command string. eg:  `cat mypass.txt | cod login -u joecool
                            --passwordIn`.  Invokes `--silent` mode, so interaction will be disabled.
  -o, --tokenOut            Writes the token as the sole stdout content (so that it is available to be piped or
                            redirected elsewhere, eg `cod login > mycodiactoken.txt`).  Leaves stdout empty on errors.
                            Invokes `--silent` mode, so interaction will be disabled.
  -p, --password=<value>    password on Codiac
  -t, --tenantCode=<value>  Human-readable Identifier for the Codiac tenant to log in under (optional: defaults to the
                            tenant code for the current project or prompts you to select one from your profile).
  -u, --username=<value>    Username on Codiac
  -y, --silent              (Optional: defaults to false) Prevents interactive user-interface and throws if interaction
                            is needed. Requires arguments: [--username -u, --passwordIn -i]

DESCRIPTION
  Codiac system login to authenticate user under a tenant.

ALIASES
  $ codiac user login
```

## `codiac user show`

Renders the codiac username and its current tenant.

```
USAGE
  $ codiac user show

DESCRIPTION
  Renders the codiac username and its current tenant.

ALIASES
  $ codiac user show
```

## `codiac version`

```
USAGE
  $ codiac version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.3.4/src/commands/version.ts)_

## `codiac view dash`

Spins up the dashboard for a given cabinet

```
USAGE
  $ codiac view dash [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Spins up the dashboard for a given cabinet

ALIASES
  $ codiac view dash
  $ codiac dash
```

## `codiac view dashboard`

Spins up the dashboard for a given cabinet

```
USAGE
  $ codiac view dashboard [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Spins up the dashboard for a given cabinet

ALIASES
  $ codiac view dash
  $ codiac dash
```

## `codiac view k9s`

Spins up the k9s cli pod viewer

```
USAGE
  $ codiac view k9s [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Spins up the k9s cli pod viewer

ALIASES
  $ codiac view k9s
  $ codiac k9s
```

## `codiac view pods`

Spins up the k9s cli pod viewer

```
USAGE
  $ codiac view pods [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Spins up the k9s cli pod viewer

ALIASES
  $ codiac view k9s
  $ codiac k9s
```

## `codiac whereami`

Renders the current cabinet context the image project is pointed to. ie: Tenant, Enterprise, Environment, Cabinet.

```
USAGE
  $ codiac whereami [-h] [-n <value>] [-f]

FLAGS
  -f, --force
  -h, --help          Show CLI help.
  -n, --name=<value>  name to print

DESCRIPTION
  Renders the current cabinet context the image project is pointed to.  ie:  Tenant, Enterprise, Environment, Cabinet.
```

_See code: [src/commands/whereami.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/whereami.ts)_

## `codiac whoami`

Renders the codiac username and its current tenant.

```
USAGE
  $ codiac whoami

DESCRIPTION
  Renders the codiac username and its current tenant.

ALIASES
  $ codiac user show
```

_See code: [src/commands/whoami.ts](https://github.com/codiac/codiac-cli/blob/v1.2.169/src/commands/whoami.ts)_

<!-- commandsstop -->

<!-- commandsstop -->