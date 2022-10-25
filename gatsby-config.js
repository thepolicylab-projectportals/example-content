module.exports = {
  siteMetadata: {
    title: "North Carolina Project Portal",
    url: "https://projectportal.nc.gov/",
  },
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
