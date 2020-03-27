module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 chrome versions"],
        },
        useBuiltIns: "usage",
        corejs: "3",
        modules: false,
      },
    ],
  ];

  return {
    presets,
  };
};
