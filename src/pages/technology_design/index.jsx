import React from 'react'
import Page from '../page'
import designModel from '../../resources/design_model.png'
import projectModel from '../../resources/project_model.png'
import DocumentModel from '../../resources/document_model.png'
import NodeModel from '../../resources/node_model.png'

const markdown1 = `
编排模型
---
**1、概述**  
编排即对编辑器中的物料进行布局、样式 / 属性设置等等操作，从而形成schema描述文件，故需将对项目、页面、节点的访问与操作抽象成模型，方便统一管理，一定程度上与dom结构相似，故本项目仿照dom体系创建低代码编排体系
`

const markdown2 = `
**2、项目模型**  
`

const markdown3 = `
**3、文档模型**  
`

const markdown4 = `
**4、节点模型**  
`


function Doc() {
  return (
    <>
      <Page markdown={markdown1} />
      <img style={{ width: 800 }} src={designModel} />
      <Page markdown={markdown2} />
      <img style={{ width: 400 }} src={projectModel} />
      <Page markdown={markdown3} />
      <img style={{ width: 400 }} src={DocumentModel} />
      <Page markdown={markdown4} />
      <img style={{ width: 400 }} src={NodeModel} />
    </>
  )
}

export default Doc