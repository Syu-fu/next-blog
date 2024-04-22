/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images');

const nextConfig = withExportImages({
  output: 'export',
  images: {
    loader: 'custom',
  },
});

module.exports = nextConfig;
