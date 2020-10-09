module.exports = {
    stories: [
        "../client/src/stories/**/*.stories.mdx",
        "../client/src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-addon-designs",
    ],
}
