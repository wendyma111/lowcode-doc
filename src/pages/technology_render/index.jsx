import React from 'react'
import Page from '../page'
import renderer from '../../resources/renderer.png'

const markdown1 = `
渲染模型
---
**1、概述**  
渲染模块分为 预览态渲染 & 设计态渲染（即画布），逻辑基本一致，从编排模型获取到文档节点后递归渲染，
不同的点在于，设计态渲染需包裹Simulator，即画布操作模块，包括选中框、右键菜单、拖拽逻辑、悬停探测等；
预览态需基于编排模块中的数据源生成预览环境中的隔离数据源 并且 预览态渲染在iframe中，避免对主环境造成影响
`

const markdown2 = `
**2、渲染**  
1. **设计态：**  
设计态的渲染要点减少不必要的渲染，达到性能最优，平台操作时无卡顿，具体做了以下处理，经测试，组件props修改仅影响到自身，children修改仅影响到被修改的子组件和其父组件
    - 每个节点仅接受节点模型node作为props，并使用PureComponent，当前节点不变的情况下，不重新渲染；将可变的props & children置为内部的state，
    使用EventEmitter监听props & children的修改，达到点对点的触发，不影响其他组件
    - 使用renderProps模式替代hoc处理公共逻辑，hoc会导致每次执行生成一个新组件，PureComponent无效
    - 将交互逻辑提升到Simulator中，使用createPortal在结构外部修改dom，不为每个节点都包裹交互逻辑，减少计算，保持渲染逻辑纯净
2. **预览态：**  
预览态的渲染要点在于预览态会有对生成周期、事件等进行执行，为避免未知报错影响到主流程，故将其渲染在iframe中，保证主环境稳定
    - 根据编排模块中的数据源 & 自定义事件，生成可观察的预览环境数据源
    - 遍历documents生成页面组件，为每个页面组件注入当前页面域 & 全局域的数据源，确保数据源修改后触发页面重新渲染
    - 将预览态页面渲染到iframe中，与主环境进行隔离
`

const markdown3 = `
**3、交互**  
1. **悬停探测：** 
    - 组件挂载时为组件实例添加Symbol.for('__nodeId')属性，属性值为节点id
    - 利用事件委托，为整个画布添加hover事件，获取e.target[\`__reactFiber$\${随机数}\`]获取其对应的fiberNode
    - fiber tree递归向上找到存在Symbol.for('__nodeId')的fiber节点，则其指定的节点即为当前探测的节点
2. **选中框 & 右键菜单：**  
    - 切换当前选中节点逻辑与悬停探测基本一致，利用事件委托为整个画布添加click事件，根据e.target递归向上找到节点
    - 找到节点后，获取到该节点对应的dom，利用createPortal在dom结构外修改dom，插入选中框组件
3. **拖拽：** 
    - 使用html5 drag api进行拖转，setDragImage渲染拖拽中的元素
    - 为每个节点前后分别插入两个节点mock-pre-node & mock-next-node
    - 同悬停探测，根据drag的事件对象向上查找到拖拽位置对应的元素targetNode
    - 判断鼠标移动方向是接近mock-pre-node还是接近mock-next-node，渲染辅助占位元素
    - 根据targetNode和鼠标移动方向调用insertAfter & insertAfter
`

function Doc() {
  return <>
  <Page markdown={markdown1} />
  <img src={renderer} style={{ width: 700 }} />
  <Page markdown={markdown2} />
  <Page markdown={markdown3} />
  </>
}

export default Doc