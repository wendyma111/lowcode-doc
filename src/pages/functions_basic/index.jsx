import React from 'react'
import Page from '../page'
import basicPng from '../../resources/basic.png'

const markdown = `
**2、源码仓库**  
* **入料** 
* **出码**  

**3、入料模块**  
/packages/lc-cli目录下运行yarn link    
* **lc-cli create <materialName>**:  创建物料组件模板代码，组件模板项目支持在低代码平台调试，见debug命令，同时支持本地storybook调试，运行yarn storybook，入参为物料组件标识，如：Container，必选
* **lc-cli debug [rootPath]**:  打开低代码平台进行物料组件调试，入参为物料组件项目根目录，可为相对/绝对目录，可选
* **lc-cli build [rootPath]**:  组件打包，输出组件源码文件 & 组件配置文件至dist目录，入参为物料组件项目根目录，可为相对/绝对目录，可选
* **lc-cli publish [rootPath]**:  组件发布，入参为物料组件项目根目录，可为相对/绝对目录，可选

*物料组件目录结构（请勿修改模板代码目录结构）*
\`\`\`js
├── src
│   ├── component   // 组件源码目录
│   │   ├── index.module.css
│   │   └── index.tsx
│   ├── config      // 组件配置文件目录 
│   │   └── index.json
│   ├── stories     // storybook 目录
│   │   ├── Button.stories.tsx
│   └── typings
│       └── index.d.ts
\`\`\`

**4、出码模块**  
/packages/codegen目录下运行yarn link    
* **codegen --file [schema json文件路径] --output [输出文件路径]**:  根据schema文件输出源码项目，入参为schema文件 & 输出文件路径，必选  

*源码项目目录结构*
\`\`\`js
src
├── hoc
│   └── withNavigate.tsx  // 实现$api.navigate，模板文件，勿动
├── index.tsx // 主入口
├── pages
│   ├── index.ts  // 路由文件
│   └── pageId1
│       └── index.tsx   // 页面文件
└── store
    └── index.ts  // 数据中心
\`\`\`
`

function Doc() {
  return (
    <>
      <Page markdown={`## 相关基建`} />
      <Page markdown={`**1、功能概览**  `} />
      <img src={basicPng} style={{ width: 500 }} />
      <Page markdown={markdown} />
    </>
  )
}

export default Doc