const { description } = require('../../../package')

module.exports = {

  title: 'HTDP1',
  description: 'htdp1 github pages',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'AWS',
        link: '/aws/'
      },
      {
        text: 'Redis',
        link: '/redis/'
      },
      {
        text: 'Sprint#1',
        link: '/sp1/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'env',
            'doc',
          ],
          sidebarDepth: 2
        },
        {
          title: 'Resource',
          collapsable: false,
          children: [
            'resource',
          ]
        }
      ],
      '/aws/': [
        {
          title: 'AWS',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Resource',
          collapsable: false,
          children: [
            'eks',
            'alb',
            'ebs',
            'efs',
          ]
        }
      ],
      '/redis/': [
        {
          title: 'Redis',
          collapsable: false,
          children: [
            '',
            'dev',
            'perftest',
          ],
          sidebarDepth: 2
        },
      ],
      '/sp1/': [
        {
          title: 'Sprint#1',
          collapsable: false,
          children: [
            '',
            'arch',
          ],
          sidebarDepth: 2
        },
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@dovyp/vuepress-plugin-clipboard-copy',
  ],

  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-plantuml'))
    }
  }

}
