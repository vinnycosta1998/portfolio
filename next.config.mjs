/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/vinnycosta9898.png',
          },
        ],
      },
};

export default nextConfig;

// https://github.com//vinnycosta9898.png