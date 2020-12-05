// 配置
window.Config = {

  // 站点名
  SiteName: 'MC探索者i服务可用性检测',

  // 站点链接
  SiteUrl: '/status/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm785801886-fe798056dcefa062ca9f5619',
    'm785802120-51f2dbd4221a7c635d514405',
    'm785802121-f726e102d93b206615b80ae4',
    'm785804188-4c7493bd8a273c86035ca35d',
    'm785804192-aa17817f92d6d483eb38b016',
    'm785804196-6102d834a82c0329dc733f91'
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 90,

  // 导航栏菜单
  Navi: [
    {
      text: '回到主页',
      url: 'https://mcseekeri.top/'
    }
  ]
};
