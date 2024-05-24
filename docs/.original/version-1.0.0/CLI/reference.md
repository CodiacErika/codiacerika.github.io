# Command Reference

Codiac CLI documentation. Comprehensive list of commands, flags, features, and examples.


<!-- toc -->
* [codiac-cli](#codiac-cli-1)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @codiac.io/codiac-cli
```
<!-- usagestop -->

# Commands

<!-- commands -->
- [Command Reference](#command-reference)
- [Usage](#usage)
- [Commands](#commands)
  - [`codiac asset:create`](#codiac-assetcreate)
  - [`codiac asset:destroy`](#codiac-assetdestroy)
  - [`codiac asset:helm [SETTING]`](#codiac-assethelm-setting)
  - [`codiac asset:list`](#codiac-assetlist)
  - [`codiac asset:probe:create [CMD]`](#codiac-assetprobecreate-cmd)
  - [`codiac asset:recycle`](#codiac-assetrecycle)
  - [`codiac asset:view [CMD]`](#codiac-assetview-cmd)
  - [`codiac asset:volume:create [MOUNTPATH]`](#codiac-assetvolumecreate-mountpath)
  - [`codiac asset:volume:delete`](#codiac-assetvolumedelete)
  - [`codiac asset:volume:list`](#codiac-assetvolumelist)
  - [`codiac autocomplete [SHELL]`](#codiac-autocomplete-shell)
  - [`codiac branch [NAME]`](#codiac-branch-name)
  - [`codiac branch:current`](#codiac-branchcurrent)
  - [`codiac branch:list`](#codiac-branchlist)
  - [`codiac build`](#codiac-build)
  - [`codiac cabinet:create [CABINET]`](#codiac-cabinetcreate-cabinet)
  - [`codiac cabinet:list`](#codiac-cabinetlist)
  - [`codiac cabinet:obliterate [CABINET]`](#codiac-cabinetobliterate-cabinet)
  - [`codiac cli`](#codiac-cli)
  - [`codiac commit [MESSAGE]`](#codiac-commit-message)
  - [`codiac config:add [SETTING]`](#codiac-configadd-setting)
  - [`codiac config:delete [SETTING]`](#codiac-configdelete-setting)
  - [`codiac config:deploy`](#codiac-configdeploy)
  - [`codiac config:import [SETTING]`](#codiac-configimport-setting)
  - [`codiac config:view [SETTING]`](#codiac-configview-setting)
  - [`codiac dep [NAME]`](#codiac-dep-name)
  - [`codiac dep:create [URL]`](#codiac-depcreate-url)
  - [`codiac dep:install`](#codiac-depinstall)
  - [`codiac dep:list`](#codiac-deplist)
  - [`codiac dep:remove [NAME]`](#codiac-depremove-name)
  - [`codiac dep:source [NAME]`](#codiac-depsource-name)
  - [`codiac dep:syncup [DEPENDENCY]`](#codiac-depsyncup-dependency)
  - [`codiac dep:unsource [NAME]`](#codiac-depunsource-name)
  - [`codiac dep:upgrade [DEPENDENCY]`](#codiac-depupgrade-dependency)
  - [`codiac deploy`](#codiac-deploy)
  - [`codiac enterprise:create [CODE]`](#codiac-enterprisecreate-code)
  - [`codiac enterprise:list`](#codiac-enterpriselist)
  - [`codiac env:add [SETTING]`](#codiac-envadd-setting)
  - [`codiac environment:create [NAME]`](#codiac-environmentcreate-name)
  - [`codiac environment:list`](#codiac-environmentlist)
  - [`codiac filestore:capture`](#codiac-filestorecapture)
  - [`codiac help [COMMAND]`](#codiac-help-command)
  - [`codiac host:map [DOMAIN]`](#codiac-hostmap-domain)
  - [`codiac identity [TOKENNAME]`](#codiac-identity-tokenname)
  - [`codiac identity:delete [NAME]`](#codiac-identitydelete-name)
  - [`codiac identity:list`](#codiac-identitylist)
  - [`codiac imageRegistry:capture`](#codiac-imageregistrycapture)
  - [`codiac imageRegistry:forget`](#codiac-imageregistryforget)
  - [`codiac imageRegistry:pullSecret:set`](#codiac-imageregistrypullsecretset)
  - [`codiac imageRegistry:pullSecret:unset`](#codiac-imageregistrypullsecretunset)
  - [`codiac images:add [IMAGENAME]`](#codiac-imagesadd-imagename)
  - [`codiac images:list [HELLO]`](#codiac-imageslist-hello)
  - [`codiac images:patch IMAGENAME`](#codiac-imagespatch-imagename)
  - [`codiac images:remove IMAGENAME`](#codiac-imagesremove-imagename)
  - [`codiac images:version [NAME]`](#codiac-imagesversion-name)
  - [`codiac init DIRECTORY`](#codiac-init-directory)
  - [`codiac kit:create [SETTING]`](#codiac-kitcreate-setting)
  - [`codiac login`](#codiac-login)
  - [`codiac logout`](#codiac-logout)
  - [`codiac merge [BRANCH]`](#codiac-merge-branch)
  - [`codiac noc:cluster:create [NAME]`](#codiac-nocclustercreate-name)
  - [`codiac noc:cluster:deinit [NAME]`](#codiac-nocclusterdeinit-name)
  - [`codiac noc:cluster:destroy [NAME]`](#codiac-nocclusterdestroy-name)
  - [`codiac noc:cluster:init [NAME]`](#codiac-nocclusterinit-name)
  - [`codiac noc:cluster:list`](#codiac-nocclusterlist)
  - [`codiac noc:cluster:recreate [NAME]`](#codiac-nocclusterrecreate-name)
  - [`codiac pkg:add [DEFINITIONFILE]`](#codiac-pkgadd-definitionfile)
  - [`codiac pkg:list [HELLO]`](#codiac-pkglist-hello)
  - [`codiac pkg:patch PACKAGENAME`](#codiac-pkgpatch-packagename)
  - [`codiac pkg:remove [PACKAGENAME]`](#codiac-pkgremove-packagename)
  - [`codiac portal`](#codiac-portal)
  - [`codiac publish [NAME]`](#codiac-publish-name)
  - [`codiac pull [NAME]`](#codiac-pull-name)
  - [`codiac push [NAME]`](#codiac-push-name)
  - [`codiac run`](#codiac-run)
  - [`codiac secretStore:capture`](#codiac-secretstorecapture)
  - [`codiac secretStore:forget`](#codiac-secretstoreforget)
  - [`codiac stage [FILES]`](#codiac-stage-files)
  - [`codiac stash [FILE]`](#codiac-stash-file)
  - [`codiac status`](#codiac-status)
  - [`codiac stop`](#codiac-stop)
  - [`codiac switch [NAME]`](#codiac-switch-name)
  - [`codiac sync [NAME]`](#codiac-sync-name)
  - [`codiac tenant:create [NAME]`](#codiac-tenantcreate-name)
  - [`codiac tenant:switch [NAME]`](#codiac-tenantswitch-name)
  - [`codiac unstage [FILES]`](#codiac-unstage-files)
  - [`codiac update [CHANNEL]`](#codiac-update-channel)
  - [`codiac version`](#codiac-version)
  - [`codiac whereami [FILE]`](#codiac-whereami-file)
  - [`codiac whoami`](#codiac-whoami)

## `codiac asset:create`

Creates a new asset in the given enterprise from an image that exists in a container registry.

```
USAGE
  $ codiac asset:create

OPTIONS
  -c, --code=code              The host name to assign this asset in the domain url.  eg: 'myasset' in
                               'myasset.your-domain.com' (Optional: defaults to the asset name).

  -e, --enterprise=enterprise  The name of the enterprise in which to create this asset. (defaults to the current
                               enterprise context)

  -g, --hasIngress             Declaration that the asset service is to be externally accessible (optional: defaults to
                               false).

  -h, --help                   Show CLI help.

  -i, --image=image            The image name including scope prefix if applicable (eg: '@yourCompany/your-api-image').

  -k, --kit=kit                The name of the kit (with library prefix, eg: 'library/kitName') to use to create the
                               asset.  Use '?' to be prompted for a kit (Optional: used instead of calling for the
                               image).

  -n, --name=name              The name to give the enterprise asset (Optional: defaults to the image name without the
                               scope prefix).

  -o, --routedWithoutName      Indicates that this asset will be the base ingress against your DNS. eg: true services
                               yourwebsite.com (as root/naked) (optional: defaults to false).

  -p, --port=port              The default port to assign the asset when deployed to a cabinet (optional).

  -r, --registry=registry      The container registry in which the image exists (defaults to docker hub).

  -t, --toScript               Outputs an assembled command string, NO execution

  -v, --verbose                Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent                 (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                               from prior runs. Requires: image,registry,name,code,enterprise,port

  --as=as                      Fires this command with an argument list that was previously remembered using the
                               --rememberAs flag.

  --remember                   Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs      Saves the given argument list so that it can be called by name.

  --unremember=unremember      Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                               were previously stored under the given name (use "--unRemember default" to clear default
                               argument list memorized with the --remember flag).

  --withoutdefaults            Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac asset:new
```

_See code: [src/commands/asset/create.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/asset/create.ts)_

## `codiac asset:destroy`

UN-deploys a given asset from a given cabinet.  Defaults to removing only the pod deployments and leaving the service in place; set the --scorch argument to remove the service.

```
USAGE
  $ codiac asset:destroy

OPTIONS
  -a, --asset=asset        Search string for the name of the asset to destroy (use ? to be prompted).
  -h, --help               Show CLI help.

  -s, --scorch             (Optional: defaults to false) Destroys the service too, instead of just the deployment and
                           pods.

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  -v, --version=version    Search string for the version of the asset to destroy  (use ? to be prompted).

  -y, --silent             (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                           prior runs.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/asset/destroy.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/asset/destroy.ts)_

## `codiac asset:helm [SETTING]`

Creates a new asset in the given enterprise from an image that exists in a container registry.

```
USAGE
  $ codiac asset:helm [SETTING]

ARGUMENTS
  SETTING  The key for the config setting to add

OPTIONS
  -c, --code=code              The host name to assign this asset in the domain url.  eg: 'myasset' in
                               'myasset.your-domain.com' (Optional: defaults to the asset name).

  -e, --enterprise=enterprise  The name of the enterprise in which to create this asset. (defaults to the current
                               enterprise context)

  -g, --hasIngress             Declaration that the asset service is to be externally accessible (optional: defaults to
                               false).

  -h, --help                   Show CLI help.

  -i, --chart=chart            The chart name including scope prefix if applicable (eg: '@yourCompany/your-helm-chart').

  -n, --name=name              The name to give the enterprise asset (Optional: defaults to the image name without the
                               scope prefix).

  -o, --routedWithoutName      Indicates that this asset will be the base ingress against your DNS. eg: true services
                               yourwebsite.com (as root/naked) (optional: defaults to false).

  -p, --port=port              The default port to assign the asset when deployed to a cabinet (optional).

  -r, --registry=registry      The chart registry in which the chart exists (defaults to docker hub).

  -v, --verbose                Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent                 (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                               from prior runs. Requires:
                               image,registry,name,code,enterprise,port,hasIngress,routedWithoutName

  --as=as                      Fires this command with an argument list that was previously remembered using the
                               --rememberAs flag.

  --remember                   Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs      Saves the given argument list so that it can be called by name.

  --unremember=unremember      Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                               were previously stored under the given name (use "--unRemember default" to clear default
                               argument list memorized with the --remember flag).

  --withoutdefaults            Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac asset:new
```

_See code: [src/commands/asset/helm.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/asset/helm.ts)_

## `codiac asset:list`

Shows the list of assets in a given enterprise.

```
USAGE
  $ codiac asset:list

OPTIONS
  -h, --help                          Displays the help document for this command.
  -o, --output=(json|yaml|tree|text)  [default: tree] format in which to render the data.

  -v, --verbose                       Renders additional logging levels (detail, trace, and debug) to the console
                                      output.

  --as=as                             Fires this command with an argument list that was previously remembered using the
                                      --rememberAs flag.

  --remember                          Saves the arguments, so they are invoked as defaults whenever this command gets
                                      called.

  --rememberAs=rememberAs             Saves the given argument list so that it can be called by name.

  --unremember=unremember             Administrative only: DOES NOT fire the actual command.  Simply clears the
                                      arguments that were previously stored under the given name (use "--unRemember
                                      default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                   Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/asset/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/asset/list.ts)_

## `codiac asset:probe:create [CMD]`

Declares the implementation of a health or readiness probe for an asset.

```
USAGE
  $ codiac asset:probe:create [CMD]

ARGUMENTS
  CMD  (requires --exec) command and its space-separated arguments to run in the target replica.

OPTIONS
  -a, --asset=asset                         The name of the asset to which this probe is to apply.

  -d, --delay=delay                         [default: 0] The time (in seconds) to wait before the first execution of the
                                            probe.

  -h, --help                                Show CLI help.

  -h, --httpHeader=httpHeader               (For use only with http) Key value pair (in format x=y) to be used as an
                                            http header in an http probe action.

  -n, --enterprise=enterprise               The name of the enterprise to which this probe is to apply.

  -p, --period=period                       [default: 10] How often (in seconds) to fire the probe.

  -u, --usage=(readiness|liveness|startup)  (required) [default: readiness] The diagnostic purpose the probe will serve.

  -v, --verbose                             Renders additional logging levels (detail, trace, and debug) to the console
                                            output.

  -v, --versions=versions                   Asset version range for which this probe is to be used. (optional: defaults
                                            to >=latest)

  -x, --action=action                       The JSON specification for the probe action itself.  The structure follows
                                            the actionType.

  --as=as                                   Fires this command with an argument list that was previously remembered
                                            using the --rememberAs flag.

  --exec                                    Declares the probe shall be carried out as an executable CLI command. A
                                            return code of zero indicates success.  Any nonzero result indicates
                                            failure.

  --execCommand=execCommand                 (For use only with exec) The executable command to run as the probe, as a
                                            single string, or as an array of commands and arguments.  If it returns any
                                            nonzero result, the probe gets interpreted as a negative/failure.

  --grpc                                    Declares the probe shall be carried out as a grpc api request.

  --grpcHost=grpcHost                       (For use only with grpc).

  --grpcPort=grpcPort                       (For use only with grpc).

  --http                                    Declares the probe shall be carried out as an http request. Any code greater
                                            than or equal to 200 and less than 400 indicates success. Any other code
                                            indicates failure.

  --httpHost=httpHost                       .

  --httpPath=httpPath                       (For use only with http).

  --httpPort=httpPort                       (For use only with http).

  --httpScheme=http|https                   (For use only with http) The http protocol to use.

  --predefined=predefined                   Calls out by name for an existing standard or shared probe action.  Use this
                                            argument instead of defining the probe action with the exec, grpc, http or
                                            socket arguments.

  --remember                                Saves the arguments, so they are invoked as defaults whenever this command
                                            gets called.

  --rememberAs=rememberAs                   Saves the given argument list so that it can be called by name.

  --socket                                  Declares the probe shall be carried out as a TCP Socket request.

  --socketHost=socketHost                   (For use only with socket).

  --socketPort=socketPort                   (For use only with socket).

  --unremember=unremember                   Administrative only: DOES NOT fire the actual command.  Simply clears the
                                            arguments that were previously stored under the given name (use
                                            "--unRemember default" to clear default argument list memorized with the
                                            --remember flag).

  --withoutdefaults                         Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac asset:probe:create

EXAMPLES
  cod probe:create --predefined builtin-heartbeat-file-exists
  cod probe:create -p 15 --exec --execCommand "cat /app/data/last-heartbeat.json"
  cod probe:create -n acme -a myapi -u readiness -p 15 --exec --execCommand "cat /app/data/last-heartbeat.json"
  cod probe:create -n acme -a myapi -u readiness -p 15 --exec --execCommand cat --execCommand 
  /app/data/last-heartbeat.json
  cod probe:create -n acme -a myapi -u readiness -p 15 --http --httpScheme https --httpHost myapi.acme.com --httpPort 
  443 --httpPath /diag/heartbeat -h Accept=application/json -h user-agent=MyUserAgent
```

_See code: [src/commands/asset/probe/create.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/asset/probe/create.ts)_

## `codiac asset:recycle`

Deploys a given asset to a given cabinet.  Defaults to current version.

```
USAGE
  $ codiac asset:recycle

OPTIONS
  -a, --asset=asset                    Search string for the name of the asset to deploy (use ? to be prompted).
  -c, --cabinetName=cabinetName        Target cabinet name you want deploy
  -e, --enterpriseCode=enterpriseCode  Code (name) of the enterprise to deploy
  -h, --help                           Show CLI help.

  -v, --verbose                        Renders additional logging levels (detail, trace, and debug) to the console
                                       output.

  -v, --version=version                Search string for the version of the asset to deploy  (use ? to be prompted).

  -y, --silent                         (Optional: defaults to false) Prevents confirmations of user-values that are
                                       remembered from prior runs. Requires: enterpriseCode,cabinetName

  --as=as                              Fires this command with an argument list that was previously remembered using the
                                       --rememberAs flag.

  --remember                           Saves the arguments, so they are invoked as defaults whenever this command gets
                                       called.

  --rememberAs=rememberAs              Saves the given argument list so that it can be called by name.

  --unremember=unremember              Administrative only: DOES NOT fire the actual command.  Simply clears the
                                       arguments that were previously stored under the given name (use "--unRemember
                                       default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                    Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/asset/recycle.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/asset/recycle.ts)_

## `codiac asset:view [CMD]`

Renders a selected type of content for an asset

```
USAGE
  $ codiac asset:view [CMD]

ARGUMENTS
  CMD  (requires type=exec) command and its space-separated arguments to run in the target replica.

OPTIONS
  -F, --configFile=configFile                    (requires type=config) The root pathname to the config file to fetch.
  -a, --asset=asset                              The name of the asset to view.
  -c, --cabinet=cabinet                          The name of the cabinet from which the content is to be drawn.
  -e, --enterprise=enterprise                    The name of the enterprise containing the asset being viewed.
  -f, --logsFollow                               (requires type=logs) Follow (aka watch, tail, stream) the output.
  -h, --help                                     Show CLI help.

  -l, --logsTail=logsTail                        [default: 10] (requires type=logs) Lines of recent logs to include in
                                                 the output.  Enter -1 to include the entire log history stored in the
                                                 container.

  -n, --environment=environment                  The name of the environment in which the cabinet resides.

  -r, --replica=replica                          The name of one of the asset instances currently running in the
                                                 cabinet.

  -t, --type=(logs|term|exec|env|config|status)  The type of content to retrieve.

  -v, --verbose                                  Renders additional logging levels (detail, trace, and debug) to the
                                                 console output.

  --as=as                                        Fires this command with an argument list that was previously remembered
                                                 using the --rememberAs flag.

  --echo                                         Echo interaction mode; renders the equivalent non-interactive cli
                                                 command for future use before final execution.

  --remember                                     Saves the arguments, so they are invoked as defaults whenever this
                                                 command gets called.

  --rememberAs=rememberAs                        Saves the given argument list so that it can be called by name.

  --silent                                       Non-Interactive mode; executes without any user interaction and fails
                                                 on any missing or invalid arguments.

  --takeDefaults                                 Prevents prompting for confirmation on parameters that were passed in
                                                 or were set to default values.

  --terminal=(bash|sh)                           Command used to start the terminal (defaults to "bash")

  --toscript                                     Toscript interaction mode; renders the equivalent non-interactive cli
                                                 command WITHOUT any execution.

  --unremember=unremember                        Administrative only: DOES NOT fire the actual command.  Simply clears
                                                 the arguments that were previously stored under the given name (use
                                                 "--unRemember default" to clear default argument list memorized with
                                                 the --remember flag).

  --withoutdefaults                              Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac asset:monitor
  $ codiac asset:mon
  $ codiac asset:get
```

_See code: [src/commands/asset/view.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/asset/view.ts)_

## `codiac asset:volume:create [MOUNTPATH]`

Declares a named path for mounting a volume to instances of the asset.

```
USAGE
  $ codiac asset:volume:create [MOUNTPATH]

ARGUMENTS
  MOUNTPATH  Fully qualified mounting path, inside the container, of the folder being mapped as a volume.  Must be
             unique for the asset.

OPTIONS
  -d, --description=description  Any notes or other information to help clarify the intended purpose of this folder, to
                                 assist during the configuration phase when assigning an actual physical file store to
                                 it.

  -h, --help                     Show CLI help.

  -n, --name=name                Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique
                                 for the asset.

  -v, --verbose                  Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent                   (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                                 from prior runs. Requires: name

  --as=as                        Fires this command with an argument list that was previously remembered using the
                                 --rememberAs flag.

  --remember                     Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs        Saves the given argument list so that it can be called by name.

  --unremember=unremember        Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                 that were previously stored under the given name (use "--unRemember default" to clear
                                 default argument list memorized with the --remember flag).

  --withoutdefaults              Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac asset:vol:create
  $ codiac asset:vol:add
  $ codiac asset:volume:add
```

_See code: [src/commands/asset/volume/create.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/asset/volume/create.ts)_

## `codiac asset:volume:delete`

Deletes an existing volume mount in the asset

```
USAGE
  $ codiac asset:volume:delete

OPTIONS
  -h, --help               Show CLI help.

  -n, --name=name          Moniker for identifying, retrieving, and accessing this folder mapping.  Must be unique for
                           the asset.

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent             (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                           prior runs. Requires: name

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac asset:vol:delete
  $ codiac asset:volumes:delete
  $ codiac asset:volume:del
  $ codiac asset:vol:del
  $ codiac asset:volumes:del
```

_See code: [src/commands/asset/volume/delete.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/asset/volume/delete.ts)_

## `codiac asset:volume:list`

Renders the currently declared mount paths for the asset.

```
USAGE
  $ codiac asset:volume:list

OPTIONS
  -h, --help                            Show CLI help.
  -n, --name=name                       Filter volumes within the asset by mount name.
  -o, --output=(pretty|json|yaml|auto)  [default: auto] Output format of the actual settings data document.
  -p, --path=path                       Filter volumes within the asset by mount path.

  -v, --verbose                         Renders additional logging levels (detail, trace, and debug) to the console
                                        output.

  -y, --silent                          (Optional: defaults to false) Prevents confirmations of user-values that are
                                        remembered from prior runs. Requires: name

  --as=as                               Fires this command with an argument list that was previously remembered using
                                        the --rememberAs flag.

  --remember                            Saves the arguments, so they are invoked as defaults whenever this command gets
                                        called.

  --rememberAs=rememberAs               Saves the given argument list so that it can be called by name.

  --unremember=unremember               Administrative only: DOES NOT fire the actual command.  Simply clears the
                                        arguments that were previously stored under the given name (use "--unRemember
                                        default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                     Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac asset:vol:list
  $ codiac asset:volumes:list
```

_See code: [src/commands/asset/volume/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/asset/volume/list.ts)_

## `codiac autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ codiac autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ codiac autocomplete
  $ codiac autocomplete bash
  $ codiac autocomplete zsh
  $ codiac autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.3.6/src/commands/autocomplete/index.ts)_

## `codiac branch [NAME]`

Creates a new branch for the parent project and any sourced dependencies.

```
USAGE
  $ codiac branch [NAME]

ARGUMENTS
  NAME  The name of the branch to create.

OPTIONS
  -h, --help               Show CLI help.
  -s, --switch             Automatically switches to the new branch after creating it.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/branch.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/branch.ts)_

## `codiac branch:current`

Renders the name of the current branch (for the main project and for any sourced dependencies).

```
USAGE
  $ codiac branch:current

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac branches:current
```

_See code: [src/commands/branch/current.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/branch/current.ts)_

## `codiac branch:list`

Lists out existing branches for the project repo.

```
USAGE
  $ codiac branch:list

OPTIONS
  -h, --help               Displays the help document for this command.
  -l, --locals             (Optional, defaults to false) Limits to local branches only.
  -r, --remotes            (Optional, defaults to false) Limits to remote branches only.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac branches:list
```

_See code: [src/commands/branch/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/branch/list.ts)_

## `codiac build`

Builds the project and the docker container

```
USAGE
  $ codiac build

OPTIONS
  -M, --major                              Increments the version by one Major version number (using Major.Minor.Patch).

  -b, --buildDef=buildDef                  Replaces the default build command with the given process.  For a
                                           multi-command sequence, separate each with a Pipe (|) character.

  -c, --clear                              Completely deletes the output folder before building.

  -d, --asDefault                          Overwrites the default build command for the project with the buildDef
                                           argument

  -f, --frameworkVersion=frameworkVersion  (Future) Explicitly sets the version of the Toyhauler base image to use
                                           (default: latest).

  -h, --help                               Show CLI help.

  -i, --image=image                        (optional, defaults to all) Limits the list of images to build.  Value must
                                           match the name property of an image export defined in the codiac project file
                                           (codiac.json)

  -m, --minor                              Increments the version by one Minor version number (using Major.Minor.Patch).

  -n, --noCache                            Ignores the local Docker image cache, thereby forcing a fresh download of
                                           each image from its container registry layer in the build.

  -p, --patch                              Increments the version by one Patch version number (using Major.Minor.Patch).

  -r, --prerelease                         Increments the prerelease number (using Major.Minor.Patch-PreRelease).  NOTE:
                                           Increments the Patch version number when appending.

  -s, --skip=(images|packages)             (optional) Prevents the building of any declared container images or
                                           packages.

  -t, --buildTarget=buildTarget            (optional) Calls out the only stage to be built for images defined with
                                           multistage builds.

  -v, --verbose                            Renders additional logging levels (detail, trace, and debug) to the console
                                           output.

  --as=as                                  Fires this command with an argument list that was previously remembered using
                                           the --rememberAs flag.

  --remember                               Saves the arguments, so they are invoked as defaults whenever this command
                                           gets called.

  --rememberAs=rememberAs                  Saves the given argument list so that it can be called by name.

  --unremember=unremember                  Administrative only: DOES NOT fire the actual command.  Simply clears the
                                           arguments that were previously stored under the given name (use "--unRemember
                                           default" to clear default argument list memorized with the --remember flag).

  --version=version                        Overwrites the full version for the build (using Major.Minor.Patch).

  --withoutdefaults                        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/build.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/build.ts)_

## `codiac cabinet:create [CABINET]`

Initializes a cabinet for a given enterprise and environment.  Overwrites any existing if forced, otherwise returns an error if the cabinet already exists.

```
USAGE
  $ codiac cabinet:create [CABINET]

ARGUMENTS
  CABINET  The name of the cabinet to create

OPTIONS
  -e, --environment=environment  (optional: defaults to that of the current project branch) The name of the environment
                                 this cabinet will be grouped under.

  -f, --force                    Overwrites and reinitializes if the cabinet already exists.

  -h, --help                     Show CLI help.

  -v, --verbose                  Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                        Fires this command with an argument list that was previously remembered using the
                                 --rememberAs flag.

  --remember                     Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs        Saves the given argument list so that it can be called by name.

  --unremember=unremember        Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                 that were previously stored under the given name (use "--unRemember default" to clear
                                 default argument list memorized with the --remember flag).

  --withoutdefaults              Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac cab:create
```

_See code: [src/commands/cabinet/create.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/cabinet/create.ts)_

## `codiac cabinet:list`

Shows the list of cabinets and environment.

```
USAGE
  $ codiac cabinet:list

OPTIONS
  -h, --help                          Displays the help document for this command.
  -o, --output=(json|yaml|tree|text)  [default: tree] format in which to render the data.

  -v, --verbose                       Renders additional logging levels (detail, trace, and debug) to the console
                                      output.

  --as=as                             Fires this command with an argument list that was previously remembered using the
                                      --rememberAs flag.

  --remember                          Saves the arguments, so they are invoked as defaults whenever this command gets
                                      called.

  --rememberAs=rememberAs             Saves the given argument list so that it can be called by name.

  --unremember=unremember             Administrative only: DOES NOT fire the actual command.  Simply clears the
                                      arguments that were previously stored under the given name (use "--unRemember
                                      default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                   Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac cab:list
```

_See code: [src/commands/cabinet/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/cabinet/list.ts)_

## `codiac cabinet:obliterate [CABINET]`

Hard-deletes an entire cabinet and everything in it; makes it as if the cabinet itself never existed.

```
USAGE
  $ codiac cabinet:obliterate [CABINET]

ARGUMENTS
  CABINET  The name of the cabinet

OPTIONS
  -e, --environment=environment  (optional: defaults to that of the current project branch) The name of the environment
                                 this cabinet will be grouped under.

  -h, --help                     Show CLI help.

  -v, --verbose                  Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                        Fires this command with an argument list that was previously remembered using the
                                 --rememberAs flag.

  --remember                     Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs        Saves the given argument list so that it can be called by name.

  --unremember=unremember        Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                 that were previously stored under the given name (use "--unRemember default" to clear
                                 default argument list memorized with the --remember flag).

  --withoutdefaults              Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac cab:obliterate
```

_See code: [src/commands/cabinet/obliterate.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/cabinet/obliterate.ts)_

## `codiac cli`

Applies settings to the Codiac CLI itself (scoped to the local machine).

```
USAGE
  $ codiac cli

OPTIONS
  -h, --help               Show the help docs for this command.

  -s, --set=set            A key=value expression for the setting to apply.  Leave this argument out of your call to get
                           a list of the available settings keys and their types.

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/cli.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/cli.ts)_

## `codiac commit [MESSAGE]`

Commits the currently staged changes on the current branch of the main project and on any sourced dependencies.

```
USAGE
  $ codiac commit [MESSAGE]

ARGUMENTS
  MESSAGE  The description to include in this particular commit.

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/commit.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/commit.ts)_

