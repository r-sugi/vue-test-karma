const webpackConfig = require('./webpack.config.js')

module.exports = config => {
  config.set({
    frameworks: ['mocha'],
    files: [
      { pattern: 'tests/**/*.spec.js' },
    ],
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    webpack: webpackConfig,
    coverageReporter: {
      dir: './coverage',
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
    },
    browsers: ['Chrome'],
  })
}
