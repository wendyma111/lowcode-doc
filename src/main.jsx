import React, { isValidElement, useState } from 'react'
import { Layout, Menu } from 'antd'
import category from './pages'
import styles from './main.module.css'

const { Content, Sider } = Layout;
const keyElementMap = {}

function getItem(map) {
  const items = []

  for (const [label, { key, content }] of map) {
    if (isValidElement(content)) {
      keyElementMap[key] = content
    }
    items.push({
      label,
      key,
      children: isValidElement(content) ? null : getItem(content)
    })
  }

  return items
}

const items = getItem(category)

function Main() {
  const [selectedKey, setSelectedKey] = useState('functions_overall')

  const handleClick = (e) => {
    setSelectedKey(e.key)
  }

  return <Layout style={{ minHeight: '100vh' }}>
    <Sider style={{ background: '#fff' }}>
      <div
        className={styles.title}
      >
        lowcode-jy
      </div>
      <Menu defaultSelectedKeys="functions_overall" defaultOpenKeys={['agreement', 'functions', 'technology']} mode="inline" items={items} onClick={handleClick} />
    </Sider>
    <Layout>
      <Content style={{ margin: 16, background: '#fff' }}>
        <div className={styles.content}>
          {keyElementMap[selectedKey]}
        </div>
      </Content>
    </Layout>
  </Layout>
}

console.log('isValidElement---', isValidElement(<Main />))

export default Main