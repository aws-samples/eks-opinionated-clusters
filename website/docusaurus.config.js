// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import * as path from "path";
import { themes as prismThemes } from "prism-react-renderer";

import remarkCodeTerminal from "./src/remark/code-terminal.js";
import remarkIncludeCode from "./src/remark/include-code.js";
import remarkIncludeKustomization from "./src/remark/include-kustomization.js";
import remarkParameters from "./src/remark/parameters.js";
import remarkIncludeYaml from "./src/remark/include-yaml.js";

const rootDir = path.dirname(require.resolve("./package.json"));
const manifestsDir = `${rootDir}/..`;
const kustomizationsDir = `${manifestsDir}/manifests`;

const manifestsRef = process.env.MANIFESTS_REF || "main";
const manifestsOwner = "aws-samples";
const manifestsRepository = "eks-opinionated-clusters";

const labTimesEnabled = process.env.LAB_TIMES_ENABLED || false;

const title = "EKS Opinionated Clusters"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: title,
  tagline: "Cluster configurations with ISV solutions for Amazon Elastic Kubernetes Service",
  url: "https://aws-samples.github.io",
  baseUrl: "/" + manifestsRepository + "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  noIndex: process.env.ENABLE_INDEX !== "1",

  organizationName: "aws-samples",
  projectName: manifestsRepository,
  githubHost: 'github.com',

  plugins: [
    "docusaurus-plugin-sass",
    [
      "docusaurus-lunr-search",
      {
        disableVersioning: true,
      },
    ],
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [remarkCodeTerminal],
          beforeDefaultRemarkPlugins: [
            [
              remarkParameters,//TODO confirm needed
              {
                replacements: {
                  MANIFESTS_REF: manifestsRef,
                  MANIFESTS_OWNER: manifestsOwner,
                  MANIFESTS_REPOSITORY: manifestsRepository,
                  KUBERNETES_VERSION: "1.30",
                  KUBERNETES_NODE_VERSION: "1.30-eks-036c24b",
                },
              },
            ],
            [remarkIncludeYaml, { manifestsDir }],
            [remarkIncludeCode, { manifestsDir }],
            [remarkIncludeKustomization, { manifestsDir: kustomizationsDir }],
          ],
          // TODO confirm remove below
          // editUrl:
          //   "https://github.com/{...}/tree/main/website",
          exclude: [//TODO remove if nothing to exclude
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
      },
      metadata: [
        {
          name: "google-site-verification",
          content: "123",//TODO add key
        },
      ],
      image: "img/meta.jpg",
      navbar: {
        title: title,
        // logo: {
        //   alt: "Amazon Web Services",
        //   src: "img/logo.svg",
        // },
        items: [
          {
            type: "doc",
            docId: "introduction/index",
            position: "left",
            label: "Intro",
          },
          {
            type: "doc",
            docId: "application/index",
            position: "left",
            label: "Application Definition and Development",
          },
          {
            type: "doc",
            docId: "provisioning/index",
            position: "left",
            label: "Provisioning",
          },
          {
            type: "doc",
            docId: "runtime/index",
            position: "left",
            label: "Runtime",
          },
          {
            type: "doc",
            docId: "orchestration/index",
            position: "left",
            label: "Orchestration",
          },
          {
            type: "doc",
            docId: "observability/index",
            position: "left",
            label: "Observability",
          },
          {//TODO change url
            href: "https://github.com/aws-samples/eks-opinionated-clusters",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 4,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      footer: {
        links: [
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/",//TODO github repo
              },
            ],
          },
          {
            title: "Other",
            items: [
              {
                label: "Site Terms",
                href: "https://aws.amazon.com/terms/?nc1=f_pr",
              },
              {
                label: "Privacy",
                href: "https://aws.amazon.com/privacy/?nc1=f_pr",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["diff"],
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-highlighted-line-even",
            block: {
              start: "annotated-highlight-start-even",
              end: "annotated-highlight-end-even",
            },
          },
          {
            className: "code-block-highlighted-line-odd",
            block: {
              start: "annotated-highlight-start-odd",
              end: "annotated-highlight-end-odd",
            },
          },
          {
            className: "code-block-highlight",
            line: "HIGHLIGHT",
          },
          {
            className: "code-block-annotation",
            line: "highlight-annotation",
          },
        ],
      },
    }),
};

export default config;
