const { withNativebase } = require('@native-base/next-adapter');
const path = require('path');

module.exports = withNativebase({
    dependencies: ['@native-base/icons', 'react-native-web-linear-gradient'],
    nextConfig: {
        webpack: (config, options) => {
            config.module.rules.push({
                test: /\.ttf$/,
                loader: 'url-loader', // or directly file-loader
                include: path.resolve(__dirname, 'node_modules/@native-base/icons'),
            });
            config.resolve.alias = {
                ...(config.resolve.alias || {}),
                'react-native$': 'react-native-web',
                'react-native-linear-gradient': 'react-native-web-linear-gradient',
            };
            config.resolve.extensions = [
                '.web.js',
                '.web.ts',
                '.web.tsx',
                ...config.resolve.extensions,
            ];
            return config;
        },
        async redirects() {
            return [
                {
                    source: '/collection/:path*',
                    destination: '/user/:path*/collection',
                    permanent: true,
                },
                {
                    source: '/wishlist/:path*',
                    destination: '/user/:path*/wishlist',
                    permanent: true,
                },
            ];
        },
        experimental: {
            externalDir: true,
        },
    },
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com', 'api.discogs.com'],
    },
    distDir: 'build',
});
