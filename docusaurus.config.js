/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
    title: 'GenoML',
    tagline: 'Automated Machine Learning (AutoML) for Genomics',
    url: 'https://genoml.com',
    baseUrl: '/',
    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'genoml', // Usually your GitHub org/user name.
    projectName: 'genoml.github.io', // Usually your repo name.
    themeConfig: {
        colorMode: {
            // "light" | "dark"
            defaultMode: 'dark',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: true,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'GenoML',
            logo: {
                alt: 'GenoML Logo',
                src: 'img/logo-cut.png',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    to: 'blog/',
                    label: 'Blog',
                    position: 'left',
                },
                // {to: 'blog', label: 'Blog', position: 'left'},
                // Please keep GitHub link to the right for consistency.
                {
                    href: 'https://github.com/genoml/genoml',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: 'docs/about/what-is-genoml/',
                        },
                        {
                            label: 'Contribute',
                            to: 'docs/about/contribute',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/genoml',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/geno_ml',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/genoml',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/genoml/genoml',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Data Tecnica International, LLC.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),
                    ]
                },
            },
        ],
    ],
};
