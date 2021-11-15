module.exports = {
  settings: {
    cache: {
      enabled: true,
      clearRelatedCache: true,
      models: [
        {
          model: "global",
          singleType: true,
        },
        {
          model: "pages",
          singleType: false,
        },
      ],
    },
  },
};
