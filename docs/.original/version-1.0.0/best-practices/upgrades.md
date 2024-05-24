---
sidebar_position: 1
---

# Upgrades
As systems advance, you may need to upgrade your underlying frameworks to newer versions. 
## Concepts
- Use the same asset for the newer version
- Tag the version so you can track it easily
- Increment your build number
- If you are creating a new project with it's own DOCKERFILE, you'll need to make changes to your codiac.json

## Step by step example
- Say you already have oldProject.csproj with a saved build definition
  ```
   codiac build --image imageName -r --rememberAs=someSavedbuild --buildDef="dotnet build ./oldPath/oldProject.csproj"
  ```
- You want to upgrade to newProject.csproj, so you create that and update the dockerfile in that directory. You should use the same image name, but you need to increment the build number, so we won't rememberAs the first time.
  ```
   codiac build --image imageName -M --buildDef="dotnet build ./newPath/newProject.csproj"
  ```
- Now let's save a build definition for the new project
  ```
   codiac build -r --rememberAs=someNewerSavedBuild --buildDef="dotnet build ./newPath/newProject.csproj"
  ```
- And now, let's publish our new image
  ```
   codiac publish –image  [imagename]
  ```
- Now you can deploy your new image to your existing asset
  ```
   codiac deploy -a ?
  ```
- Then, go tag it in the portal

  ![demo](/img/codiac/animated-gifs/codiac-add-tag.gif)


