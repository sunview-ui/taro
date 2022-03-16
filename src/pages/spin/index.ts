import { View } from '@tarojs/components'
import { h } from '@vue/runtime-core'

import { SList, SListItem, SHeading, SPanel, SSpin } from '@/components'
import './index.scss'
import { render } from '@tarojs/taro'

export default {
	setup() {
		return {

		}
	},
	render() {
		return h(View, { class: ['page', 'page-spin'] }, [
			h(SList, {}, {
				default: () => h(SListItem, { inline: false }, {
					title: () => h(SHeading, { level: 4 }, { default: () => "加载指示器" }),
					content: () => "Spin"
				})
			}),
			h(SPanel, {}, {
				default: () => h(SSpin)
			})
		])
	}
}