## `codiac config:add [SETTING]`

Adds a key value pair to the app config

```
USAGE
  $ codiac config:add [SETTING]

ARGUMENTS
  SETTING  The key for the config setting to add

OPTIONS
  -c, --cabinet=cabinet          The name of the cabinet to which this value is to apply.
  -e, --environment=environment  The name of the environment to which this value is to apply.

  -f, --file=file                The path-name to the file to which the settings are written, relative to the root of
                                 the Codiac project.

  -h, --help                     Show CLI help.

  -n, --enterprise=enterprise    The name of the enterprise to which this value is to apply.

  -s, --setting=setting          The config key (in dotpath/JSONPath), relative to the root of the config.

  -v, --value=value              The actual concrete data to be applied as the setting value.

  -v, --verbose                  Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                        Fires this command with an argument list that was previously remembered using the
                                 --rememberAs flag.

  --remember                     Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs        Saves the given argument list so that it can be called by name.

  --unremember=unremember        Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                 that were previously stored under the given name (use "--unRemember default" to clear
                                 default argument list memorized with the --remember flag).

  --withoutdefaults              Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac config:set
  $ codiac cfg:add
```

_See code: [src/commands/config/add.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/config/add.ts)_

## `codiac config:delete [SETTING]`

Removes the given keys from the app config

