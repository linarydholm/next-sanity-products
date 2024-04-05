// I have added images here to be able to render them in my localhost
// https://www.sanity.io/plugins/next-sanity-image
// I didn't have to run - npm install --save next-sanity-image | npm install --save @sanity/client, why?

// Also an interesting link:
// https://nextjs.org/docs/messages/next-image-unconfigured-host

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // only this worked too:
    // domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
