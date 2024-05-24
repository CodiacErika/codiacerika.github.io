/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/cli-commands',
        'reference/glossary'
      ]
    } 
  ]
};
export default sidebars;