```
USAGE
  $ codiac config:delete [SETTING]

ARGUMENTS
  SETTING  (optional) Specific config key to remove. Omit to select from a list. Enter "all" to clear the entire config.

OPTIONS
  -c, --cabinet=cabinet          The name of the cabinet to which this value is to apply.
  -e, --environment=environment  The name of the environment to which this value is to apply.

  -f, --file=file                The path-name to the config file holding the settings, relative to the root of the
                                 Codiac project.

  -h, --help                     Show CLI help.

  -n, --enterprise=enterprise    The name of the enterprise to which this value is to apply.

  -s, --setting=setting          The config key (in dotpath/JSONPath), relative to the root of the config.

  -v, --verbose                  Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                        Fires this command with an argument list that was previously remembered using the
                                 --rememberAs flag.

  --remember                     Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs        Saves the given argument list so that it can be called by name.

  --unremember=unremember        Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                 that were previously stored under the given name (use "--unRemember default" to clear
                                 default argument list memorized with the --remember flag).

  --withoutdefaults              Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac cfg:delete
```

_See code: [src/commands/config/delete.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/config/delete.ts)_

## `codiac config:deploy`

Deploys a given asset to a given cabinet.  Defaults to current version.

```
USAGE
  $ codiac config:deploy

OPTIONS
  -a, --asset=asset                    Search string for the name of the asset to deploy (use ? to be prompted).
  -c, --cabinetName=cabinetName        Target cabinet name you want deploy
  -e, --enterpriseCode=enterpriseCode  Code (name) of the enterprise to deploy
  -h, --help                           Show CLI help.

  -v, --verbose                        Renders additional logging levels (detail, trace, and debug) to the console
                                       output.

  -v, --version=version                Search string for the version of the asset to deploy  (use ? to be prompted).

  -y, --silent                         (Optional: defaults to false) Prevents confirmations of user-values that are
                                       remembered from prior runs. Requires: enterpriseCode,cabinetName

  --as=as                              Fires this command with an argument list that was previously remembered using the
                                       --rememberAs flag.

  --remember                           Saves the arguments, so they are invoked as defaults whenever this command gets
                                       called.

  --rememberAs=rememberAs              Saves the given argument list so that it can be called by name.

  --unremember=unremember              Administrative only: DOES NOT fire the actual command.  Simply clears the
                                       arguments that were previously stored under the given name (use "--unRemember
                                       default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                    Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/config/deploy.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/config/deploy.ts)_

## `codiac config:import [SETTING]`

Adds a key value pair to the app config

```
USAGE
  $ codiac config:import [SETTING]

ARGUMENTS
  SETTING  The key for the config setting to add

