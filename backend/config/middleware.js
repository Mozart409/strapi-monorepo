module.exports = {
  settings: {
    cache: {
      enabled: false,
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
