import Page from '../page'

const markdown = `
搭建协议
---
**1、协议目标**  
  搭建协议用于描述低代码平台的输出，出码模块利用平台产出的schema json生成源码项目，其内包含如下内容：全量组件的物料描述、数据源、生命周期、自定义事件、组件树、组件的配置等

**2、协议结构**  
顶层结构  
* **name** { string } 应用名称
* **version** { string } 应用版本 
* **data**  { Record<string, *IData*> } 全局变量
* **componentMap** { Record<string, [物料协议]> } 全量组件的物料描述，结构相见 [物料协议](此处为链接)
* **pagesMap** { Record<string, *IPage*> } 页面描述
* **methods** { Record<string, *IMethod*> } 自定义事件描述

  
*IData*
\`\`\`
type PageId = string

interface IData {
  /**
   * 变量key，作用域内唯一
   */
  key: string;
  /**
   * 变量类型
   */
  type: 'string' | 'boolean' | 'object' | 'array' | 'number';
  /**
   * 变量作用域
   */
  scope: 'global' | PageId;
  /**
   * 变量描述
   */
  desc: string;
  /**
   * 变量初始值
   */
  defaultValue: string | boolean | Record<string, any> | Array<any> | undefined | number;
  /**
   * 变量路径 例：$state.global.xxx
   */
  path: string;
}
\`\`\`

*IPage*
\`\`\`
interface IPage {
  /**
   * 页面名称
   */
  name: string;
  /**
   * 页面依赖组件树
   */
  componentTree: Record<string, INode>;
  /**
   * 页面作用域下变量
   */
  data: Record<string, IData>;
  /**
   * 生命周期
   */
  lifecycle: string;
}

interface INode {
  /**
   * 组件标识
   */
  componentName?: string;
  /**
   * 父节点id
   */
  parentId: string | null;
  /**
   * 组件配置
   */
  props?: Record<string, any>;
  /**
   * 子组件id数组
   */
  children: Array<string>;
}
\`\`\`

*IMethod*
\`\`\`
interface IMethod {
  /**
   * 自定义方法标识
   */
  key: string;
  /**
   * 自定义方法code
   */
  value: string;
  /**
   * 自定义方法路径
   */
  path: string;
}
\`\`\`
  
**3、示例**
\`\`\`
{
    "name": "未命名应用",
    "version": "0.0.0",
	"componentsMap": {
		"Button": {
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
		},
		"Container": {
			"componentName": "Container",
			"label": "容器",
			"screenShot": "",
			"isContainer": true,
			"category": "元素",
			"priority": 2,
			"npmInfo": {
				"npm": "@lowcode-material/container",
				"version": "0.0.1"
			},
			"settings": {
				"style": {
					"settingName": "style",
					"value": {
						"width": 200,
						"height": 100
					}
				}
			}
		},
		"Text": {
			"componentName": "Text",
			"label": "文本",
			"screenShot": "",
			"category": "元素",
			"priority": 2,
			"npmInfo": {
				"npm": "@lowcode-material/text",
				"version": "0.0.2"
			},
			"settings": {
				"text": {
					"settingName": "text",
					"label": "文本",
					"type": "string",
					"value": "文本"
				},
				"style": {
					"settingName": "style",
					"value": {
						"display": "inline-block"
					}
				}
			}
		}
	},
	"data": {},
	"methods": {},
	"pagesMap": {
		"pageId1": {
			"name": "页面一",
			"data": {
				"v": {
					"key": "v",
					"desc": "string类型变量",
					"defaultValue": "vvv",
					"type": "string",
					"scope": "pageId1",
					"path": "$state.pageId1.v"
				}
			},
			"componentTree": {
				"root": {
					"parentId": null,
					"children": [
						"c9fc8664"
					],
					"props": {}
				},
				"c9fc8664": {
					"parentId": "root",
					"children": [],
					"componentName": "Text",
					"props": {
						"text": {
							"type": "JSExpression",
							"value": "$state.pageId1.v"
						},
						"style": {
							"display": "inline-block"
						}
					}
				}
			},
			"lifecycle": "export default {\n  componentDidMount(){},\n\n  componentDidUpdate(){},\n\n  componentWillUnmount(){}\n}\n"
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