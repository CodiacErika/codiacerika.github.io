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
    component: ComponentCreator('/docs', '517'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c2a'),
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
            component: ComponentCreator('/docs', '0e0'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '56e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/concepts/advanced-concepts/blue-green-concepts',
                component: ComponentCreator('/docs/concepts/advanced-concepts/blue-green-concepts', '0cf'),
                exact: true
              },
              {
                path: '/docs/concepts/advanced-concepts/cicd-concepts',
                component: ComponentCreator('/docs/concepts/advanced-concepts/cicd-concepts', '66b'),
                exact: true
              },
              {
                path: '/docs/concepts/advanced-concepts/cluster-hopping-concepts',
                component: ComponentCreator('/docs/concepts/advanced-concepts/cluster-hopping-concepts', 'e52'),
                exact: true
              },
              {
                path: '/docs/concepts/advanced-concepts/rbac-concepts',
                component: ComponentCreator('/docs/concepts/advanced-concepts/rbac-concepts', '643'),
                exact: true
              },
              {
                path: '/docs/concepts/basic-concepts/assets-concepts',
                component: ComponentCreator('/docs/concepts/basic-concepts/assets-concepts', '31d'),
                exact: true
              },
              {
                path: '/docs/concepts/basic-concepts/cabinets-concepts',
                component: ComponentCreator('/docs/concepts/basic-concepts/cabinets-concepts', '4b6'),
                exact: true
              },
              {
                path: '/docs/concepts/basic-concepts/clusters-concepts',
                component: ComponentCreator('/docs/concepts/basic-concepts/clusters-concepts', '888'),
                exact: true
              },
              {
                path: '/docs/concepts/basic-concepts/toolchain-reduction-concepts',
                component: ComponentCreator('/docs/concepts/basic-concepts/toolchain-reduction-concepts', 'f74'),
                exact: true
              },
              {
                path: '/docs/concepts/what-is-codiac',
                component: ComponentCreator('/docs/concepts/what-is-codiac', '8df'),
                exact: true
              },
              {
                path: '/docs/get-started/cicd-integration',
                component: ComponentCreator('/docs/get-started/cicd-integration', 'fb1'),
                exact: true
              },
              {
                path: '/docs/get-started/create-account',
                component: ComponentCreator('/docs/get-started/create-account', '027'),
                exact: true
              },
              {
                path: '/docs/get-started/credentials',
                component: ComponentCreator('/docs/get-started/credentials', 'ccc'),
                exact: true
              },
              {
                path: '/docs/get-started/install-cli',
                component: ComponentCreator('/docs/get-started/install-cli', '6d7'),
                exact: true
              },
              {
                path: '/docs/get-started/quickstart/deploy-10-microservices-quickstart',
                component: ComponentCreator('/docs/get-started/quickstart/deploy-10-microservices-quickstart', '100'),
                exact: true
              },
              {
                path: '/docs/get-started/quickstart/hello-world-quickstart',
                component: ComponentCreator('/docs/get-started/quickstart/hello-world-quickstart', '16f'),
                exact: true
              },
              {
                path: '/docs/guides/cicd/existing-cicd-guide',
                component: ComponentCreator('/docs/guides/cicd/existing-cicd-guide', '34d'),
                exact: true
              },
              {
                path: '/docs/guides/cicd/github-guide',
                component: ComponentCreator('/docs/guides/cicd/github-guide', 'fe9'),
                exact: true
              },
              {
                path: '/docs/guides/cicd/gitlab-guide',
                component: ComponentCreator('/docs/guides/cicd/gitlab-guide', '099'),
                exact: true
              },
              {
                path: '/docs/guides/logging/datadog-guide',
                component: ComponentCreator('/docs/guides/logging/datadog-guide', '217'),
                exact: true
              },
              {
                path: '/docs/guides/logging/elk-stack-guide',
                component: ComponentCreator('/docs/guides/logging/elk-stack-guide', '575'),
                exact: true
              },
              {
                path: '/docs/guides/logging/existing-logging-guide',
                component: ComponentCreator('/docs/guides/logging/existing-logging-guide', '202'),
                exact: true
              },
              {
                path: '/docs/guides/manage/cli-config-guide',
                component: ComponentCreator('/docs/guides/manage/cli-config-guide', '486'),
                exact: true
              },
              {
                path: '/docs/guides/manage/configuration-management-guide',
                component: ComponentCreator('/docs/guides/manage/configuration-management-guide', '5e7'),
                exact: true
              },
              {
                path: '/docs/guides/manage/move-deployments-guide',
                component: ComponentCreator('/docs/guides/manage/move-deployments-guide', '82a'),
                exact: true
              },
              {
                path: '/docs/guides/manage/recreate-cluster-guide',
                component: ComponentCreator('/docs/guides/manage/recreate-cluster-guide', '534'),
                exact: true
              },
              {
                path: '/docs/guides/manage/rotate-tokens-guide',
                component: ComponentCreator('/docs/guides/manage/rotate-tokens-guide', 'e76'),
                exact: true
              },
              {
                path: '/docs/guides/manage/upgrade-cluster-version-guide',
                component: ComponentCreator('/docs/guides/manage/upgrade-cluster-version-guide', 'bac'),
                exact: true
              },
              {
                path: '/docs/guides/security/cli-security-guide',
                component: ComponentCreator('/docs/guides/security/cli-security-guide', '56b'),
                exact: true
              },
              {
                path: '/docs/guides/telemetry/existing-telemetry-guide',
                component: ComponentCreator('/docs/guides/telemetry/existing-telemetry-guide', '478'),
                exact: true
              },
              {
                path: '/docs/guides/telemetry/prometheus-guide',
                component: ComponentCreator('/docs/guides/telemetry/prometheus-guide', '505'),
                exact: true
              },
              {
                path: '/docs/platform/autoscalers',
                component: ComponentCreator('/docs/platform/autoscalers', '0e0'),
                exact: true
              },
              {
                path: '/docs/platform/file-stores',
                component: ComponentCreator('/docs/platform/file-stores', '9c5'),
                exact: true
              },
              {
                path: '/docs/platform/geoproximity',
                component: ComponentCreator('/docs/platform/geoproximity', 'ccc'),
                exact: true
              },
              {
                path: '/docs/platform/probes',
                component: ComponentCreator('/docs/platform/probes', '4d1'),
                exact: true
              },
              {
                path: '/docs/reference/cli-commands',
                component: ComponentCreator('/docs/reference/cli-commands', 'c51'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/reference/glossary',
                component: ComponentCreator('/docs/reference/glossary', 'fef'),
                exact: true,
                sidebar: "docs"
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
