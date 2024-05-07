/** @type {import('next').NextConfig} */
const nextConfig = {};


export default nextConfig;

export const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'image.tmdb.org',
      port: '',
      pathname: '/t/p/**',
    },
  ],
};
