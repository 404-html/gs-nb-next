const path = require('path');

const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');

const withTM = require('next-transpile-modules')([
    'react-native-web',
    'react-native',

    '@expo/vector-icons',

    '@gluestack-style/react',
    '@gluestack-style/legend-motion-animation-driver',
    '@gluestack-style/animation-plugin',
    '@gluestack-style/animation-resolver',
    '@gluestack-style/legend-motion-animation-driver',
    '@legendapp/motion',

    '@expo/html-elements',

    'react-native-svg',
    '@react-native-aria/interactions',
    '@react-native-aria/checkbox',
    '@react-native-aria/focus',
    '@react-native-aria/overlays',
    '@react-native-aria/radio',
    '@react-native-aria/slider',
    '@react-stately/slider',
    '@react-native-aria/toggle',
    '@react-native-aria/utils',
    '@react-native-aria/menu',
    '@gluestack-ui/actionsheet',
    '@gluestack-ui/form-control',
    '@gluestack-ui/avatar',
    '@gluestack-ui/modal',
    '@gluestack-ui/button',
    '@gluestack-ui/checkbox',
    '@gluestack-ui/divider',
    '@gluestack-ui/fab',
    '@gluestack-ui/hooks',
    '@gluestack-ui/hstack',
    '@gluestack-ui/icon',
    '@gluestack-ui/input',
    '@gluestack-ui/link',
    '@gluestack-ui/menu',
    '@gluestack-ui/modal',
    '@gluestack-ui/overlay',
    '@gluestack-ui/popover',
    '@gluestack-ui/progress',
    '@gluestack-ui/provider',
    '@gluestack-ui/radio',
    '@gluestack-ui/select',
    '@gluestack-ui/slider',
    '@gluestack-ui/spinner',

    '@gluestack-ui/switch',
    '@gluestack-ui/textarea',
    '@gluestack-ui/toast',
    '@gluestack-ui/tooltip',
    '@gluestack-ui/vstack',
    '@gluestack-ui/transitions',
    '@gluestack-ui/utils',
    '@gluestack-ui/tabs',
    '@gluestack-ui/react-native-aria',
    '@gluestack-ui/alert-dialog',
    '@gluestack-ui/pressable',
    '@gluestack-ui/themed-native-base',
    '@native-base/icons',
    'react-native-vector-icons',
    '@native-base/next-adapter',
    'react-native-web-linear-gradient',
]);

const nextConfig = {
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
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com', 'api.discogs.com'],
    },
    distDir: 'build',
};

module.exports = withPlugins([[withTM], [withExpo, { projectRoot: __dirname }]], {
    ...nextConfig,
});
