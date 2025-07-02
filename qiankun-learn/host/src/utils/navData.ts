let navData = [
  {
    name: "Admin",
    key: "admin",
    message: "有度后台管理系统",
    url: "https://in.newrank.cn/data/admin",
    groupUrl: "https://in.newrank.cn/data/admin/groupManage",
  },
  {
    name: "TDL",
    key: "tdl",
    message: "任务派发平台",
    url: "https://tdl.newrank.cn",
    groupUrl: "https://tdl.newrank.cn",
  },
  {
    name: "DataN",
    key: "datan",
    message: "面向开发和使用者的全透明数据平台",
    url: "https://datan.newrank.cn",
  },
  {
    name: "OKR",
    key: "okr",
    message: "团队目标管理与展示平台",
    url: "https://okr.newrank.cn",
  },
  {
    name: "Teams",
    key: "teams",
    message: "项目信息共享，debug和报告系统",
    url: "https://teams.newrank.cn",
  },
  {
    name: "Tools",
    key: "tools",
    message: "轻量级开发和工具使用平台",
    url: "https://tools.newrank.cn",
  },
  {
    name: "Meeting",
    key: "meeting",
    message: "实时查询、预约会议平台",
    url: "https://meeting.newrank.cn",
  },
  {
    name: "Gateway",
    key: "gateway",
    url: "https://gateway.newrank.cn",
  },
];

if (process.env.NODE_ENV === "development") {
  navData = [
    {
      name: "Admin",
      key: "admin",
      message: "有度后台管理系统",
      url: "http://test.in.newrank.cn/data/admin",
      groupUrl: "http://test.in.newrank.cn/data/admin/groupManage",
    },
    {
      name: "TDL",
      key: "tdl",
      message: "任务派发平台",
      url: "http://test.tdl.newrank.cn",
      groupUrl: "http://test.tdl.newrank.cn",
    },
    {
      name: "DataN",
      key: "datan",
      message: "面向开发和使用者的全透明数据平台",
      url: "http://test.datan.newrank.cn",
    },
    {
      name: "OKR",
      key: "okr",
      message: "团队目标管理与展示平台",
      url: "http://test.okr.newrank.cn",
    },
    {
      name: "Teams",
      key: "teams",
      message: "项目信息共享，debug和报告系统",
      url: "http://test.teams.newrank.cn",
    },
    {
      name: "Tools",
      key: "tools",
      message: "轻量级开发和工具使用平台",
      url: "http://test.tools.newrank.cn",
    },
    {
      name: "Meeting",
      key: "meeting",
      message: "实时查询、预约会议平台",
      url: "http://test.meeting.newrank.cn",
    },
    {
      name: "Gateway",
      key: "gateway",
      url: "http://test.gateway.newrank.cn",
    },
  ];
}

export { navData };
