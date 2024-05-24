import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/scratch/markdown-page',
    component: ComponentCreator('/scratch/markdown-page', '6ba'),
    exact: true
  },
  {
    path: '/scratch/',
    component: ComponentCreator('/scratch/', '71c'),
    routes: [
      {
        path: '/scratch/',
        component: ComponentCreator('/scratch/', 'fc5'),
        routes: [
          {
            path: '/scratch/tags',
            component: ComponentCreator('/scratch/tags', '80a'),
            exact: true
          },
          {
            path: '/scratch/tags/api',
            component: ComponentCreator('/scratch/tags/api', '262'),
            exact: true
          },
          {
            path: '/scratch/tags/getting-started',
            component: ComponentCreator('/scratch/tags/getting-started', 'e10'),
            exact: true
          },
          {
            path: '/scratch/tags/intro',
            component: ComponentCreator('/scratch/tags/intro', 'bd4'),
            exact: true
          },
          {
            path: '/scratch/',
            component: ComponentCreator('/scratch/', '4ee'),
            routes: [
              {
                path: '/scratch/about/',
                component: ComponentCreator('/scratch/about/', '5d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/about/adhoc',
                component: ComponentCreator('/scratch/about/adhoc', 'd24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/about/asset-dev',
                component: ComponentCreator('/scratch/about/asset-dev', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/about/devops',
                component: ComponentCreator('/scratch/about/devops', '2b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/about/runtime-mgmt',
                component: ComponentCreator('/scratch/about/runtime-mgmt', '947'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/about/theory-summary',
                component: ComponentCreator('/scratch/about/theory-summary', 'b15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/about/why',
                component: ComponentCreator('/scratch/about/why', '199'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/',
                component: ComponentCreator('/scratch/api-base/', '8c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/',
                component: ComponentCreator('/scratch/api-base/basics/', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/custom-endpoints',
                component: ComponentCreator('/scratch/api-base/basics/custom-endpoints', '137'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/custom-filter-defs',
                component: ComponentCreator('/scratch/api-base/basics/custom-filter-defs', '6e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/custom-validation',
                component: ComponentCreator('/scratch/api-base/basics/custom-validation', '51c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/HATEOAS',
                component: ComponentCreator('/scratch/api-base/basics/HATEOAS', '9cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/patch-and-update',
                component: ComponentCreator('/scratch/api-base/basics/patch-and-update', '8b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/projections',
                component: ComponentCreator('/scratch/api-base/basics/projections', 'c3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/repo-registry-pattern',
                component: ComponentCreator('/scratch/api-base/basics/repo-registry-pattern', 'add'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/response-envelopes',
                component: ComponentCreator('/scratch/api-base/basics/response-envelopes', '49f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/searching-and-criteria',
                component: ComponentCreator('/scratch/api-base/basics/searching-and-criteria', '4ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/StringFilter',
                component: ComponentCreator('/scratch/api-base/basics/StringFilter', 'dcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/basics/using-ioc',
                component: ComponentCreator('/scratch/api-base/basics/using-ioc', '499'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/concepts/',
                component: ComponentCreator('/scratch/api-base/concepts/', 'ef8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/plugins/',
                component: ComponentCreator('/scratch/api-base/plugins/', '1a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/plugins/mongodb-repo-plugin',
                component: ComponentCreator('/scratch/api-base/plugins/mongodb-repo-plugin', '3fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/plugins/open-api-plugin',
                component: ComponentCreator('/scratch/api-base/plugins/open-api-plugin', '1a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/plugins/sql-repo-plugin',
                component: ComponentCreator('/scratch/api-base/plugins/sql-repo-plugin', '9e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/api-base/plugins/validation-plugin',
                component: ComponentCreator('/scratch/api-base/plugins/validation-plugin', 'f2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/cli/',
                component: ComponentCreator('/scratch/cli/', '214'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/cli/command-reference',
                component: ComponentCreator('/scratch/cli/command-reference', 'c1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/cli/tutorials/',
                component: ComponentCreator('/scratch/cli/tutorials/', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/getting-started/',
                component: ComponentCreator('/scratch/getting-started/', '9f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/getting-started/quickstart-custom-endpoint',
                component: ComponentCreator('/scratch/getting-started/quickstart-custom-endpoint', '881'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/getting-started/quickstart-database-cruds',
                component: ComponentCreator('/scratch/getting-started/quickstart-database-cruds', '91e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/getting-started/quickstart-extend-crud',
                component: ComponentCreator('/scratch/getting-started/quickstart-extend-crud', '97d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/getting-started/setup',
                component: ComponentCreator('/scratch/getting-started/setup', '24e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scratch/',
                component: ComponentCreator('/scratch/', 'bf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
