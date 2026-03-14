/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'a.storyblok.com' },
      { protocol: 'https', hostname: 'a2.storyblok.com' },
    ],
  },
}
module.exports = nextConfig
