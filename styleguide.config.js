const path = require('path');
const spaceFactor = 8;
module.exports = {
  styles: {
    Section: {
      root: {
        borderBottom: '3px solid #f4f4f4',
        marginBottom: 50
      }
    },
    Examples: {
      root: {
        marginBottom: 75
      }
    },
    Playground: {
      preview: {
        padding: 0,
        marginBottom: 10,
      }
    },
    SectionHeading: {
      wrapper: {
        marginBottom: 20,
      }
    }
  },
  propsParser: require("react-docgen-typescript").withDefaultConfig().parse,
  webpackConfig: require('./config/webpack.config.dev'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, '.styleguide/ThemeWrapper'),
  },
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
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
