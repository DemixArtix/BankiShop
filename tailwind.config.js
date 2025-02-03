const colors = {
    black: '#343030',
    white: '#F4F6F9',
    grey: '#555555',
    'light-grey': '#A0A0A0',
    'black-b': '#382E2B',
    'dark-b': '#403432',
    'brown-b': '#5B3A32',
    'light-brown-b': '#776763',
    'gray-b': '#C1B4B1',
    'border-gray': 'rgb(225, 225, 225)',
    'border-gray-focus': 'rgb(225, 225, 225, .5)',
};

const fontSize = {
    sm: '1.4rem',
    lg: '1.6rem',
    xl: '1.8rem',
    '2xl': '2.4rem',
};

module.exports = {
    content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.ts'],
    theme: {
        extend: {},
        colors,
        fontSize,
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
