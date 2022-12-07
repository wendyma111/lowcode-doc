import Page from '../page'

const markdown = `
物料协议
---
**1、协议目标**  
  物料协议用于描述物料组件在平台上以及出码模块中的表现，其包含以下信息：组件标识、组件配置、npm包信息、组件在组件栏中的表现形式

**2、协议结构**  
顶层结构  
* **componentName** { string } 组件标识
* **isContainer** { boolean } 是否为容器
* **label** { string } 组件在组件栏中的展示名称  
* **npmInfo**  { *INpmInfo* } npm包信息
* **settings**  { Record<string, *ISettings*> } 组件支持的配置项
* **category**  { string } 组件所属分类
* screenShot { string } 组件缩略图，非必需
* priority  { string } 组件在其所属分类下的排序，非必需  


*INpmInfo*
\`\`\`js
interface INpmInfo {
  /**
   *  npm包名
   */
  npm: string;
  /**
   *  npm包版本
   */
  version: string;
}
\`\`\`
  
*ISettings*
\`\`\`
interface INpmInfo {
  /**
   *  配置项标识
   */
  settingName: string;
  /**
   *  配置项标题
   */
  label: string;
  /**
   *  配置项类型，为'event'时表示为事件配置项
   */
  type: string;
  /**
   *  配置项默认值
   */
  value: string;
}
\`\`\`


**3、示例**
\`\`\`
{
  "componentName": "Button",
  "label": "按钮",
  "screenShot": "",
  "category": "元素",
  "priority": 2,
  "npmInfo": {
    "npm": "@lowcode-material/button",
	"version": "0.0.1"
  },
  "settings": {
	"text": {
	  "settingName": "text",
		"type": "string",
		"label": "按钮文本",
		"value": "按钮"
	  },
	  "onClick": {
		"settingName": "onClick",
		"type": "event",
		"label": "点击"
	  },
	  "style": {
		"settingName": "style",
		"value": {
		  "display": "inline-block"
		}
	  }
  }
}
\`\`\`
`

function Doc() {
  return (
    <Page markdown={markdown} />
  )
}

export default Doc