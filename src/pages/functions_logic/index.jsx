import React from 'react'
import { Table } from 'antd'
import Page from '../page'
import logicPng from '../../resources/logic.png'
import logicSite from '../../resources/logic_site.png'
import variable from '../../resources/variable.png'
import bindVariable from '../../resources/bind_variable.png'
import bindExpression from '../../resources/bind_expression.png'
import afterBind from '../../resources/after_bind.png'
import lifecycle from '../../resources/lifecycle.png'
import handler from '../../resources/handler.png'
import event from '../../resources/event.png'
import customStyle from '../../resources/custom_style.png'

const columns_concept = [
  {
    title: '概念',
    dataIndex: 'concept',
    width: '10%',
  },
  {
    title: '说明',
    dataIndex: 'desc',
    width: '90%',
  }
]

const data_concept = [
  {
    concept: '$api',
    desc: '全局方法，内置方法：$api.dispatch(变量路径, 目标值) - 改变数据源、$api.navigate(页面id) - 页面跳转；自定义方法：$api.custom.[方法标识]'
  },
  {
    concept: '$state',
    desc: '全局数据，可通过$state.[作用域].[变量标识]访问变量，也可直接复制变量路径'
  }
]

const columns = [
  {
    title: '功能',
    dataIndex: 'function',
    width: '10%',
  },
  {
    title: '说明',
    dataIndex: 'desc',
    width: '60%',
  },
  {
    title: '示例图',
    dataIndex: 'img',
    width: '30%',
  }
]

const data = [
  {
    key: 1,
    function: '变量中心',
    desc: '低代码应用的数据源，用于控制组件联动、样式联动等，变量更新后，绑定了相关变量的组件会重新渲染，变量分为全局作用域和页面作用域，注意组件只能绑定全局和其所属页面的变量，绑定其他页面的变量会无法正常显示',
    img: <img src={variable} style={{ width: '100%' }} /> 
  },
  {
    key: 2,
    function: '变量绑定',
    desc: '组件的属性支持绑定变量，可通过 变量/表达式 方式进行变量绑定，表达式即 在ide中通过显式指定变量路径的方式进行coding，支持在变量之上进行任意转化，见示意图',
    img: (
      <>
        <img src={bindVariable} style={{ width: '100%' }} />
        <img src={bindExpression} style={{ width: '100%' }} />
        <img src={afterBind} style={{ width: '100%' }} />
      </>
    )
  },
  {
    key: 3,
    function: '生命周期',
    desc: '支持自定义coding页面的componentDidMount，componentDidUpdate、componentWillUnMount，注意：请勿修改模板代码',
    img: <img src={lifecycle} style={{ width: '100%' }} />
  },
  {
    key: 4,
    function: '自定义事件',
    desc: '通过coding方式自定义全局方法，可在低代码模块 / 添加事件弹框中创建事件，详见示意图，自定义事件可用于为组件事件绑定，可以在其他低代码模块中复用，使用$api.custom.[方法标识]调用即可',
    img: (
      <>
        <img src={handler} style={{ width: '100%' }} />
        <img src={event} style={{ width: '100%' }} />
      </>
    )
  },
  {
    key: 5,
    function: '自定义样式',
    desc: '通过coding模式创建样式，支持使用$state实现样式联动',
    img: <img src={customStyle} style={{ width: '100%' }} />
  },
]

function Doc() {
  return (
    <>
      <Page markdown={`## 数据逻辑`} />
      <Page markdown={`**1、功能概览**  `} />
      <img src={logicPng} style={{ width: 500 }} />
      <img src={logicSite} style={{ width: '100%' }}  />
      <Page markdown={`**2、概念**  `} />
      <Page markdown={`**支持在低代码模块进行调用以访问数据源 / 方法**  `} />
      <Table columns={columns_concept} bordered dataSource={data_concept} />
      <Page markdown={`**3、功能详解**  `} />
      <Table columns={columns} bordered dataSource={data} />
    </>
  )
}

export default Doc