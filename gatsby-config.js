// General metadata for the site
const siteMetadata = {
  title: "Project Portal Example (Site with Queries)",
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    {
      resolve: `@thepolicylab-projectportals/gatsby-theme-project-portal`,
      options: {
        pages: [
          {
            name: "Landing Page",
            link: "/",
            show: true,
          },
        ],
        tailwindConfig: require("./tailwind.config"),
        staticText: require("./language.json")
      },
    },
    `@thepolicylab-projectportals/project-portal-content-netlify`,
  ],
}
