const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const autoprefixer = require('autoprefixer');
const PostCSSModulesValuesPlugin = require('postcss-modules-values');
const PostCSSFlexbugsFixesPlugin = require('postcss-flexbugs-fixes');

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

const sourceRoot = path.resolve(__dirname, 'src');

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

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist') // куда складывать
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [sourceRoot, 'node_modules'],
        mainFields: ['module', 'main'],
        symlinks: false,
    },
    optimization: optimization(),
    // devServer: {
    //     port: 4200,
    //     hot: isDev,
    // },
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
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '.',
                    }}
                    ,'css-loader'],
            },
            {
                test: /\.(scss|sass)$/,
                include: sourceRoot,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                PostCSSFlexbugsFixesPlugin,
                                autoprefixer({ flexbox: 'no-2009' }),
                                PostCSSModulesValuesPlugin,
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [sourceRoot],
                            },
                        },
                    },
                ],
            },
            // {
            //     test: /\.s[ac]ss$/,
            //     use: [{
            //         loader: MiniCssExtractPlugin.loader,
            //         options: {
            //             publicPath: '.',
            //         }}, 'css-loader', 'sass-loader'],
            //
            // },
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
                test: /\.(ttf|woff|woff2|eot)$/,
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
