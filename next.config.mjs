/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a2sv.org',
        pathname: '/logos/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: ['192.168.1.3'],
};

export default nextConfig;
