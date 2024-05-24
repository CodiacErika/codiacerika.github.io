import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b3e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/codiac',
    component: ComponentCreator('/blog/tags/codiac', '164'),
    exact: true
  },
  {
    path: '/blog/tags/events',
    component: ComponentCreator('/blog/tags/events', '73f'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '879'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'c7f'),
    exact: true
  },
  {
    path: '/helloMarkdown',
    component: ComponentCreator('/helloMarkdown', '966'),
    exact: true
  },
  {
    path: '/helloReact',
    component: ComponentCreator('/helloReact', '77a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ba6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '29e'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fde'),
            exact: true
          },
          {
            path: '/docs/tags/getting-started',
            component: ComponentCreator('/docs/tags/getting-started', '1db'),
            exact: true
          },
          {
            path: '/docs/tags/intro',
            component: ComponentCreator('/docs/tags/intro', '208'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '917'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts/advanced-concepts/blue-green-concepts',
                component: ComponentCreator('/docs/concepts/advanced-concepts/blue-green-concepts', 'c3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts/advanced-concepts/cicd-concepts',
                component: ComponentCreator('/docs/concepts/advanced-concepts/cicd-concepts', 'aca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts/advanced-concepts/cluster-hopping-concepts',
                component: ComponentCreator('/docs/concepts/advanced-concepts/cluster-hopping-concepts', '71b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts/advanced-concepts/rbac-concepts',
                component: ComponentCreator('/docs/concepts/advanced-concepts/rbac-concepts', '8a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts/basic-concepts/assets-concepts',
                component: ComponentCreator('/docs/concepts/basic-concepts/assets-concepts', '1c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts/basic-concepts/cabinets-concepts',
                component: ComponentCreator('/docs/concepts/basic-concepts/cabinets-concepts', '6c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts/basic-concepts/clusters-concepts',
                component: ComponentCreator('/docs/concepts/basic-concepts/clusters-concepts', '143'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts/basic-concepts/toolchain-reduction-concepts',
                component: ComponentCreator('/docs/concepts/basic-concepts/toolchain-reduction-concepts', '8dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts/what-is-codiac',
                component: ComponentCreator('/docs/concepts/what-is-codiac', 'c3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-started/cicd-integration',
                component: ComponentCreator('/docs/get-started/cicd-integration', '9dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-started/create-account',
                component: ComponentCreator('/docs/get-started/create-account', '96b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-started/credentials',
                component: ComponentCreator('/docs/get-started/credentials', '3b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-started/install-cli',
                component: ComponentCreator('/docs/get-started/install-cli', '0d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-started/quickstart/deploy-10-microservices-quickstart',
                component: ComponentCreator('/docs/get-started/quickstart/deploy-10-microservices-quickstart', '47a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-started/quickstart/hello-world-quickstart',
                component: ComponentCreator('/docs/get-started/quickstart/hello-world-quickstart', 'dc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/cicd/existing-cicd-guide',
                component: ComponentCreator('/docs/guides/cicd/existing-cicd-guide', 'c71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/cicd/github-guide',
                component: ComponentCreator('/docs/guides/cicd/github-guide', '11a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/cicd/gitlab-guide',
                component: ComponentCreator('/docs/guides/cicd/gitlab-guide', '1d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/logging/datadog-guide',
                component: ComponentCreator('/docs/guides/logging/datadog-guide', '02e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/logging/elk-stack-guide',
                component: ComponentCreator('/docs/guides/logging/elk-stack-guide', '953'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/logging/existing-logging-guide',
                component: ComponentCreator('/docs/guides/logging/existing-logging-guide', '348'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/manage/cli-config-guide',
                component: ComponentCreator('/docs/guides/manage/cli-config-guide', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/manage/configuration-management-guide',
                component: ComponentCreator('/docs/guides/manage/configuration-management-guide', 'f94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/manage/move-deployments-guide',
                component: ComponentCreator('/docs/guides/manage/move-deployments-guide', 'bff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/manage/recreate-cluster-guide',
                component: ComponentCreator('/docs/guides/manage/recreate-cluster-guide', 'b77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/manage/rotate-tokens-guide',
                component: ComponentCreator('/docs/guides/manage/rotate-tokens-guide', 'aef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/manage/upgrade-cluster-version-guide',
                component: ComponentCreator('/docs/guides/manage/upgrade-cluster-version-guide', '6b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/security/cli-security-guide',
                component: ComponentCreator('/docs/guides/security/cli-security-guide', '898'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/telemetry/existing-telemetry-guide',
                component: ComponentCreator('/docs/guides/telemetry/existing-telemetry-guide', 'e5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/telemetry/prometheus-guide',
                component: ComponentCreator('/docs/guides/telemetry/prometheus-guide', 'cdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/platform/autoscalers',
                component: ComponentCreator('/docs/platform/autoscalers', '0fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/platform/file-stores',
                component: ComponentCreator('/docs/platform/file-stores', '8f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/platform/geoproximity',
                component: ComponentCreator('/docs/platform/geoproximity', 'bb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/platform/probes',
                component: ComponentCreator('/docs/platform/probes', '5fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/cli-commands',
                component: ComponentCreator('/docs/reference/cli-commands', 'cfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/glossary',
                component: ComponentCreator('/docs/reference/glossary', '65f'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
