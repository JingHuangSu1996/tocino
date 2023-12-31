const { BUILD_PATH, DARK, PREFIX } = require('../const/index.cjs');
const { cssTransforms, getDefaultFileConfig, getBaseFileConfig, jsTransforms } = require('../configs/base.cjs');
const { webTransforms } = require('../configs/transforms.cjs');
const { webFormats } = require('../configs/formats.cjs');

function getThemeSelector(theme) {
  return `html[data-theme="${theme}"], .tocino-${theme}`;
}

function getWebConfig(theme) {
  const notDefaultTheme = theme !== DARK;
  const THEME_PATH = `${BUILD_PATH}${theme}/`;

  return {
    theming_css: {
      transformGroup: webTransforms.css,
      transforms: cssTransforms,
      prefix: PREFIX,
      buildPath: notDefaultTheme ? `${BUILD_PATH}/themes/` : `${BUILD_PATH}css/`,
      files: [
        {
          ...getDefaultFileConfig(theme),
          format: webFormats.cssVars,
          destination: notDefaultTheme ? `${theme}.css` : 'variables.css',
          options: {
            selector: notDefaultTheme ? getThemeSelector(theme) : null,
          },
        },
      ],
    },
    css: {
      transformGroup: webTransforms.css,
      buildPath: `${BUILD_PATH}css/`,
      prefix: PREFIX,
      files: [
        {
          ...getBaseFileConfig(),
          format: webFormats.cssVars,
          destination: 'base_variables.css',
        },
      ],
    },
    theming_scss: {
      transformGroup: webTransforms.scss,
      transforms: cssTransforms,
      buildPath: `${BUILD_PATH}scss/`,
      prefix: PREFIX,
      files: [
        {
          ...getDefaultFileConfig(theme),
          destination: `_${theme}-variables.scss`,
          format: webFormats.scss,
        },
      ],
    },
    scss: {
      transformGroup: webTransforms.scss,
      buildPath: `${BUILD_PATH}scss/`,
      prefix: PREFIX,
      files: [
        {
          ...getBaseFileConfig(),
          destination: `_base-variables.scss`,
          format: webFormats.scss,
        },
      ],
    },
    theming_es: {
      transformGroup: webTransforms.es,
      transforms: jsTransforms,
      buildPath: notDefaultTheme ? THEME_PATH : BUILD_PATH,
      prefix: PREFIX,
      files: [
        {
          ...getDefaultFileConfig(theme),
          destination: notDefaultTheme ? `${theme}.mjs` : 'wrapper.mjs',
          format: webFormats.es6,
        },
      ],
    },
    es: {
      transformGroup: webTransforms.es,
      transforms: jsTransforms,
      buildPath: BUILD_PATH,
      prefix: PREFIX,
      files: [
        {
          ...getBaseFileConfig(),
          destination: 'base_wrapper.mjs',
          format: webFormats.es6,
        },
      ],
    },
    themeing_ts: {
      transformGroup: webTransforms.ts,
      transforms: jsTransforms,
      buildPath: notDefaultTheme ? THEME_PATH : BUILD_PATH,
      prefix: PREFIX,
      files: [
        {
          ...getDefaultFileConfig(theme),
          destination: notDefaultTheme ? `${theme}.d.ts` : 'index.d.ts',
          format: webFormats.tsDeclarations,
        },
      ],
    },
    ts: {
      transformGroup: webTransforms.ts,
      transforms: jsTransforms,
      prefix: PREFIX,
      buildPath: BUILD_PATH,
      files: [
        {
          ...getBaseFileConfig(),
          destination: 'base_index.d.ts',
          format: webFormats.tsDeclarations,
        },
      ],
    },
  };
}

module.exports = {
  getWebConfig,
};
