import React from 'react'
import { Table } from 'antd';
import Page from '../page'
import designPng from '../../resources/design.png'
import designSitePng from '../../resources/design_site.png'
import createDoc from '../../resources/create_doc.png'
import createDocName from '../../resources/create_doc_name.png'
import copyPage from '../../resources/copy_page.png'
import deletePage from '../../resources/delete_page.png'
import guideline from '../../resources/design_guideline.png'
import contextmenu from '../../resources/design_contextmenu.png'
import preview from '../../resources/preview.png'
import checkSchema from '../../resources/check_schema.png'
import customStyle from '../../resources/custom_style.png'

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
    function: '页面管理',
    desc: '创建新页面，删除原有页面，复制页面id（主要用于使用$api.navigate(${页面id})进行页面跳转时）',
    img: (<>
      <img src={createDoc} style={{ width: '100%' }} />
      <img src={createDocName} style={{ width: '100%' }} />
      <img src={copyPage} style={{ width: '100%' }} />
      <img src={deletePage} style={{ width: '100%' }} />
    </>)
  },
  {
    key: 2,
    function: '组件栏',
    desc: '展示全量组件，支持拖拽',
    img: '暂无'
  },
  {
    key: 3,
    function: '画布',
    desc: '支持拖拽组件，选中节点后展示辅助框，支持快捷删除、复制组件；右键节点展示菜单：删除、复制、粘贴，仅容器组件支持粘贴',
    img: (<>
      <img src={guideline} style={{ width: '100%' }} />
      <img src={contextmenu} style={{ width: '100%' }} />
    </>)
  },
  {
    key: 4,
    function: '辅助栏',
    desc: '支持撤销、重做、查看schema、schema复制、预览，点击预览按钮进入预览页面，预览页面展示全局可拖拽返回按钮，点击可返回到编辑器',
    img: (
      <>
        <img src={checkSchema} style={{ width: '100%' }} />
        <img src={preview} style={{ width: '100%' }} />
      </>
    )
  },
  {
    key: 5,
    function: '设置器',
    desc: '样式设置器：支持设置布局、定位、文字、背景、边框、同时支持通过coding方式自定义样式，属性样式：属性样式即物料协议中的settings，取决于组件描述json中的settings字段',
    img: (<img src={customStyle} style={{ width: '100%' }} />)
  }
]

function Doc() {
  return (
    <>
      <Page markdown={`## 画布设计`} />
      <Page markdown={`**1、功能概览**  `} />
      <img src={designPng} style={{ width: 500 }} />
      <img src={designSitePng} style={{ width: '100%' }} />
      <Page markdown={`**2、功能详解**  `} />
      <Table bordered columns={columns} dataSource={data} />
    </>
  )
}

export default Doc