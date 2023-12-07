# Example Project Portal

- View the Preview Site at https://qn-project-portal-preview.netlify.app/
- Login to the Content Management System at https://qn-project-portal-preview.netlify.app/admin/

A usage of
[gatsby-theme-project-portal](https://github.com/thepolicylab-projectportals/project-portal-theme)
for the (fictional) State of Quinetucket. 

## Quick Start Guide

Clone the repo

Run

```shell
yarn
```

then
```shell
yarn develop
```

## Accessing the Developer CMS

Change static/admin/config.yml

```yaml
local_backend: true
```

Run in a second terminal

```shell
npx decap-server
```

### Enabling users to access Netlify CMS
Add the users to the "Identity" tab in the Netlify CMS UI.
You also need to activate:
- Any external providers which are wanted: GitHub or Google are commonly used at CCV.
- Git gateway.
