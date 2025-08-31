const sidebar = {
  apisidebar: [
    {
      type: "doc",
      id: "intro", // this always exists by default
    },
    {
      type: "category",
      label: "Test Category",
      items: [
        {
          type: "doc",
          id: "intro",
          label: "Intro again",
        },
      ],
    },
  ],
};

module.exports = sidebar.apisidebar;
