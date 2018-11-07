const path = require('path');
const spaceFactor = 8;
module.exports = {
  theme: {
    spaceFactor,
    space: [
      spaceFactor / 2, // 4
      spaceFactor, // 8
      spaceFactor * 2, // 16
      spaceFactor * 3, // 24
      spaceFactor * 8, // 32
      spaceFactor * 12, // 40
      spaceFactor * 20, // 48
    ]
  },
  propsParser: require("react-docgen-typescript").withDefaultConfig().parse,
  webpackConfig: require('./config/webpack.config.dev'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/ThemeWrapper'),
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          content: 'docs/installation.md',
          description: 'The description for the installation section'
        }
      ]
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/components/**/*.tsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ]
};
