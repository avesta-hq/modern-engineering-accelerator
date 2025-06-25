/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Foundation First",
      items: [
        {
          type: "doc",
          id: "foundation/introduction",
          label: "Introduction to Engineering Excellence",
        },
        {
          type: "doc",
          id: "foundation/why-cd-matters",
          label: "Why Continuous Delivery Matters",
        },
        {
          type: "doc",
          id: "foundation/agile-transformation-pitfalls",
          label: "The Pitfalls of Agile Without Engineering",
        },
        {
          type: "doc",
          id: "foundation/cd-principles",
          label: "Continuous Delivery Principles",
        },
        {
          type: "doc",
          id: "foundation/xp-practices",
          label: "Extreme Programming Practices",
        },
      ],
    },
    {
      type: "category",
      label: "CD Sandbox Project",
      items: ["sandbox/overview", "sandbox/test-strategy"],
      //items: ["sandbox/overview", "sandbox/implementation-plan", "sandbox/project-structure", "sandbox/test-strategy"],
    },
    {
      type: "category",
      label: "Real-World CD Pipeline",
      items: [
        "pipeline/overview",
        "pipeline/commit-stage",
        "pipeline/acceptance-stage",
        //"pipeline/uat-stage",
        "pipeline/release-stage",
      ],
    },
    {
      type: "category",
      label: "Strategic Solutions",
      items: ["advanced/test-shield", "advanced/engineering-metrics"],
    },
  ],
};

module.exports = sidebars;
