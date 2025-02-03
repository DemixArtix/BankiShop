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
    // xs: '.75rem',
    // sm: '.875rem',
    // tiny: '.875rem',
    sm: '1.4rem',
    lg: '1.6rem',
    xl: '1.8rem',
    '2xl': '2.4rem',
    // '2xl': '1.5rem',
    // '3xl': '1.875rem',
    // '4xl': '2.25rem',
    // '5xl': '3rem',
    // '6xl': '4rem',
    // '7xl': '5rem',
};

module.exports = {
    content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.ts'],
    // content: [
    //     './index.html',
    //     './src/**/*.{vue,js,ts,jsx,tsx}',
    //     './node_modules/package-name/**/*.{vue,js,ts,jsx,tsx}', // Add this line
    //     // Replace "package-name" with the name of the dependency package
    // ],
    // darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors,
        fontSize,
        // screens: {
        //     sm: '640px',
        //     md: '768px',
        //     lg: '1024px',
        //     xl: '1280px',
        //     '2xl': '1536px',
        // },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    // safelist: [
    //     ...Object.keys(colors).map((c) => `text-${c}`),
    //     ...Object.keys(fontSize).map((c) => `text-${c}`),
    // ],
};
