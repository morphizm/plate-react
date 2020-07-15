module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // debug: true,
        forceAllTransforms: true,
        useBuiltIns: 'entry',
        corejs: 3,
        modules: false,
        exclude: ['transform-typeof-symbol'],
        targets: {
          browsers: ['last 2 Chrome versions', 'IE 11'],
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
      },
    ],
  ],
  plugins: [
    // require('babel-plugin-macros'),
    // require('react-hot-loader/babel'),
    // require('babel-plugin-transform-class-properties'),
    // require('babel-plugin-transform-export-extensions'),
    // require('@babel/plugin-proposal-export-default-from'),
    // require('@babel/plugin-syntax-dynamic-import').default,
    // require('@babel/plugin-transform-destructuring').default,
    // [
    //   'babel-plugin-import',
    //   {
    //     libraryName: '@material-ui/icons',
    //     libraryDirectory: '', // or '' if your bundler does not support ES modules
    //     camel2DashComponentName: false,
    //   },
    // ],
    // [
    //   require('@babel/plugin-proposal-object-rest-spread').default,
    //   {
    //     useBuiltIns: true,
    //   },
    // ],
    // [
    //   require('@babel/plugin-transform-runtime').default,
    //   {
    //     helpers: false,
    //     regenerator: true,
    //     corejs: false,
    //   },
    // ],
    // [
    //   require('@babel/plugin-transform-regenerator').default,
    //   {
    //     async: false,
    //   },
    // ],
    // [
    //   require('babel-plugin-transform-react-remove-prop-types').default,
    //   {
    //     removeImport: true,
    //   },
    // ],
  ],
};
