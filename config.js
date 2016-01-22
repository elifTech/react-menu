var path = require('path');

var config = {

  component: {
    entry: './src/index.jsx',
    name: 'Menu',
    pkgName: 'react-menu',
    dependencies: {
      classnames: 'classnames',
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    scss: './scss/styles.scss'
  },

  alias: {
    'react-menu': path.resolve(__dirname, './src')
  },

  example: {
    dist: './examples/dist',
    entry: {
      app: './examples/src/example.js'
    },
    html: [{
      title: 'My Component 1',
      template: './examples/src/index.html',
    }],
    files: [
      './dist/react-menu.css'
    ],

    port: 3000,
    openBrowser: true,
  }

};

module.exports = config;
