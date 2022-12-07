import React from 'react'
import Page from '../page'

const markdown1 = `
数据源
---
**1、概述**  
在编辑器中使用低代码，由于不可控制用户的输入，故很容易导致页面崩溃，如：
操作window上的方法影响到主界面、修改原型链等，为避免以上影响，需要隔离低代码的执行环境。

**2、低代码-设计态**  
1. 创建iframe，构造数据源挂载到iframe.contentWindow.ctx[id]上，
id为随机数，用于隔离不同的低代码执行环境，如页面中不能访问其他页面域的变量，
故要为每个页面都创建一个执行上下文
2. 使用postMessage将代码字符串传递给指定低代码执行环境，iframe中通过with + new Function创建执行上下文，将数据源写入上下文中，
并监听上下文的改变，重新执行代码字符串  

**3、低代码-预览态**  
1. 预览态在iframe中渲染，故，无需创建iframe进行低代码执行，只需通过with + new Function创建执行上下文即可  

**4、在线ide**  
1. 使用monaco创建在线ide
2. monacoRef.current.languages.typescript.typescriptDefaults.addExtraLib 加载$state & $api的ts定义
3. 监听onChange事件，实时递归遍历ast语法树，检查是否符合自定义的语法规则，主要用在检测用户是否修改了模板代码上，如果检测到有误，返回错误信息并提示
`

function Doc() {
  return (
    <>
      <Page markdown={markdown1} />
    </>
  )
} 

export default Doc