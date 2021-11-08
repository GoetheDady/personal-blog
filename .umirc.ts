import { defineConfig } from 'dumi';

export default defineConfig({
  title: '龟仙屋',
  mode: 'site',
  locales: [['zh-CN', '中文'], ['mt-MS', '火星文']],
  publicPath: '/personal-blog/',
  description: '五渣的龟仙屋，记录自己的学习过程！',
  navs: {
    // 多语言 key 值需与 locales 配置中的 key 一致
    'zh-CN': [
      {
        title: '开始吧',
        path: '/getting-started',
      },
    ],
    'mt-MS': [
      {
        title: '閞始妑',
        path: '/mt-MS/getting-started',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
