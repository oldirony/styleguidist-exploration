const path = require('path');

module.exports = {
  propsParser: require("react-docgen-typescript").withDefaultConfig().parse,
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
