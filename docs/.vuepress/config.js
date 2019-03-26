module.exports = {
  base: '/glob-notes/',
  title: 'glob-notes',
  host: '0.0.0.0',
  description: 'About glob, i want to learn.',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/isaacs/node-glob/master/oh-my-glob.gif'
      }
    ]
  ],
  themeConfig: {
    sidebar: {
      title: 'Get started',
      collapsable: false,
      children: ['/javascript/001-get-started.md']
    }
  }
};
