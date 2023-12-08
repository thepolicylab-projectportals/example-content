# Example Project Portal

- View the Preview Site at https://qn-project-portal-preview.netlify.app/
- Login to the Content Management System at https://qn-project-portal-preview.netlify.app/admin/

A usage of
[gatsby-theme-project-portal](https://github.com/thepolicylab-projectportals/project-portal-theme)
for the (fictional) State of Quinetucket. 


The following instructions are applicable to any Project Portal repository for our partners. They guide you through setting up a local instance of the specific Project Portal site associated with the repository.
## Quick Start Guide

Clone the repo
```shell
git clone https://github.com/thepolicylab-projectportals/example-content.git
```
Run the following command to install the required dependencies.

```shell
yarn install
```

Afterwards, run the following command to generate a production-ready version of your website. Currently, the production-ready version is required to enable the site-wide `Search` feature.
```shell
yarn build
```

Once the build process is completed, run the following command to preview the production build locally. 
```shell
yarn serve
```

## Accessing Decap CMS

Navigate to [static/admin/config.yml](./static/admin/config.yml) and make the following change locally:

```yaml
local_backend: true
```

Spin up the `decap-server` in a separate terminal by running the following command.

```shell
npx decap-server
```

### Enabling users to access Decap CMS
Add the users to the "Identity" tab in the Netlify CMS UI.
You also need to activate:
- Any external providers which are wanted: GitHub or Google are commonly used at CCV.
- Git gateway.
