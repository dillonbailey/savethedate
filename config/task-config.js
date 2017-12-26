module.exports = {
  html: true,
  images: true,
  fonts: true,
  static: true,
  svgSprite: true,
  ghPages: true,
  stylesheets: true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ['./app.jsx'],
    },
    hot: {
      reload: true,
      noInfo: false,
      quiet: true,
      react: true,
    },
    babel: {
      // presets: [["es2015", { "modules": false }], 'stage-1']
      // moved to .babelrc
    },
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public',
    },
  },

  production: {
    rev: true,
  },
};
