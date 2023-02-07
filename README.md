# Example Project Portal

- View the Preview Site at https://qn-project-portal.netlify.app/
- Login to the Content Management System at https://main--qn-project-portal.netlify.app/admin/

A usage of
[gatsby-theme-project-portal](https://github.com/thepolicylab-projectportals/project-portal-theme)
for the (fictional) State of Quinetucket. 

## Quick Start Guide

### Tokens

To run this project, you need to have the environment variable `YARN_NPM_AUTH_TOKEN` set in your environment _or_ in a `.yarnrc.yml` file.

Generate a GitHub Personal Access Token with access to the `@thepolicylab-projectportals` organization on GitHub. It needs the scopes:
- read:packages

#### Shell Environment Method

Add this to your `.zprofile` (or `.bash_profile`). 

You could use the macOS Keychain to store the value:
```zsh
security add-generic-password -a "$USER" -s "GitHub NPM Registry Token" -w "ghp_abcdefghijklmnopqrstuvwxyz"
```
... replacing the `-w` parameter with your token.

Then add the following line to your `.zshenv` file:
```zsh
export YARN_NPM_AUTH_TOKEN=$(security find-generic-password -s 'GitHub NPM Registry Token' -w)
```

Restart WebStorm and ensure that the variable `YARN_NPM_AUTH_TOKEN` appears in the list of (system) environment variables in the Run Configurations dialog box. 

#### `.yarnrc.yml` Method

You can add the token to a `.yarnrc.yml` file:
```yaml
# ~/.yarnrc.yml
npmRegistries:
  //npm.pkg.github.com:
    npmAlwaysAuth: true
    npmAuthToken: ghp_abcdefghijklmnopqrstuvwxyz
```
This allows using different tokens for different registries.

#### Netlify

Add it as a build environment variable with the name `YARN_NPM_AUTH_TOKEN`.

### Enabling users to access Netlify CMS
Add the users to the "Identity" tab in the Netlify CMS UI.
You also need to activate:
- Any external providers which are wanted: GitHub or Google are commonly used at CCV.
- Git gateway.
