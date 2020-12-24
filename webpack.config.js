const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin
        ]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoader = (extra) => {
    const loader = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: '.',
        },
    }, 'css-loader']

    if(extra) {
        loader.push(extra)
    }

    return loader
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist') // куда складывать
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd,
            }
        }),
        new CleanWebpackPlugin(),  // очищает папку dist, чтобы она содержала только актуальные файлы
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoader()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoader('sass-loader')
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    'thread-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: isDev ? '[path][name].[ext]' : '[contenthash].[ext]',
                            publicPath: '.',
                        },
                    }
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/, // шрифты
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: isDev ? '[path][name].[ext]' : '[contenthash].[ext]',
                            publicPath: '.',
                        },
                    }
                ],
            },
        ]
    }
}
