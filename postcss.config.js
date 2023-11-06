const debug = !!process.env.DEBUG_CSS;

module.exports = {
  syntax: 'postcss-scss',
  map: { inline: true },
  plugins: [
    require('postcss-at-debug')({ debug }),
    require('postcss-advanced-variables'), 
    require('postcss-import-url')({
      modernBrowser: true
    }),
    require('postcss-import'),
    require('postcss-utilities'),
    require("postcss-sass-color-functions"),
    require('postcss-map-get'),
    require('postcss-preset-env')({
      features: {
				'nesting-rules': {
					noIsPseudoSelector: false,
				},
        'media-query-ranges': true,
        'custom-media-queries': true,
			},
    }),
    require('cssnano'),
  ],
}
