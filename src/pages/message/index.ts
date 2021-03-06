import { View } from '@tarojs/components'
import { h, ref } from '@vue/runtime-core'

import { SList, SListItem, SHeading, SPanel, SButton, SMessage } from '@/components';
import './index.scss'

export default {
	setup() {
		let opened = ref(false);
		let type = ref("default");
		let types = ["default", "primary", "success", "warning", "danger"]

		let openMessage = (_type) => {
			opened.value = true;
			type.value = _type;
		}

		return {
			opened,
			type,
			types,
			openMessage
		}
	},
	render() {
		return h(View, { class: ['page', 'page-message'] }, [
			h(SList, {}, {
				default: () => h(SListItem, { inline: false }, {
					title: () => h(SHeading, { level: 4 }, { default: () => "消息" }),
					content: () => "Message"
				})
			}),
			h(SPanel, { noPadding: true }, {
				default: () => this.types.map((type, typeKey) => h(SButton, { type, full: true, onTap: () => this.openMessage(type) }, { default: () => "弹出消息提示" }))
			}),

			h(SMessage, {
				value: this.opened, 'onUpdate:value': e => this.opened = e, message: "我是一个提示内容", type: this.type
			})
		])
	}
}