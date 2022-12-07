import React from 'react'
import Page from '../page'
import designModel from '../../resources/design_model.png'

const markdown1 = `
编排模型
---
**1、概述**  
编排即对编辑器中的物料进行布局、样式 / 属性设置等等操作，从而形成schema描述文件，故需将对项目、页面、节点的访问与操作抽象成模型，方便统一管理，一定程度上与dom结构相似，故本项目仿照dom体系创建低代码编排体系
`

const markdown2 = `
**2、项目模型**  
* 页面相关
    - documents：全量页面
    - currentDocument：当前激活页面
    - getDocument(pageId)：根据pageId获取页面
    - removeDocument(pageId)：删除页面
    - addNewDocument(pageName)：添加页面
    - changeCurrentDocument：切换当前激活页面

* schema
    - getter schema：整个应用的schema描述

* 自定义方法
    - methods

* 全局变量
    - data：全局作用域下的变量
    - setData：修改变量
    - deleteData：删除变量

* 设计器
    - designer：设计器引用，其内包含拖拽、逻辑模块
`

const markdown3 = `
**3、文档模型**  
* 节点相关
    - rootNode：根节点，根节点为虚拟节点，无对应的物料组件
    - nodes：页面下所有节点
    - currentEditNode：当前编辑的节点
    - setCurrentEditNode(nodeId)：设置当前编辑节点
    - createNode：创建节点
    - getNodeById(nodeId)：根据节点id获取节点

* 快照
    - snapShotData：快照schema数组
    - snapShotIndex：快照索引
    - recordSnapShot()：记录快照

* 页面域变量
    - data：页面域变量
    - setData：修改变量
    - deleteData：删除变量

* schema
    - getter schema：当前页面的schema描述
  
* 生命周期
    - lifecycle：页面生命周期
`

const markdown4 = `
**4、节点模型**  
* 节点关系
    - parent：父节点
    - children：子节点
    - preSibling：pre兄弟节点
    - nextSibling：next兄弟节点
    - lastChild：最后一个子节点
    - firstChild：第一个子节点
    - descendant：后代节点

* 节点操作
    - appendChild：在父节点最后插入节点
    - insertBefore：在目标节点之前插入节点
    - insertAfter：在目标节点之后插入节点
    - removeChild：移除子节点
    - onChildrenChange：监听子组件修改

* props
    - getProps()：获取props
    - setProps()：修改props
    - getPropValue(prop)：获取指定prop
    - setPropValue(prop)：修改指定prop
    - onPropChange：监听prop修改

* 物料相关
    - getComponentMeta()：获取对应物料组件描述
`


function Doc() {
  return (
    <>
      <Page markdown={markdown1} />
      <img style={{ width: 800 }} src={designModel} />
      <Page markdown={markdown2} />
      <Page markdown={markdown3} />
      <Page markdown={markdown4} />
    </>
  )
}

export default Doc