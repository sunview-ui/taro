
import { View } from '@tarojs/components'
import { h, ref } from '@vue/runtime-core'

import { SList, SListItem, SHeading, SQRCode, SForm, SInput, SPanel } from '@/components'
import './index.scss'

export default {
	setup() {
		return {
			content: ref("sunview-ui")
		}
	},
	render() {
		return h(View, { class: ['page', 'page-qrcode'] }, [
			h(SList, {}, {
				default: () => h(SListItem, { inline: false }, {
					title: () => h(SHeading, { level: 4 }, { default: () => "二维码" }),
					content: () => "QRCode"
				})
			}),
			h(SPanel, {}, {
				default: () => h(View, { class: "qrcode-container" }, h(SQRCode, { content: this.content, size: 300 }))
			}),
			h(SPanel, { title: "输入文字以改变二维码内容" }, {
				default: () => h(SForm, {}, {
					default: () => h(SInput, { contentAlign: 'center', value: this.content, "onUpdate:value": e => this.content = e },)
				})
			})
		])
	}
}