import { InterfaceButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';

const variantOutline = ({ colorScheme }: InterfaceButtonProps) => ({
    borderColor: `${colorScheme}.600`,
});

export const Button = {
    defaultProps: {
        colorScheme: 'blue',
    },
    sizes: {
        sm: {
            _text: {
                fontWeight: 600,
                fontSize: '14px',
            },
            py: '2.5',
            px: '4',
            rounded: 'xl',
        },
        md: {
            _text: {
                fontWeight: 600,
                fontSize: '14px',
            },
            px: 6,
            py: 14,
            rounded: 'xl',
        },
    },
    variants: {
        outline: variantOutline as any,
        solid: {
            shadow: 'blue',
            _stack: {
                w: 'full',
                justifyContent: 'space-between',
            },
        },
    },
};
