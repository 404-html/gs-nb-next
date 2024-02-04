import { extendTheme } from 'native-base';
import colors from './colors.json';
import components from './components';

export default extendTheme({
    colors,
    config: {
        // Changing initialColorMode to 'dark'
        // initialColorMode: 'dark',
    },
    breakpoints: {
        xs: 320,
        sm: 480,
        md: 768,
        lg: 992,
        xl: 1280,
        '2xl': 1600,
    },
    fonts: {
        heading: 'Inter',
        body: 'Inter',
        mono: 'Inter',
    },
    fontSizes: {
        lg: 20,
        xl: 24,
        '2xl': 32,
        '3xl': 40,
        '4xl': 48,
        '5xl': 64,
        '6xl': 96,
    },
    lineHeights: {
        '2xs': 16,
        xs: 18,
        sm: 20,
        md: 22,
        lg: 28,
        xl: 32,
        '2xl': 44,
        '3xl': 52,
        '4xl': 62,
        '5xl': 80,
    },
    shadows: {
        blue: {
            'box-shadow':
                '0px 2px 6px rgba(41, 63, 204, 0.16), 0px 4px 12px rgba(49, 75, 245, 0.36)',
        },
    },
    components: {
        ...components,
    },
});
