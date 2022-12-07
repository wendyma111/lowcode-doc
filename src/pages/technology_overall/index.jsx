import React from 'react'
import Page from '../page'
import functionOverall from '../../resources/function_overall.png'

const markdown = `
技术概览
---
`

function Doc() {
  return (
    <>
      <Page markdown={markdown} />
      <img src={functionOverall} style={{ width: '100%' }} />
    </>
  )
}

export default Doc