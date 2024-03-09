const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@scenes': path.resolve(__dirname, 'src/scenes'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@global': path.resolve(__dirname, 'src/global'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
    ],
  },
};
