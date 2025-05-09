/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/cv' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/cv/' : '',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  };
  
  export default nextConfig;