OPTIONS
  -c, --cabinet=cabinet                  The name of the cabinet to which this value is to apply.
  -e, --environment=environment          The name of the environment to which this value is to apply.

  -f, --runtimePathName=runtimePathName  (optional, uses the original filename) The pathname relative to the app root to
                                         assume in the container.

  -h, --help                             Show CLI help.

  -n, --enterprise=enterprise            The name of the enterprise to which this value is to apply.

  -s, --sourceFile=sourceFile            The path-name to the LOCAL file to which the settings are written, relative to
                                         the root of the Codiac project.

  -v, --verbose                          Renders additional logging levels (detail, trace, and debug) to the console
                                         output.

  --as=as                                Fires this command with an argument list that was previously remembered using
                                         the --rememberAs flag.

  --remember                             Saves the arguments, so they are invoked as defaults whenever this command gets
                                         called.

  --rememberAs=rememberAs                Saves the given argument list so that it can be called by name.

  --unremember=unremember                Administrative only: DOES NOT fire the actual command.  Simply clears the
                                         arguments that were previously stored under the given name (use "--unRemember
                                         default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                      Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac cfg:add
```

_See code: [src/commands/config/import.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/config/import.ts)_

## `codiac config:view [SETTING]`

Shows the values that are explicitly set in the given config

```
USAGE
  $ codiac config:view [SETTING]

ARGUMENTS
  SETTING  (optional) Name of specific setting value to view; omit to show all.

OPTIONS
  -a, --asset=asset                     Search string for the name of the asset to deploy (use ? to be prompted).
  -c, --cabinet=cabinet                 The name of the cabinet to assemble the configuration for.

  -f, --file=file                       [default: app-config.json] The relative pathname of the config file to view
                                        (relative to the root of the codiac project).

  -h, --help                            Show CLI help.

  -o, --output=(pretty|json|yaml|auto)  [default: auto] Output format of the actual settings data document.

  -p, --prompt                          Invokes a prompt to select from the existing settings.

  -v, --verbose                         Renders additional logging levels (detail, trace, and debug) to the console
                                        output.

  -y, --silent                          (Optional: defaults to false) Prevents confirmations of user-values that are
                                        remembered from prior runs.

  --as=as                               Fires this command with an argument list that was previously remembered using
                                        the --rememberAs flag.

  --remember                            Saves the arguments, so they are invoked as defaults whenever this command gets
                                        called.

  --rememberAs=rememberAs               Saves the given argument list so that it can be called by name.

  --unremember=unremember               Administrative only: DOES NOT fire the actual command.  Simply clears the
                                        arguments that were previously stored under the given name (use "--unRemember
                                        default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                     Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac cfg:view

EXAMPLES
  $ cod config:view
  $ cod config:view port
  $ cod config:view -p
  $ cod config:view -o pretty
  $ cod config:view -c dev2 -f settings.json -o pretty
```

_See code: [src/commands/config/view.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/config/view.ts)_

## `codiac dep [NAME]`

Installs a package into current project.

```
USAGE
  $ codiac dep [NAME]

ARGUMENTS
  NAME  The official unique name of the package to install.

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.
  -v, --version=version    version of the package to install

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/dep.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/dep.ts)_

## `codiac dep:create [URL]`

Sources a new dependency into the project from an existing repo url, initializes it with the package repository, and publishes the initial version if it is not already.  If the package repository is already initialized, the latest package version is used.

```
USAGE
  $ codiac dep:create [URL]

ARGUMENTS
  URL  The official clone url for the repository.

OPTIONS
  -h, --help               Show CLI help.
  -n, --pkgName=pkgName    (required) Package name including any scope prefix (eg: @codiac.io/)
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.
  -v, --version=version    Version to apply to the dependency package if it has not yet been initialized.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/dep/create.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/dep/create.ts)_

## `codiac dep:install`

installs any missing dependency packages into the local project folder.

```
USAGE
  $ codiac dep:install

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/dep/install.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/dep/install.ts)_

## `codiac dep:list`

Shows the dependencies for the project.

```
USAGE
  $ codiac dep:list

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/dep/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/dep/list.ts)_

## `codiac dep:remove [NAME]`

Removes a dependency from the project.

```
USAGE
  $ codiac dep:remove [NAME]

ARGUMENTS
  NAME  The official unique name of the dependency package.

OPTIONS
  -d, --discard            If the dependency to remove is sourced into the project, setting this flag discards all
                           uncommitted changes (staged and unstaged) before removing it.  Again, uncomitted changes are
                           LOST when this flag is set.

  -h, --help               Show CLI help.

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/dep/remove.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/dep/remove.ts)_

## `codiac dep:source [NAME]`

Loads the source code for the given dependency

```
USAGE
  $ codiac dep:source [NAME]

ARGUMENTS
  NAME  The official unique name of the dependency package.

OPTIONS
  -d, --distSubPath=distSubPath  Subfolder path, relative to the root of the submodule,  to the folder from which the
                                 package is created,  aka: the build output folder or 'dist' folder (eg: bin, dist, or
                                 lib, ...etc).  This folder is used as the target folder for npm link.

  -h, --help                     Show CLI help.

  -v, --verbose                  Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                        Fires this command with an argument list that was previously remembered using the
                                 --rememberAs flag.

  --remember                     Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs        Saves the given argument list so that it can be called by name.

  --unremember=unremember        Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                 that were previously stored under the given name (use "--unRemember default" to clear
                                 default argument list memorized with the --remember flag).

  --withoutdefaults              Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac dep:src
```

_See code: [src/commands/dep/source.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/dep/source.ts)_

## `codiac dep:syncup [DEPENDENCY]`

Publishes the dependency in its current state and upgrades to it in the main project.

```
USAGE
  $ codiac dep:syncup [DEPENDENCY]

ARGUMENTS
  DEPENDENCY  The package name of the dependency to sync up into the main project

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/dep/syncup.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/dep/syncup.ts)_

## `codiac dep:unsource [NAME]`

Exits source mode for the given dependency by physically removing its source code folder from the project, and points the project dependency back to the package version it previously depended on.

```
USAGE
  $ codiac dep:unsource [NAME]

ARGUMENTS
  NAME  The official unique name of the dependency package.

OPTIONS
  -c, --comment            The commit message for any outstanding changes.

  -d, --discard            Discards all uncommitted changes (staged and unstaged) before unsourcing, and goes back to
                           the previously installed version of the dependency.  Again, uncomitted changes are LOST when
                           this flag is set.

  -h, --help               Show CLI help.

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac dep:unsrc
```

_See code: [src/commands/dep/unsource.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/dep/unsource.ts)_

## `codiac dep:upgrade [DEPENDENCY]`

describe the command here

```
USAGE
  $ codiac dep:upgrade [DEPENDENCY]

ARGUMENTS
  DEPENDENCY  The dependency to upgrade

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.
  -v, --version=version    version of the package to install

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/dep/upgrade.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/dep/upgrade.ts)_

## `codiac deploy`

Deploys a given asset to a given cabinet.  Defaults to current version.

```
USAGE
  $ codiac deploy

OPTIONS
  -a, --asset=asset                        Search string for the name of the asset to deploy (use ? to be prompted).
  -c, --cabinetName=cabinetName            Target cabinet name you want deploy
  -e, --enterpriseCode=enterpriseCode      Code (name) of the enterprise to deploy
  -h, --help                               Show CLI help.
  -n, --providerUserName=providerUserName  OPTIONAL: For silent/scripted calls, bring cloud creds to auth against
  -p, --providerPassword=providerPassword  OPTIONAL: For silent/scripted calls, bring cloud creds to auth against
  -u, --version=version                    Search string for the version of the asset to deploy  (use ? to be prompted).

  -v, --verbose                            Renders additional logging levels (detail, trace, and debug) to the console
                                           output.

  -y, --silent                             (Optional: defaults to false) Prevents confirmations of user-values that are
                                           remembered from prior runs. Requires: enterpriseCode,cabinetName

  --as=as                                  Fires this command with an argument list that was previously remembered using
                                           the --rememberAs flag.

  --remember                               Saves the arguments, so they are invoked as defaults whenever this command
                                           gets called.

  --rememberAs=rememberAs                  Saves the given argument list so that it can be called by name.

  --unremember=unremember                  Administrative only: DOES NOT fire the actual command.  Simply clears the
                                           arguments that were previously stored under the given name (use "--unRemember
                                           default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/deploy.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/deploy.ts)_

## `codiac enterprise:create [CODE]`

Creates a new enterprise under the current tenant.

```
USAGE
  $ codiac enterprise:create [CODE]

ARGUMENTS
  CODE  The unique human-readable identitifer to use for the enterprise (must be alphanunmeric with no spaces).

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/enterprise/create.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/enterprise/create.ts)_

## `codiac enterprise:list`

Shows the list of enterprises.

```
USAGE
  $ codiac enterprise:list

OPTIONS
  -h, --help                          Displays the help document for this command.
  -o, --output=(json|yaml|tree|text)  [default: tree] format in which to render the data.

  -v, --verbose                       Renders additional logging levels (detail, trace, and debug) to the console
                                      output.

  --as=as                             Fires this command with an argument list that was previously remembered using the
                                      --rememberAs flag.

  --remember                          Saves the arguments, so they are invoked as defaults whenever this command gets
                                      called.

  --rememberAs=rememberAs             Saves the given argument list so that it can be called by name.

  --unremember=unremember             Administrative only: DOES NOT fire the actual command.  Simply clears the
                                      arguments that were previously stored under the given name (use "--unRemember
                                      default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                   Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac ent:list
```

_See code: [src/commands/enterprise/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/enterprise/list.ts)_

## `codiac env:add [SETTING]`

Adds a key value pair to the app config

```
USAGE
  $ codiac env:add [SETTING]

ARGUMENTS
  SETTING  The name of the environment variable to add

OPTIONS
  -c, --cabinet=cabinet          The name of the cabinet to which this value is to apply.
  -e, --environment=environment  The name of the environment to which this value is to apply.
  -h, --help                     Show CLI help.
  -n, --enterprise=enterprise    The name of the enterprise to which this value is to apply.
  -s, --setting=setting          The name of the environment variable to add.
  -v, --value=value              The actual concrete data to be applied as the setting value.
  -v, --verbose                  Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                        Fires this command with an argument list that was previously remembered using the
                                 --rememberAs flag.

  --remember                     Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs        Saves the given argument list so that it can be called by name.

  --unremember=unremember        Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                 that were previously stored under the given name (use "--unRemember default" to clear
                                 default argument list memorized with the --remember flag).

  --withoutdefaults              Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/env/add.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/env/add.ts)_

## `codiac environment:create [NAME]`

Initializes a cabinet for a given enterprise and environment.  Overwrites any existing if forced, otherwise returns an error if the cabinet already exists.

```
USAGE
  $ codiac environment:create [NAME]

ARGUMENTS
  NAME  The name of the environment to create

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac enviro:create
```

_See code: [src/commands/environment/create.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/environment/create.ts)_

## `codiac environment:list`

Shows the list of environments.

```
USAGE
  $ codiac environment:list

