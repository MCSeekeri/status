// 配置
window.Config = {

  // 站点名
  SiteName: 'MC探索者i服务可用性检测',

  // 站点链接
  SiteUrl: 'status.mcseekeri.top',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'status.seekeri.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm785801886-fe798056dcefa062ca9f5619',
    'm785802121-f726e102d93b206615b80ae4',
    'm785804188-4c7493bd8a273c86035ca35d',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '科A资源站',
      url: 'https://sg.mcseekeri.top/'
    },
    {
      text: '科A图书馆',
      url: 'https://sciadv.mcseekeri.top/'
    },
    {
      text: '个人博客',
      url: 'https://mcseekeri.top/'
    }
  ]
};
