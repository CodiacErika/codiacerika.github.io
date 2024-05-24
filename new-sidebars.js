/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'generated-index',
        title: 'Codiac Concepts',
        description:
          "Learn about the concepts that drive the Codiac platform.",
      },
      items: [
        'concepts/what-is-codiac',
        {
          type: 'category',
          label: 'Basic Concepts',
          link: {
            type: 'generated-index',
            id: 'concepts/basic-concepts',
          },
          items: [
            'concepts/basic-concepts/assets-concepts',
            'concepts/basic-concepts/cabinets-concepts',
            'concepts/basic-concepts/clusters-concepts',
            'concepts/basic-concepts/toolchain-reduction-concepts'
          ],
        },
      ],
    },
  ],
};
export default sidebars;