import React from 'react'
import Page from '../page'
import funcModelSite from '../../resources/func_model_site.png'
import funcModel from '../../resources/func_model.png'
import designVideo from '../../resources/design.mov'
import logicVideo from '../../resources/logic.mov'

function Doc() {

  return (
    <>
      <Page markdown={`
功能概览
---
[live demo](https://wendyma111.github.io/lowcode-jy/)
`} />
      <img src={funcModel} style={{ width: '100%' }} />
      <img src={funcModelSite} style={{ width: '100%' }} />
      <Page markdown={`## 画布设计`} />
      <video width="100%" controls="controls">
        <source src={designVideo} />
      </video>
      <Page markdown={`## 数据逻辑`} />
      <video ref={(ref) => { if (ref) { ref.playbackRate = 1.5 } }} width="100%" controls="controls">
        <source src={logicVideo} />
      </video>
    </>
  )
}

export default Doc