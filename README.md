# 摸鱼日报

摸鱼日报提供城市天气、热门榜单、农历等信息。示例网址 [https://paper.rehi.org](https://paper.rehi.org/?title=摸鱼日报&city=广州)

## 快速开始

下面3种方式都可以

- 将源码上传到服务器，使用自己设置的域名访问即可
- 将 [worker.js](./worker.js) 部署到 Cloudflare Worker，实现无服务器部署
- 将项目 [fork](https://github.com/rehiy/daily-paper/fork) 到自己的 github，连接到 Cloudflare Worker & Pages，实现无服务器部署

## 参数解析

`?title=明天不上班&city=北京&news=36kr,ithome,calendar`

- title - 标题，长度可根据主要目标设备设置，建议不超过6个字
- city - 城市，支持中国大陆地址，可以具体到区/县，主要用于展示天气信息
- news - 新闻，多个新闻源用逗号分隔，支持的类型如下
  - 36kr
  - baidu
  - bilibili
  - douban_group
  - douban_new
  - douyin
  - douyin_music
  - genshin
  - github
  - ithome
  - juejin
  - kuaishou
  - lol
  - netease
  - netease_music_toplist
  - newsqq
  - ngabbs
  - qq_music_toplist
  - sspai
  - thepaper
  - tieba
  - toutiao
  - v2ex
  - weibo
  - weread
  - zhihu
