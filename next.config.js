const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    domains: ["cdn.hashnode.com"],
  },
});
