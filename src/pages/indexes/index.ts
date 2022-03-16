import { View } from '@tarojs/components'
import { h } from '@vue/runtime-core'

import { SList, SListItem, SHeading, SIndexes } from '@/components'
import './index.scss'

import LIST from './list'

export default {
	setup() {
		let handleSelect = (e) => {
			console.log("HANDLE SELECT, SELETED", e);
		}

		let itemRender = (item, index, dataKey, dataValue) => {
			return item[dataKey] ? h(View, {
				style: {
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					lineHeight: "1.5em",
				},
				onTap: e => handleSelect({ e, value: item })
			}, [
				h(View, {
					class: "s-indexes-list-item"
				}, item[dataValue]),
				// h(View, {
				// 	style: {
				// 		fontSize: Taro.pxTransform(24),
				// 		color: "#c0c4cc"
				// 	}
				// }, item[dataValue])
			]) : "";
		}

		return {
			list: LIST,
			itemRender,
			handleSelect
		}
	},
	render() {
		return h(View, { class: ['page', 'page-indexes'] }, [
			h(SIndexes, {
				list: this.list,
				dataKey: "id",
				dataValue: "workName",
				showSearch: true,
				showToast: true,
				// vibrate: true,
				itemRender: this.itemRender,
				onSelect: this.handleSelect,
			})
		])
	}
}