module.exports = {
  siteMetadata: {
    title: `A System of Worlds`,
    name: `Izzi Ink`,
    siteUrl: `https://hopeful-badger.netlify.com`,
    description: `This is a collection of learning material to master JavaScript, CSS and HTML`,
    social: [
      {
        name: `github`,
        url: `https://github.com/Izmargad/world-docs`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/golem37`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
