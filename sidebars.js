/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Foundation First",
      items: [
        "foundation/introduction",
        "foundation/why-cd-matters",
        "foundation/cd-principles",
        "foundation/xp-practices",
      ],
    },
    {
      type: "category",
      label: "CD Sandbox Project",
      items: ["sandbox/overview", "sandbox/implementation-plan", "sandbox/project-structure", "sandbox/test-strategy"],
    },
    {
      type: "category",
      label: "Real-World CD Pipeline",
      items: [
        "pipeline/overview",
        "pipeline/commit-stage",
        "pipeline/acceptance-stage",
        "pipeline/uat-stage",
        "pipeline/release-stage",
      ],
    },
    {
      type: "category",
      label: "Advanced Topics",
      items: ["advanced/test-shield", "advanced/codescene", "advanced/quality-metrics"],
    },
  ],
};

module.exports = sidebars;
