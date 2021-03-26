const plugins = [
  [
    "component",
    {
      libraryName: "element-ui",
      styleLibraryName: "theme-chalk",
    },
  ],
];
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins,
};
