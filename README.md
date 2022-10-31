# Example Project Portal

- View the Preview Site at https://qn-project-portal.netlify.app/
- Login to the Content Management System at https://main--qn-project-portal.netlify.app/admin/

A usage of
[gatsby-theme-project-portal](https://github.com/thepolicylab-projectportals/project-portal-theme)
for the (fictional) State of Quinetucket. 

## Quick Start Guide

To run this project locally, you need to have the `GITHUB_NPM_REGISTRY_TOKEN` set in your local environment. This is already set on Netlify for the builds.

The steps are as follows:

Generate a GitHub Personal Access Token with access to the `@thepolicylab-projectportals` organization on GitHub.

Add this to your `.zprofile` (or `.bash_profile`). 

The most secure way is to add this to your macOS Keychain first:
```zsh
security add-generic-password -a "$USER" -s "GitHub NPM Registry Token" -w "ghp_abcdefghijklmnopqrstuvwxyz"
```
... replacing the `-w` parameter with your token.

Then add the following line to your `.zprofile`:
```zsh
export GITHUB_NPM_REGISTRY_TOKEN=$(security find-generic-password -s 'GitHub NPM Registry Token' -w)
```

Restart WebStorm and ensure that the variable `GITHUB_NPM_REGISTRY_TOKEN` appears in the list of (system) environment variables in the Run Configurations dialog box. 
