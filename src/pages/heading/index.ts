import { View } from '@tarojs/components'
import { h } from '@vue/runtime-core'

import { SList, SListItem, SHeading } from '@/components'
import './index.scss'

export default {
	setup() {
		return {
			levels :[1, 2, 3, 4, 5, 6, 7, 8, 9],
			types :["default", "primary", "success", "warning", "danger"],
			lineTypes : ["default", "primary", "success", "warning", "danger"],
			lines :[true, false]
		}
	},
	render() {

		return h(View, { class: ['page', 'page-heading'] }, {
			default: () => [
				h(SList, {}, {
					default: () => h(SListItem, { inline: false }, {
						title: () => h(SHeading, { level: 4 }, { default: () => "标题" }),
						content: () => "Heading"
					})
				}),
				h(SList, { noPadding: true, gutterLine: false }, {
					default: () => this.lines.map((line, lineKey) => {
						return this.types.map((type, typeKey) => {
							return this.lineTypes.map((lineType, lineTypeKey) => {
								return this.levels.map((level, levelKey) => {
									return h(SListItem, {}, {
										content: () => h(SHeading, { level, type, line, lineType }, { default: () => "我是一个标题" })
									})
								})
							})
						})
					})
				})

			]
		})
	}
}