OPTIONS
  -h, --help                          Displays the help document for this command.
  -o, --output=(json|yaml|tree|text)  [default: tree] format in which to render the data.

  -v, --verbose                       Renders additional logging levels (detail, trace, and debug) to the console
                                      output.

  --as=as                             Fires this command with an argument list that was previously remembered using the
                                      --rememberAs flag.

  --remember                          Saves the arguments, so they are invoked as defaults whenever this command gets
                                      called.

  --rememberAs=rememberAs             Saves the given argument list so that it can be called by name.

  --unremember=unremember             Administrative only: DOES NOT fire the actual command.  Simply clears the
                                      arguments that were previously stored under the given name (use "--unRemember
                                      default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                   Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac enviro:list
```

_See code: [src/commands/environment/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/environment/list.ts)_

## `codiac filestore:capture`

Creates a reference point in the given enterprise for an existing filestore instance in a cloud provider subscription.

```
USAGE
  $ codiac filestore:capture

OPTIONS
  -e, --enterprise=enterprise                      The name of the enterprise in which to create this asset. (defaults
                                                   to the current enterprise context)

  -h, --help                                       Show CLI help.

  -n, --name=name                                  The name by which to identify this fileshare definition within the
                                                   enterprise (Optional: defaults to the shareName).

  -v, --verbose                                    Renders additional logging levels (detail, trace, and debug) to the
                                                   console output.

  -y, --silent                                     (Optional: defaults to false) Prevents confirmations of user-values
                                                   that are remembered from prior runs. Requires: enterprise,name,storag
                                                   eAccount,shareName,providerSubscriptionId,resourceId,accessKey

  --as=as                                          Fires this command with an argument list that was previously
                                                   remembered using the --rememberAs flag.

  --providerSubscriptionId=providerSubscriptionId  The identifier of the cloud provider subscription under which the
                                                   file storage account resides.

  --remember                                       Saves the arguments, so they are invoked as defaults whenever this
                                                   command gets called.

  --rememberAs=rememberAs                          Saves the given argument list so that it can be called by name.

  --resourceGroup=resourceGroup                    The name of the Azure resource group under which the instance is to
                                                   be created  (Azure-specific).

  --shareName=shareName                            The name of the fileshare to connect to within the file storage
                                                   account.

  --storageAccount=storageAccount                  The name within the cloud provider of the file storage account within
                                                   which the share resides.

  --unremember=unremember                          Administrative only: DOES NOT fire the actual command.  Simply clears
                                                   the arguments that were previously stored under the given name (use
                                                   "--unRemember default" to clear default argument list memorized with
                                                   the --remember flag).

  --withoutdefaults                                Prevents any relevant saved defaults from being invoked for this
                                                   call.

ALIASES
  $ codiac fileshare:capture
```

_See code: [src/commands/filestore/capture.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/filestore/capture.ts)_

## `codiac help [COMMAND]`

display help for codiac

```
USAGE
  $ codiac help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.18/src/commands/help.ts)_

## `codiac host:map [DOMAIN]`

Declares a strategy for mapping assets to ingress routes for a domain name.

```
USAGE
  $ codiac host:map [DOMAIN]

ARGUMENTS
  DOMAIN  The domain name to route (eg: "my-company.com")

OPTIONS
  -c, --cabinet=cabinet          The name of the cabinet on which to apply this naming strategy.  Must be qualified by
                                 also setting enterprise.  NOTE: You can leave this blank if there is only one. If
                                 cabinet names are not unique, use the --enterprise/-e argument to fully qualify the
                                 cabinet name.

  -e, --enterprise=enterprise    The name of the enterprise on which to apply this naming strategy. NOTE: You can leave
                                 this blank if there is only one.

  -h, --help                     Show CLI help.

  -n, --naming=naming            The host naming strategy to apply.

  -v, --environment=environment  The name of the environment on which to apply this naming strategy. Must be qualified
                                 by also setting enterprise.  NOTE: You can leave this blank if there is only one.

  -v, --verbose                  Renders additional logging levels (detail, trace, and debug) to the console output.

  -x, --noninteractive           Throws errors if user interaction is required.

  --as=as                        Fires this command with an argument list that was previously remembered using the
                                 --rememberAs flag.

  --remember                     Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs        Saves the given argument list so that it can be called by name.

  --unremember=unremember        Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                 that were previously stored under the given name (use "--unRemember default" to clear
                                 default argument list memorized with the --remember flag).

  --withoutdefaults              Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac domain:map
```

_See code: [src/commands/host/map.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/host/map.ts)_

## `codiac identity [TOKENNAME]`

Stores an identity token for the current user, for use with a component tool (such as npm).  This command acts as an upsert.

```
USAGE
  $ codiac identity [TOKENNAME]

ARGUMENTS
  TOKENNAME  (optional) Conventional name (token_for_[provider]_[scope]) for the tokenized identity.  This name will
             also be used for the build environment variable carrying the token.

OPTIONS
  -e, --email=email                 (Azure Artifacts [aka: azart] only) The email address for this identity.  Npm
                                    requires for this, but never uses it.

  -f, --feed=feed                   (Azure Artifacts [aka: azart] only) The human readable identifier for the package
                                    feed

  -g, --organization=organization   (Azure Artifacts [aka: azart] only) Human readable identifier for the organization
                                    account with the provider.

  -h, --help                        Renders the help document for this command.

  -p, --provider=(npm|azart|other)  [default: npm] The source of the token.

  -r, --registryUrl=registryUrl     The component tool that issued and can consume the token.

  -s, --scope=scope                 The subdivision within the registry for which this token is honored.

  -t, --token=token                 (required) The actual raw token string itself issued by the provider

  -v, --verbose                     Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                           Fires this command with an argument list that was previously remembered using the
                                    --rememberAs flag.

  --remember                        Saves the arguments, so they are invoked as defaults whenever this command gets
                                    called.

  --rememberAs=rememberAs           Saves the given argument list so that it can be called by name.

  --unremember=unremember           Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                    that were previously stored under the given name (use "--unRemember default" to
                                    clear default argument list memorized with the --remember flag).

  --withoutdefaults                 Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac identify
  $ codiac token
```

_See code: [src/commands/identity.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/identity.ts)_

## `codiac identity:delete [NAME]`

Removes an identity token from storage for the current user.

```
USAGE
  $ codiac identity:delete [NAME]

ARGUMENTS
  NAME  The name of the token to delete.  Use the 'identity:list' command to view the currently stored tokens.

OPTIONS
  -h, --help               Displays the help document for this command.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac identity:remove
  $ codiac token:delete
  $ codiac token:remove
```

_See code: [src/commands/identity/delete.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/identity/delete.ts)_

## `codiac identity:list`

Lists out the identity tokens currently stored for the current user.

```
USAGE
  $ codiac identity:list

OPTIONS
  -h, --help                              Displays the help document for this command.
  -o, --output=(table|extended|json|csv)  [default: table] Format for the response data.

  -v, --verbose                           Renders additional logging levels (detail, trace, and debug) to the console
                                          output.

  --as=as                                 Fires this command with an argument list that was previously remembered using
                                          the --rememberAs flag.

  --remember                              Saves the arguments, so they are invoked as defaults whenever this command
                                          gets called.

  --rememberAs=rememberAs                 Saves the given argument list so that it can be called by name.

  --unremember=unremember                 Administrative only: DOES NOT fire the actual command.  Simply clears the
                                          arguments that were previously stored under the given name (use "--unRemember
                                          default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                       Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac token:list
```

_See code: [src/commands/identity/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/identity/list.ts)_

## `codiac imageRegistry:capture`

Upserts the primary and secondary pull secret references for the given container registry.

```
USAGE
  $ codiac imageRegistry:capture

OPTIONS
  -h, --help                                  Show CLI help.

  -l, --location=location                     The data center in which the registry resides (use the code name, eg: in
                                              Aws use 'us-east-1', NOT 'Virginia, US').

  -n, --name=name                             The resource name of the container registry within the cloud provider
                                              subscription.

  -p, --provider=(aws|azure|dockerHub|other)  The cloud provider hosting the container registry.

  -s, --subscriptionId=subscriptionId         The id of the cloud provider account in which the registry resides.

  -u, --url=url                               The container registry url.

  -v, --verbose                               Renders additional logging levels (detail, trace, and debug) to the
                                              console output.

  -y, --silent                                (Optional: defaults to false) Prevents confirmations of user-values that
                                              are remembered from prior runs. Requires:
                                              registry,storeType,storeName,name

  -z, --toScript                              Outputs an assembled command string, NO execution

  --as=as                                     Fires this command with an argument list that was previously remembered
                                              using the --rememberAs flag.

  --remember                                  Saves the arguments, so they are invoked as defaults whenever this command
                                              gets called.

  --rememberAs=rememberAs                     Saves the given argument list so that it can be called by name.

  --unremember=unremember                     Administrative only: DOES NOT fire the actual command.  Simply clears the
                                              arguments that were previously stored under the given name (use
                                              "--unRemember default" to clear default argument list memorized with the
                                              --remember flag).

  --withoutdefaults                           Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac pullsecret:unset
```

_See code: [src/commands/imageRegistry/capture.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/imageRegistry/capture.ts)_

## `codiac imageRegistry:forget`

Removes the reference to the given container registry for the tenant.  Does NOT delete the registry itself.

```
USAGE
  $ codiac imageRegistry:forget

OPTIONS
  -h, --help               Show CLI help.
  -r, --registry=registry  The container registry to forget.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent             (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                           prior runs. Requires: registry

  -z, --toScript           Outputs an assembled command string, NO execution

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/imageRegistry/forget.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/imageRegistry/forget.ts)_

## `codiac imageRegistry:pullSecret:set`

Upserts the primary and secondary pull secret references for the given container registry.

```
USAGE
  $ codiac imageRegistry:pullSecret:set

