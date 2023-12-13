module.exports = {
  images: {
    domains: ['images.ctfassets.net', 'www.datocms-assets.com', 'v5.airtableusercontent.com', 'asset.brandfetch.io'],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    nextScriptWorkers: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  }
};
