import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    'react-native-web',
    'react-native-reanimated',
    'moti',
    'expo-image',
    '@ui/components',
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    return config;
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
};

export default nextConfig;
