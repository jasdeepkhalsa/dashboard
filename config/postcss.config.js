var postCSSConfig = [
    require('autoprefixer')({
        browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
        ]
    }),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars')({
      variables: function variables() {
        return require('../src/variables')
      },
      unknown: function unknown(node, name, result) {
        node.warn(result, 'Unknown variable ' + name)
      }
    })
];

// Export the PostCSS Config for usage in webpack
module.exports = postCSSConfig;