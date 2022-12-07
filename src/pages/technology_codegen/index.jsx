import React from 'react'
import Page from '../page'

const markdown = `
出码模块
---
**1、概述**  
根据schema json文件生成源码项目
\`\`\`js
codegen --file [schema文件路径] --output [输出文件夹路径]
\`\`\`

**2、步骤** 
1. 将模板文件拷贝到输出目录
2. 生成store文件
    - 生成数据源 $state
    - 写入自定义方法，与内置方法结合，生成$api
3. 生成页面文件
    - 通过props注入当前页面域和全局域的$state与$api
    - 将低代码中的$state替换成this.props.$state，$api替换成this.props.$api
    - 生成页面生命周期
    - 生成组件
    - 收集组件依赖，写入依赖引入  

**3、目录结构**
\`\`\`js
src
├── hoc
│   └── withNavigate.tsx  // 实现$api.navigate，模板文件，勿动
├── index.tsx // 主入口
├── pages
│   ├── index.ts  // 路由文件
│   └── pageId1
│       └── index.tsx   // 页面文件
└── store
    └── index.ts  // 数据中心
\`\`\`
`

function Doc() {
  return <Page markdown={markdown} />
}

export default Doc