import React from 'react'
import MaterialAgreement from './material_agreement'
import BuildAgreement from './build_agreement'
import FunctionsOverall from './functions_overall'
import FunctionsDesign from './functions_design'
import FunctionsLogic from './functions_logic'
import FunctionsBasic from './functions_basic'
import TechnologyDesign from './technology_design'
import TechnologyRender from './technology_render'
import TechnologyDataSource from './technology_datasource'
import TechnologyMaterial from './technology_material'
import TechnologyCodegen from './technology_codegen'
import TechnologyOverall from './technology_overall'

const category = new Map()

const agreement = new Map()
agreement.set('物料协议', {
  key: 'material_agreement',
  content: <MaterialAgreement />
})
agreement.set('搭建协议', {
  key: 'build_agreement',
  content: <BuildAgreement />
})

const functions = new Map()
functions.set('概览', {
  key: 'functions_overall',
  content: <FunctionsOverall />
})
functions.set('画布设计', {
  key: 'functions_design',
  content: <FunctionsDesign />
})
functions.set('数据逻辑', {
  key: 'functions_logic',
  content: <FunctionsLogic />
})
functions.set('相关基建', {
  key: 'functions_basic',
  content: <FunctionsBasic />
})

const technology = new Map()
technology.set('概览', {
  key: 'technology_overall',
  content: <TechnologyOverall />
})
technology.set('入料', {
  key: 'technology_material',
  content: <TechnologyMaterial />
})
technology.set('编排', {
  key: 'technology_design',
  content: <TechnologyDesign />
})
technology.set('渲染', {
  key: 'technology_render',
  content: <TechnologyRender />
})
technology.set('数据源', {
  key: 'technology_datasource',
  content: <TechnologyDataSource /> 
})
technology.set('出码', {
  key: 'technology_codegen',
  content: <TechnologyCodegen />
})


category.set('协议', {
  key: 'agreement',
  content: agreement
})
category.set('功能', {
  key: 'functions',
  content: functions
})
category.set('技术', {
  key: 'technology',
  content: technology
})

export default category