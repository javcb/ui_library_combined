/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../catalyst-ui-kit/**/*.stories.@(js|jsx|ts|tsx)",
    "../tremor/**/*.stories.@(js|jsx|ts|tsx)",
    "../react-admin/**/*.stories.@(js|jsx|ts|tsx)",
    "../primereact/**/*.stories.@(js|jsx|ts|tsx)",
    "../core/**/*.stories.@(js|jsx|ts|tsx)",
    "../stripe/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