OPTIONS
  -f, --item=(primary|secondary)
      [default: primary] Applies the command to either the primary (default) or seoncdary secret for the image registry.

  -h, --help
      Show CLI help.

  -n, --name=name
      The name of the secret within the secret store.

  -r, --registry=registry
      The container registry in which the image exists (defaults to docker hub).

  -s, --storeName=storeName
      The name of the secret store containing the actual pull secrets.

  -t, --storeType=(awsKeyVault|azBlob|azKeyVault|etcd|mongoCollection|mongoDocument)
      The type of secret store containing the actual pull secrets.

  -v, --verbose
      Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent
      (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior runs. Requires:
      registry,storeType,storeName,name

  -z, --toScript
      Outputs an assembled command string, NO execution

  --as=as
      Fires this command with an argument list that was previously remembered using the --rememberAs flag.

  --remember
      Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs
      Saves the given argument list so that it can be called by name.

  --unremember=unremember
      Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were previously stored
      under the given name (use "--unRemember default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults
      Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac pullsecret
```

_See code: [src/commands/imageRegistry/pullSecret/set.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/imageRegistry/pullSecret/set.ts)_

## `codiac imageRegistry:pullSecret:unset`

Removes the primary or secondary pull secret reference for the given container registry.

```
USAGE
  $ codiac imageRegistry:pullSecret:unset

OPTIONS
  -f, --item=(primary|secondary)  [default: primary] Applies the command to either the primary (default) or seoncdary
                                  secret for the image registry.

  -h, --help                      Show CLI help.

  -r, --registry=registry         The container registry in which the image exists (defaults to docker hub).

  -v, --verbose                   Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent                    (Optional: defaults to false) Prevents confirmations of user-values that are
                                  remembered from prior runs. Requires: registry,storeType,storeName,name

  -z, --toScript                  Outputs an assembled command string, NO execution

  --as=as                         Fires this command with an argument list that was previously remembered using the
                                  --rememberAs flag.

  --remember                      Saves the arguments, so they are invoked as defaults whenever this command gets
                                  called.

  --rememberAs=rememberAs         Saves the given argument list so that it can be called by name.

  --unremember=unremember         Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                  that were previously stored under the given name (use "--unRemember default" to clear
                                  default argument list memorized with the --remember flag).

  --withoutdefaults               Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac pullsecret:unset
```

_See code: [src/commands/imageRegistry/pullSecret/unset.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/imageRegistry/pullSecret/unset.ts)_

## `codiac images:add [IMAGENAME]`

Configures a container image to be built and published by the project.

```
USAGE
  $ codiac images:add [IMAGENAME]

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

OPTIONS
  -b, --buildParams=buildParams
      Additional freeform arguments to apply to the Docker build command.

  -e, --environment=environment
      (optional) Declaration that this registry shall be the target when publishing to the given environment.

  -f, --sourceFile=sourceFile
      Path and filename of the image definition file, relative to the project root, (eg: "./Dockerfile").  If omitted, the
      build will use an in-memory image definition auto-generated at build time.

  -h, --help
      Show CLI help.

  -i, --infoUrl=infoUrl
      (Optional) Address on the registry website or portal of the human-readable web page for the image.

  -p, --port=port
      Recommended port number to assign, in the toybox template, to an Asset defined by this image.

  -r, --registryUrl=registryUrl
      [default: https://index.docker.io/v1] (Optional, defaults to Docker Hub) Address of the container registry to which
      the image will be published (without protocol prefix), eg: "yourimages.azurecr.io".  NOTE: This registry will be
      used by the "publish" command, whereas when running in "local" mode, images will instead be registered to the
      built-in image registry on the local machine.  NOTE:  This url shall define the default publishing target, for use
      when publishing for any environment, unless otherwise specified.

  -s, --password=password
      (optional) Password credential for the given registry.  WARNING!! these username/password credentials will be stored
      in the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -u, --username=username
      (optional) Login credential for the given registry.  WARNING!! these username/password credentials will be stored in
      the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -v, --verbose
      Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent
      (Optional: defaults to false) Prevents confirmations of user-values that are remembered from prior runs. Requires:
      registryUrl,port,sourceFile,username,name

  --as=as
      Fires this command with an argument list that was previously remembered using the --rememberAs flag.

  --remember
      Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs
      Saves the given argument list so that it can be called by name.

  --unremember=unremember
      Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were previously stored
      under the given name (use "--unRemember default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults
      Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac image
  $ codiac image:add
  $ codiac img
  $ codiac img:add
```

_See code: [src/commands/images/add.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/images/add.ts)_

## `codiac images:list [HELLO]`

Renders the list of container images that are configured as project exports.

```
USAGE
  $ codiac images:list [HELLO]

OPTIONS
  -h, --help                              Show CLI help.
  -o, --output=(table|extended|json|csv)  [default: table] Format for the response data.

  -v, --verbose                           Renders additional logging levels (detail, trace, and debug) to the console
                                          output.

  --as=as                                 Fires this command with an argument list that was previously remembered using
                                          the --rememberAs flag.

  --remember                              Saves the arguments, so they are invoked as defaults whenever this command
                                          gets called.

  --rememberAs=rememberAs                 Saves the given argument list so that it can be called by name.

  --unremember=unremember                 Administrative only: DOES NOT fire the actual command.  Simply clears the
                                          arguments that were previously stored under the given name (use "--unRemember
                                          default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                       Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac image:list
  $ codiac img:list
```

_See code: [src/commands/images/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/images/list.ts)_

## `codiac images:patch IMAGENAME`

Applies the given values to an existing image export configuration.  Both registryUrl and environment act as filters to limit the operation.  That is, an upsert of registry targets is performed for the given image, based on the given registryUrl and/or environment.

```
USAGE
  $ codiac images:patch IMAGENAME

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

OPTIONS
  -h, --help               Show CLI help.

  -s, --set=set            Space-delimited list of key-value pairs tp apply with json-path on the left and the desired
                           value on the right.  (eg:  --set .targets.default.registryUrl=mystuff.azurecr.io)

  -u, --unset=unset        Space-delimited list of properties to clear, in json-path format.  (eg:  --unset
                           .targets.default)

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac image:patch
  $ codiac img:patch
```

_See code: [src/commands/images/patch.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/images/patch.ts)_

## `codiac images:remove IMAGENAME`

Deletes the given image export from the configuration.

```
USAGE
  $ codiac images:remove IMAGENAME

ARGUMENTS
  IMAGENAME  image name including, scope prefix. eg:  "your-company/your-image"

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac image:remove
  $ codiac img:remove
  $ codiac image:delete
  $ codiac img:delete
```

_See code: [src/commands/images/remove.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/images/remove.ts)_

## `codiac images:version [NAME]`

Output the local version a given image. useful for ci/cd automation.

```
USAGE
  $ codiac images:version [NAME]

OPTIONS
  -h, --help                  Show CLI help.
  -o, --output=(stdOut|json)  [default: stdOut] Format for the response data.
  -v, --verbose               Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                     Fires this command with an argument list that was previously remembered using the
                              --rememberAs flag.

  --remember                  Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs     Saves the given argument list so that it can be called by name.

  --unremember=unremember     Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                              were previously stored under the given name (use "--unRemember default" to clear default
                              argument list memorized with the --remember flag).

  --withoutdefaults           Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac image:list
  $ codiac img:list
```

_See code: [src/commands/images/version.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/images/version.ts)_

## `codiac init DIRECTORY`

Declares the given folder as a project root

```
USAGE
  $ codiac init DIRECTORY

ARGUMENTS
  DIRECTORY  Path to the desired project root, relative to current directory.

OPTIONS
  -c, --clone=clone              (Optional) The git repo from which to hydrate the project folder.
  -h, --help                     Show CLI help.
  -t, --projectType=projectType  (Optional) The type of Codiac project to scaffold.
  -v, --verbose                  Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                        Fires this command with an argument list that was previously remembered using the
                                 --rememberAs flag.

  --remember                     Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs        Saves the given argument list so that it can be called by name.

  --unremember=unremember        Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                 that were previously stored under the given name (use "--unRemember default" to clear
                                 default argument list memorized with the --remember flag).

  --withoutdefaults              Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/init.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/init.ts)_

## `codiac kit:create [SETTING]`

Creates a new kit from an existing asset.

```
USAGE
  $ codiac kit:create [SETTING]

ARGUMENTS
  SETTING  The key for the config setting to add

OPTIONS
  -a, --asset=asset            The enterprise asset from which to create the kit.

  -e, --enterprise=enterprise  The name of the enterprise containing the given asset. (defaults to the current
                               enterprise context)

  -h, --help                   Show CLI help.

  -n, --name=name              Override for the name to give the new kit (Optional: defaults to the asset name).

  -s, --scope=scope            The globally unique name for the directory in which to register the kit.  This value
                               prefixes the kit name to ensure global uniqueness (Optional: defaults to the public
                               shared library).

  -v, --verbose                Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent                 (Optional: defaults to false) Prevents confirmations of user-values that are remembered
                               from prior runs. Requires:
                               asset,enterprise,name,code,enterprise,port,hasIngress,routedWithoutName

  --as=as                      Fires this command with an argument list that was previously remembered using the
                               --rememberAs flag.

  --remember                   Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs      Saves the given argument list so that it can be called by name.

  --unremember=unremember      Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                               were previously stored under the given name (use "--unRemember default" to clear default
                               argument list memorized with the --remember flag).

  --withoutdefaults            Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/kit/create.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/kit/create.ts)_

## `codiac login`

Codiac system login to authenticate user under a tenant.

```
USAGE
  $ codiac login

OPTIONS
  -h, --help                   Show CLI help.

  -i, --passwordIn             Reads the password directly from the standard input stream.  Enables users to avoid
                               explicitly rendering it in a command string. eg:  `cat mypass.txt | cod login -u joecool
                               --passwordIn`.  Invokes `--silent` mode, so interaction will be disabled.

  -o, --tokenOut               Writes the token as the sole stdout content (so that it is available to be piped or
                               redirected elsewhere, eg `cod login > mycodiactoken.txt`).  Leaves stdout empty on
                               errors.  Invokes `--silent` mode, so interaction will be disabled.

  -p, --password=password      password on Codiac

  -t, --tenantCode=tenantCode  Human-readable Identifier for the Codiac tenant to log in under (optional: defaults to
                               the tenant code for the current project or prompts you to select one from your profile).

  -u, --username=username      Username on Codiac

  -v, --verbose                Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent                 (Optional: defaults to false) Prevents interactive user-interface and throws if
                               interaction is needed. Requires arguments: [--username -u, --passwordIn -i]

  --as=as                      Fires this command with an argument list that was previously remembered using the
                               --rememberAs flag.

  --remember                   Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs      Saves the given argument list so that it can be called by name.

  --unremember=unremember      Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                               were previously stored under the given name (use "--unRemember default" to clear default
                               argument list memorized with the --remember flag).

  --withoutdefaults            Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac user:login
```

_See code: [src/commands/login.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/login.ts)_

## `codiac logout`

Resets the current user to anonymous and clears any local user cache.

```
USAGE
  $ codiac logout

OPTIONS
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.

EXAMPLE
  codiac logout
```

_See code: [src/commands/logout.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/logout.ts)_

## `codiac merge [BRANCH]`

Merges the given branch into the current branch of the main project and on any sourced dependencies.

```
USAGE
  $ codiac merge [BRANCH]

ARGUMENTS
  BRANCH  The branch name to merge into the current one.

OPTIONS
  -c, --commit             Commits if merge succeeds.
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/merge.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/merge.ts)_

## `codiac noc:cluster:create [NAME]`

Provisions the physical cluster

```
USAGE
  $ codiac noc:cluster:create [NAME]

ARGUMENTS
  NAME  Proposed name of the cluster

OPTIONS
  -g, --resourceGroup=resourceGroup                The Azure resource group to create for the cluster.
  -h, --help                                       Show CLI help.
  -k, --subnet=subnet                              The resource id of the subnet in which the cluster is to be created.

  -l, --location=location                          The short name of the azure data center in which the cliuster is to
                                                   reside.

  -n, --nodeSpec=nodeSpec                          The identifier for the type of VM to use for nodes in the cluster.

  -p, --owner=owner                                Tenant code of the private owner of the cluster

  -q, --nodeQty=nodeQty                            The starting node count with which to create the cluster.

  -s, --providerSubscription=providerSubscription  The Azure subscription Id under which to create the cluster.

  -t, --toScript                                   Outputs an assembled command string, NO execution

  -u, --identityUserId=identityUserId              OPTIONAL. ID of Svc Principal or Managed Identity to execute as. To
                                                   create k8s cluster, IP address, and container Pull.  If none supplied
                                                   Codiac will try to create one.

  -u, --identityUserName=identityUserName          OPTIONAL. Name of Svc Principal or Managed Identity to execute as. To
                                                   create k8s cluster, IP address, and container Pull.  If none supplied
                                                   Codiac will try to create one.

  -v, --verbose                                    Renders additional logging levels (detail, trace, and debug) to the
                                                   console output.

  -y, --silent=silent                              (Optional: defaults to false) Prevents confirmations of user-values.
                                                   Required:
                                                   providerSubscription,resourceGroup,location,nodeSpec,nodeQty

  --as=as                                          Fires this command with an argument list that was previously
                                                   remembered using the --rememberAs flag.

  --remember                                       Saves the arguments, so they are invoked as defaults whenever this
                                                   command gets called.

  --rememberAs=rememberAs                          Saves the given argument list so that it can be called by name.

  --unremember=unremember                          Administrative only: DOES NOT fire the actual command.  Simply clears
                                                   the arguments that were previously stored under the given name (use
                                                   "--unRemember default" to clear default argument list memorized with
                                                   the --remember flag).

  --withoutdefaults                                Prevents any relevant saved defaults from being invoked for this
                                                   call.

ALIASES
  $ codiac cluster:create
```

_See code: [src/commands/noc/cluster/create.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/noc/cluster/create.ts)_

## `codiac noc:cluster:deinit [NAME]`

Deinitialization of the cluster (uninstalls the ingress controller and tls cert manager services)

```
USAGE
  $ codiac noc:cluster:deinit [NAME]

ARGUMENTS
  NAME  Name of existing cluster.

OPTIONS
  -h, --help                                  Show CLI help.
  -n, --name=name                             Name of the cluster.
  -p, --provider=(aws|azure|dockerHub|other)  Code for the cloud service provider.

  -v, --verbose                               Renders additional logging levels (detail, trace, and debug) to the
                                              console output.

  -y, --silent                                (Optional: defaults to false) Prevents interactive user-interface and
                                              throws if interaction is needed. Requires arguments: [--name -n]

  --as=as                                     Fires this command with an argument list that was previously remembered
                                              using the --rememberAs flag.

  --remember                                  Saves the arguments, so they are invoked as defaults whenever this command
                                              gets called.

  --rememberAs=rememberAs                     Saves the given argument list so that it can be called by name.

  --unremember=unremember                     Administrative only: DOES NOT fire the actual command.  Simply clears the
                                              arguments that were previously stored under the given name (use
                                              "--unRemember default" to clear default argument list memorized with the
                                              --remember flag).

  --withoutdefaults                           Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac cluster:deinit
```

_See code: [src/commands/noc/cluster/deinit.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/noc/cluster/deinit.ts)_

## `codiac noc:cluster:destroy [NAME]`

Kills the physical cluster, but not the Codiac cluster definition record

```
USAGE
  $ codiac noc:cluster:destroy [NAME]

ARGUMENTS
  NAME  Proposed name of the cluster

OPTIONS
  -h, --help                                  Show CLI help.

  -i, --deleteIdentity                        (optional: defaults to false) Ensures that identity security account for
                                              the cluster shall also be deleted after the cluster itself is destroyed.

  -n, --name=name                             Name of the cluster.

  -p, --partials                              Include clusters that were never fully created.

  -p, --provider=(azure|aws|dockerHub|other)  Code for the cloud service provider.

  -v, --verbose                               Renders additional logging levels (detail, trace, and debug) to the
                                              console output.

  -y, --silent                                (Optional: defaults to false) Prevents confirmations of user-values.
                                              Required: name

  --as=as                                     Fires this command with an argument list that was previously remembered
                                              using the --rememberAs flag.

  --remember                                  Saves the arguments, so they are invoked as defaults whenever this command
                                              gets called.

  --rememberAs=rememberAs                     Saves the given argument list so that it can be called by name.

  --unremember=unremember                     Administrative only: DOES NOT fire the actual command.  Simply clears the
                                              arguments that were previously stored under the given name (use
                                              "--unRemember default" to clear default argument list memorized with the
                                              --remember flag).

  --withoutdefaults                           Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac cluster:destroy
```

_See code: [src/commands/noc/cluster/destroy.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/noc/cluster/destroy.ts)_

## `codiac noc:cluster:init [NAME]`

Post-create initialization for the cluster (installs the ingress controller service)

```
USAGE
  $ codiac noc:cluster:init [NAME]

ARGUMENTS
  NAME  Name of existing cluster to initialize.

OPTIONS
  -h, --help                                  Show CLI help.
  -n, --name=name                             Name of the cluster.
  -p, --provider=(azure|aws|dockerHub|other)  Code for the cloud service provider.

  -v, --verbose                               Renders additional logging levels (detail, trace, and debug) to the
                                              console output.

  -y, --silent                                (Optional: defaults to false) Prevents interactive user-interface and
                                              throws if interaction is needed. Requires arguments: [--name -n]

  --as=as                                     Fires this command with an argument list that was previously remembered
                                              using the --rememberAs flag.

  --remember                                  Saves the arguments, so they are invoked as defaults whenever this command
                                              gets called.

  --rememberAs=rememberAs                     Saves the given argument list so that it can be called by name.

  --unremember=unremember                     Administrative only: DOES NOT fire the actual command.  Simply clears the
                                              arguments that were previously stored under the given name (use
                                              "--unRemember default" to clear default argument list memorized with the
                                              --remember flag).

  --withoutdefaults                           Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac cluster:init
```

_See code: [src/commands/noc/cluster/init.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/noc/cluster/init.ts)_

## `codiac noc:cluster:list`

Shows the list of clusters.

```
USAGE
  $ codiac noc:cluster:list

OPTIONS
  -h, --help                          Displays the help document for this command.
  -o, --output=(json|yaml|tree|text)  [default: tree] format in which to render the data.

  -v, --verbose                       Renders additional logging levels (detail, trace, and debug) to the console
                                      output.

  --as=as                             Fires this command with an argument list that was previously remembered using the
                                      --rememberAs flag.

  --remember                          Saves the arguments, so they are invoked as defaults whenever this command gets
                                      called.

  --rememberAs=rememberAs             Saves the given argument list so that it can be called by name.

  --unremember=unremember             Administrative only: DOES NOT fire the actual command.  Simply clears the
                                      arguments that were previously stored under the given name (use "--unRemember
                                      default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults                   Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac cluster:list
```

_See code: [src/commands/noc/cluster/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/noc/cluster/list.ts)_

## `codiac noc:cluster:recreate [NAME]`

Provisions the physical cluster using the existing ClusterDef record (with any changes provided by the caller).

```
USAGE
  $ codiac noc:cluster:recreate [NAME]

ARGUMENTS
  NAME  Name of an existing cluster to re-create

OPTIONS
  -g, --resourceGroup=resourceGroup                  The Azure resource group to create for the cluster.
  -h, --help                                         Show CLI help.

  -k, --subnet=subnet                                The resource id of the subnet in which the cluster is to be
                                                     created.

  -l, --location=location                            The short name of the azure data center in which the cliuster is to
                                                     reside.

  -n, --nodeSpec=nodeSpec                            The identifier for the type of VM to use for nodes in the cluster.

  -p, --owner=owner                                  Tenant code of the private owner of the cluster

  -q, --nodeQty=nodeQty                              The starting node count with which to create the cluster.

  -s, --providerSubscription=providerSubscription    The Azure subscription Id under which to create the cluster.

  -t, --toScript                                     Outputs an assembled command string, NO execution

  -v, --k8sVersion=k8sVersion                        The Kubernetes version for the new cluster.  This must be a
                                                     supported version from the cloud provider.

  -v, --verbose                                      Renders additional logging levels (detail, trace, and debug) to the
                                                     console output.

  -w, --windowsSupport                               Add a windows nodepool.

  -y, --silent                                       (Optional: defaults to false) Prevents confirmations of
                                                     user-values. Required:

  --as=as                                            Fires this command with an argument list that was previously
                                                     remembered using the --rememberAs flag.

  --identityName=identityName                        name of an existing service principal to use for the cluster
                                                     identity

  --identityType=(servicePrincipal|managedIdentity)  The type of security account to use for the cluster identity.

  --remember                                         Saves the arguments, so they are invoked as defaults whenever this
                                                     command gets called.

  --rememberAs=rememberAs                            Saves the given argument list so that it can be called by name.

  --unremember=unremember                            Administrative only: DOES NOT fire the actual command.  Simply
                                                     clears the arguments that were previously stored under the given
                                                     name (use "--unRemember default" to clear default argument list
                                                     memorized with the --remember flag).

  --withoutdefaults                                  Prevents any relevant saved defaults from being invoked for this
                                                     call.

ALIASES
  $ codiac cluster:recreate
```

_See code: [src/commands/noc/cluster/recreate.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/noc/cluster/recreate.ts)_

## `codiac pkg:add [DEFINITIONFILE]`

Configures a package to be built and published by the project.

```
USAGE
  $ codiac pkg:add [DEFINITIONFILE]

ARGUMENTS
  DEFINITIONFILE  Path and filename of the package definition file, relative to the codiac project root, (eg:
                  "./package.json")

OPTIONS
  -e, --environment=environment
      (optional) Declaration that this registry shall be the target when publishing to the given environment.

  -h, --help
      Show CLI help.

  -r, --registryUrl=registryUrl
      Address of the registry to which the package will be published (without protocol prefix), eg:
      "yourpackages.azurecr.io".  NOTE: This registry will be used by the "codiac publish" command, whereas when running
      in "local" mode, packages will instead be registered to the built-in package registry on the local machine.  NOTE:
      This url shall define the default publishing target, for use when publishing for any environment, unless otherwise
      specified.

  -s, --password=password
      (optional) Password credential for the given registry.  WARNING!! these username/password credentials will be stored
      in the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -u, --username=username
      (optional) Login credential for the given registry.  WARNING!! these username/password credentials will be stored in
      the codiac config file in this project, and therefore configuring username and password in this manner is not
      recommended!

  -v, --verbose
      Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as
      Fires this command with an argument list that was previously remembered using the --rememberAs flag.

  --remember
      Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs
      Saves the given argument list so that it can be called by name.

  --unremember=unremember
      Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were previously stored
      under the given name (use "--unRemember default" to clear default argument list memorized with the --remember flag).

  --withoutdefaults
      Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/pkg/add.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/pkg/add.ts)_

## `codiac pkg:list [HELLO]`

Renders the list of packages that are configured as project exports.

```
USAGE
  $ codiac pkg:list [HELLO]

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/pkg/list.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/pkg/list.ts)_

## `codiac pkg:patch PACKAGENAME`

Applies the given values to an existing package export configuration.  Both registryUrl and environment act as filters to limit the operation.  That is, an upsert of registry targets is performed for the given package, based on the given registryUrl and/or environment.

```
USAGE
  $ codiac pkg:patch PACKAGENAME

ARGUMENTS
  PACKAGENAME  package name including, scope prefix. eg:  "your-company/your-package"

OPTIONS
  -h, --help               Show CLI help.

  -s, --set=set            Space-delimited list of key-value pairs tp apply with json-path on the left and the desired
                           value on the right.  (eg:  --set .targets.default.registryUrl=mystuff.azurecr.io)

  -u, --unset=unset        Space-delimited list of properties to clear, in json-path format.  (eg:  --unset
                           .targets.default)

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/pkg/patch.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/pkg/patch.ts)_

## `codiac pkg:remove [PACKAGENAME]`

Deletes the given package export from the configuration.

```
USAGE
  $ codiac pkg:remove [PACKAGENAME]

ARGUMENTS
  PACKAGENAME  package name including, scope prefix. eg:  "your-company/your-package"

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac pkg:delete
```

_See code: [src/commands/pkg/remove.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/pkg/remove.ts)_

## `codiac portal`

Starts the codiac relay services, maintains container instance, and opens the web app.

```
USAGE
  $ codiac portal

OPTIONS
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/portal.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/portal.ts)_

## `codiac publish [NAME]`

Publishes the exports (packages and images) declared in the ProjectConfig.

```
USAGE
  $ codiac publish [NAME]

ARGUMENTS
  NAME  The official unique name of a currently sourced dependency.  Applies the command to ONLY this sourced
        dependency.

OPTIONS
  -h, --help               Show CLI help.

  -i, --image=image        (optional, defaults to all) Limits the list of images to publish.  Value must match the name
                           property of an image export defined in the codiac project file (codiac.json)

  -i, --includeDeps        Also performs the operation on any currently source dependencies.

  -l, --local              Publishes to the local built-in image registry.  NOTE: this setting gets remembered and is
                           used for subsequent calls unless otherwise specified.

  -o, --only               Applies the command only the sourced dependencies selected from a prompt. Quits if no
                           dependencies are currently sourced.

  -p, --password=password  (optional, prompts as needed) Password or token at the target registry.

  -r, --remote             Publishes to the remote image registry.  NOTE: this setting gets remembered and is used for
                           subsequent calls unless otherwise specified.

  -u, --username=username  (optional, prompts as needed) Username at the target registry.

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent             Suppresses user dialogue.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/publish.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/publish.ts)_

## `codiac pull [NAME]`

Pulls all commits from upstream to local.

```
USAGE
  $ codiac pull [NAME]

ARGUMENTS
  NAME  The official unique name of a currently sourced dependency.  Applies the command to ONLY this sourced
        dependency.

OPTIONS
  -h, --help               Show CLI help.
  -i, --includeDeps        Also performs the operation on any currently source dependencies.

  -o, --only               Applies the command only the sourced dependencies selected from a prompt. Quits if no
                           dependencies are currently sourced.

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/pull.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/pull.ts)_

