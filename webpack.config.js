const path = require('path');
const options = {
    entry: "./src/index.ts",
    output: {
        path: "/build",
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".json"],
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                exclude: [path.resolve('node_modules'), path.resolve('tests')]
            },
        ],
    },
    stats: {
        colors: true,
    },
};
module.exports = [
    Object.assign({}, options, {
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'index.js',
            library: 'imath',
            libraryTarget: 'umd',
        },
        target: 'node'
    }),
    Object.assign({}, options, {
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'index.browser.js',
            library: 'imath',
            libraryTarget: 'umd',
        },
        target: 'web'
    }),
];