/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/vinnycosta1998.png',
          },
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/vinnycosta1998/**/blob/main/.github/**',
          },
        ],
      },
};

export default nextConfig;

// https://github.com//vinnycosta9898.png
// https://github.com/vinnycosta1998/cpf_validator/blob/main/.github/photo1.png?raw=true