## `codiac push [NAME]`

Pushes all local commits upstream.

```
USAGE
  $ codiac push [NAME]

ARGUMENTS
  NAME  The official unique name of a currently sourced dependency.  Applies the command to ONLY this sourced
        dependency.

OPTIONS
  -h, --help               Show CLI help.
  -i, --includeDeps        Also performs the operation on any currently source dependencies.

  -o, --only               Applies the command only the sourced dependencies selected from a prompt. Quits if no
                           dependencies are currently sourced.

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/push.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/push.ts)_

## `codiac run`

Runs the latest build of the api container locally.

```
USAGE
  $ codiac run

OPTIONS
  -b, --build                      Triggers a new local build beforehand.
  -d, --detach                     Run container in background and print the container ID.
  -e, --entrypoint=entrypoint      Overrides the default container startup command.
  -h, --help                       Renders the help document for this command.

  -i, --interactive                Run the container interactively (in the console; dies with the console).  Use
                                   -e|--entrypoint to override the startup command for the container.

  -l, --internalPort=internalPort  (default: 5775) The port the application inside the container is listening on.  Sets
                                   the port to which map incoming requests on the container.  This port mapping MUST
                                   match whatever port number the actual application is listening on.

  -m, --mountFolder=mountFolder    Mounts a folder on the host as a read-write volume on the container. In format
                                   "src=~/my/local/folder,dst=/root/in/container".

  -n, --network=network            The docker network to which the container will be attached (defaults to a network
                                   named as the company code, which will be created on demand as a bridge network).

  -p, --port=port                  (default: 5775) Sets the external port to open on the container.  That is, the port
                                   on which the api will be listening to calls from outside the container.

  -v, --verbose                    Renders additional logging levels (detail, trace, and debug) to the console output.

  -w, --watch                      Forces a detach run and follows log output from the container.

  --as=as                          Fires this command with an argument list that was previously remembered using the
                                   --rememberAs flag.

  --remember                       Saves the arguments, so they are invoked as defaults whenever this command gets
                                   called.

  --rememberAs=rememberAs          Saves the given argument list so that it can be called by name.

  --unremember=unremember          Administrative only: DOES NOT fire the actual command.  Simply clears the arguments
                                   that were previously stored under the given name (use "--unRemember default" to clear
                                   default argument list memorized with the --remember flag).

  --withoutdefaults                Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/run.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/run.ts)_

