module.exports = {
  "stories": ["../src/**/*.stories.tsx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-styling", "@storybook/addon-actions"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};