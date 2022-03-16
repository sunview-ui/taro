import { View } from '@tarojs/components'
import { h, ref } from '@vue/runtime-core'

import { SList, SListItem, SHeading, SSearchBar } from '@/components'
import './index.scss'

export default {
	setup() {
		return {
			value: ref("")
		}
	},
	render() {
		return h(View, { class: ['page', 'page-search-bar'] }, [
			h(SList, {}, {
				default: () => h(SListItem, { inline: false }, {
					title: () => h(SHeading, { level: 4 }, { default: () => "搜索条" }),
					content: () => "Search Bar"
				})
			}),
			h(SSearchBar, { value: this.value, "onUpdate:value": e => this.value = e })
		])
	}
}