## `codiac secretStore:capture`

Upserts a reference to an existing secretStore.

```
USAGE
  $ codiac secretStore:capture

OPTIONS
  -h, --help                                  Show CLI help.

  -l, --location=location                     The region or data center in which the secret store resides (use the code
                                              name, eg: in Aws use 'us-east-1', NOT 'Virginia, US').

  -n, --name=name                             The resource name of the secret store within the cloud provider
                                              subscription.

  -p, --provider=(azure|aws|dockerHub|other)  The cloud provider hosting the secret store.

  -s, --subscriptionId=subscriptionId         The id of the cloud provider account in which the secret store resides (in
                                              Aws, this is the 'AccountId').

  -u, --url=url                               The container registry url.

  -v, --verbose                               Renders additional logging levels (detail, trace, and debug) to the
                                              console output.

  -y, --silent                                (Optional: defaults to false) Prevents confirmations of user-values that
                                              are remembered from prior runs. Requires:
                                              registry,storeType,storeName,name

  -z, --toScript                              Outputs an assembled command string, NO execution

  --as=as                                     Fires this command with an argument list that was previously remembered
                                              using the --rememberAs flag.

  --remember                                  Saves the arguments, so they are invoked as defaults whenever this command
                                              gets called.

  --rememberAs=rememberAs                     Saves the given argument list so that it can be called by name.

  --unremember=unremember                     Administrative only: DOES NOT fire the actual command.  Simply clears the
                                              arguments that were previously stored under the given name (use
                                              "--unRemember default" to clear default argument list memorized with the
                                              --remember flag).

  --withoutdefaults                           Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac secretStore
```

_See code: [src/commands/secretStore/capture.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/secretStore/capture.ts)_

## `codiac secretStore:forget`

Removes the reference to the given container registry for the tenant.  Does NOT delete the registry itself.

```
USAGE
  $ codiac secretStore:forget

OPTIONS
  -h, --help               Show CLI help.
  -n, --name=name          The name of the secret store to forget.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent             (Optional: defaults to false) Prevents confirmations of user-values that are remembered from
                           prior runs. Requires: name

  -z, --toScript           Outputs an assembled command string, NO execution

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/secretStore/forget.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/secretStore/forget.ts)_

## `codiac stage [FILES]`

Flags files to be included in the next commit.

```
USAGE
  $ codiac stage [FILES]

ARGUMENTS
  FILES  Space-separated list of files to stage. Paths are relative to the main project root.

OPTIONS
  -A, --all                Include all modified files.
  -c, --commit=message     Commit the staged changes using the given message
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/stage.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/stage.ts)_

## `codiac stash [FILE]`

describe the command here

```
USAGE
  $ codiac stash [FILE]

OPTIONS
  -f, --force
  -h, --help               Show CLI help.
  -n, --name=name          name to print
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/stash.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/stash.ts)_

## `codiac status`

Shows the current uncommitted changes in the current branch.

```
USAGE
  $ codiac status

OPTIONS
  -h, --help               Show CLI help.
  -s, --staged             Include the list of staged changes.
  -u, --unstaged           Include the list of unstaged changes.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/status.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/status.ts)_

## `codiac stop`

Stops the running container for this project

```
USAGE
  $ codiac stop

OPTIONS
  -h, --help               Show CLI help.
  -r, --remove             Deletes the container after stopping it
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/stop.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/stop.ts)_

## `codiac switch [NAME]`

Changes branch on the main project and any sourced dependencies.

```
USAGE
  $ codiac switch [NAME]

ARGUMENTS
  NAME  The name of the branch to switch to (Optional: will prompt the user when missing).

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/switch.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/switch.ts)_

## `codiac sync [NAME]`

Merges the given branch into the current branch.

```
USAGE
  $ codiac sync [NAME]

ARGUMENTS
  NAME  The official unique name of a currently sourced dependency.  Applies the command to ONLY this sourced
        dependency.

OPTIONS
  -b, --with=with          (required) Branch to merge into this one
  -h, --help               Show CLI help.
  -i, --includeDeps        Also performs the operation on any currently source dependencies.

  -o, --only               Applies the command only the sourced dependencies selected from a prompt. Quits if no
                           dependencies are currently sourced.

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/sync.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/sync.ts)_

## `codiac tenant:create [NAME]`

Registers a new tenant with the current user as the administrator.

```
USAGE
  $ codiac tenant:create [NAME]

ARGUMENTS
  NAME  The name of the environment to create

OPTIONS
  -c, --code=code          (Optional, not recommended) Proposed human readable unique identifier code for the tenant
                           origanization.  This command will fail if the given tenant code is already taken.

  -h, --help               Show CLI help.

  -n, --name=name          Full name of the tenant organization.

  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  -y, --silent             Suppresses user interaction.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/tenant/create.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/tenant/create.ts)_

## `codiac tenant:switch [NAME]`

Sets a different tenant context from the current user's list of tenants.

```
USAGE
  $ codiac tenant:switch [NAME]

ARGUMENTS
  NAME  The name of the environment to create

OPTIONS
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/tenant/switch.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/tenant/switch.ts)_

## `codiac unstage [FILES]`

Flags files to be included in the next commit.

```
USAGE
  $ codiac unstage [FILES]

ARGUMENTS
  FILES  Space-separated list of files to stage. Paths are relative to the main project root.

OPTIONS
  -A, --all                Include all modified files.
  -h, --help               Show CLI help.
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/unstage.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/unstage.ts)_

## `codiac update [CHANNEL]`

update the codiac CLI

```
USAGE
  $ codiac update [CHANNEL]

OPTIONS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=version  Install a specific version.
  --force                Force a re-download of the requested version.

EXAMPLES
  [object Object]
  [object Object]
  [object Object]
  [object Object]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.0.7/src/commands/update.ts)_

## `codiac version`

```
USAGE
  $ codiac version

OPTIONS
  --json     Format output as json.

  --verbose  Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI
             is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.1.3/src/commands/version.ts)_

## `codiac whereami [FILE]`

Renders the current cabinet context the image project is pointed to.  ie:  Tenant, Enterprise, Environment, Cabinet.

```
USAGE
  $ codiac whereami [FILE]

OPTIONS
  -f, --force
  -h, --help               Show CLI help.
  -n, --name=name          name to print
  -v, --verbose            Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                  Fires this command with an argument list that was previously remembered using the
                           --rememberAs flag.

  --remember               Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs  Saves the given argument list so that it can be called by name.

  --unremember=unremember  Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that were
                           previously stored under the given name (use "--unRemember default" to clear default argument
                           list memorized with the --remember flag).

  --withoutdefaults        Prevents any relevant saved defaults from being invoked for this call.
```

_See code: [src/commands/whereami.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/whereami.ts)_

## `codiac whoami`

Renders the codiac username and its current tenant.

```
USAGE
  $ codiac whoami

OPTIONS
  -h, --help                Show CLI help.
  -o, --output=(text|json)  [default: text] Format for the response data.
  -v, --verbose             Renders additional logging levels (detail, trace, and debug) to the console output.

  --as=as                   Fires this command with an argument list that was previously remembered using the
                            --rememberAs flag.

  --remember                Saves the arguments, so they are invoked as defaults whenever this command gets called.

  --rememberAs=rememberAs   Saves the given argument list so that it can be called by name.

  --unremember=unremember   Administrative only: DOES NOT fire the actual command.  Simply clears the arguments that
                            were previously stored under the given name (use "--unRemember default" to clear default
                            argument list memorized with the --remember flag).

  --withoutdefaults         Prevents any relevant saved defaults from being invoked for this call.

ALIASES
  $ codiac user:show
```

_See code: [src/commands/whoami.ts](https://github.com/codiac/codiac-cli/blob/v1.2.133/src/commands/whoami.ts)_
<!-- commandsstop -->
