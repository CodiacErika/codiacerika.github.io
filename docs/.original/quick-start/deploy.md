---
sidebar_position: 4
---

# Deploy

- No code - yaml, infrastructure as code, and scripts to get containers to a codiac managed cluster is not necessary and likely result in tech debt.  Follow the above steps to deploy manually or you can use codiac in CI/CD to deploy.  This reduces the size and complexity of of the ci/cd definition and also the number of pipelines needed.

<!-- ![demo](/img/codiac/codiac-deploy3.png) -->

## via CLI
In the directory with you codiac.json, you can deploy in a particular container asset context
```
codiac deploy
```
or you can deploy by choosing from the list of assets codiac manages for you
```
codiac deploy -a ?
```

Mac users
```
codiac deploy -a ??
```
- By asset or By entire system version

<!-- ![Yep](/img/codiac/codiac-deploy.png) -->

## via WEB

After running ``` codiac portal``` in the cli, open the ``` asset inventory ``` to drag and drop to a cabinet
![demo](/img/codiac/animated-gifs/codiac-30sec-demo.gif)

