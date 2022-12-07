import React from 'react'
import Page from '../page'

const markdown = `
入料模块
---
**1、概述**  
入料模块提供 创建 -> 调试 -> 打包 -> 发布 一站式工具进行辅助开发  

**2、创建**  
\`\`\`js
lc-cli create <materialName>
\`\`\`
1. 检查path.resolve(process.cwd(), materialName)文件是否存在
2. 复制组件模板文件
3. 重置config/index.json组件配置文件，用materialName替换原componentName，并生成npm包名，替换原npmInfo.npm
4. 重置package.json文件，替换name  

*物料组件目录结构（请勿修改模板代码目录结构）*
\`\`\`js
├── src
│   ├── component   // 组件源码目录
│   │   ├── index.module.css
│   │   └── index.tsx
│   ├── config      // 组件配置文件目录 
│   │   └── index.json
│   ├── stories     // storybook 目录
│   │   ├── Button.stories.tsx
│   └── typings
│       └── index.d.ts
\`\`\`

**3、调试**  
\`\`\`js
lc-cli debug [rootPath]
\`\`\`
1. 判断文件路径是否有效
2. 复制组件模板文件
3. 启动webpack打包，devServer监听本地6001端口
4. 打开低代码平台 \${低代码平台网址}?debugComponentId=\${componentName}
5. 平台端监测到存在location.search为debugComponentId，将原cdn资源链接替换成localhost:6001下的资源

**4、打包**  
\`\`\`js
lc-cli build [rootPath]
\`\`\`
1. 判断文件路径是否有效
2. 清理原dist目录
3. webpack打包
4. 打包后文件生成后，重置package.json，将main字段替换成打包后的文件名称

**5、发布**  
\`\`\`js
lc-cli publish [rootPath]
\`\`\`
1. 判断文件路径是否有效
2. 询问发布版本
3. 打包
4. 根据用户选择的版本重置config/index.json下的npmInfo.version 与 package.json的version字段
`

function Doc() {
  return <Page markdown={markdown} />
}

export default Doc