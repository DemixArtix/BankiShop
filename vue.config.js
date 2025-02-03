const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: true,
    runtimeCompiler: true,
    configureWebpack: {
        devServer: {
            port: 8888,
            static: {
                directory: path.join(__dirname, 'api'),
                publicPath: '/api',
            },
        },
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components/'),
                constants: path.resolve(__dirname, 'src/constants/'),
                views: path.resolve(__dirname, 'src/views/'),
                assets: path.resolve(__dirname, 'src/assets/'),
                scss: path.resolve(__dirname, 'src/scss/'),
                store: path.resolve(__dirname, 'src/store/'),
                uploads: path.resolve(__dirname, 'src/uploads/'),
                utils: path.resolve(__dirname, 'src/utils/'),
                types: path.resolve(__dirname, 'src/types/'),
                '@': path.resolve(__dirname, 'src/'),
            },
        },
    },
});
