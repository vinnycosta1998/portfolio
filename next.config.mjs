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
            pathname: '/vinnycosta1998/cpf_validator/blob/main/.github/**',
          },
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/vinnycosta1998/spotify-ui-clone/blob/main/.github/**',
          },
        ],
      },
};

export default nextConfig;
// https://raw.githubusercontent.com/vinnycosta9898/spotify-ui-clone/master/.github/photo1.png