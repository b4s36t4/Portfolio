const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

const withPreact = require("next-plugin-preact");
const withBundleAnalyazer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPreact(
  withBundleAnalyazer(
    withMDX({
      reactStrictMode: true,
      pageExtensions: ["js", "jsx", "md", "mdx"],
      images: {
        domains: ["cdn.hashnode.com"],
      },
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
        }
        return config;
      },
    })
  )
);
