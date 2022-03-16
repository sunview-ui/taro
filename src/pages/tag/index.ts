import { View } from '@tarojs/components'
import { h } from '@vue/runtime-core'

import { SList, SListItem, SHeading, STag, SPanel } from '@/components'
import './index.scss'

export default {
	setup() {
		return {
			types: ['default', 'primary', 'success', 'warning', 'danger'],
			sizes: ['small', 'default', 'mini'],
			plains: [true, false],
			rounds: [true, false],
			circles: [true, false]
		}
	},
	render() {
		return h(View, { class: ['page', 'page-tag'] }, [
			h(SList, {}, {
				default: () => h(SListItem, { inline: false }, {
					title: () => h(SHeading, { level: 4 }, { default: () => "标签" }),
					content: () => "Tag"
				})
			}),
			h(SList, {}, {
				default: () => this.types.map(
					type => this.sizes.map(
						size => this.plains.map(
							plain => this.circles.map(
								circle => this.rounds.map(
									round => h(SListItem, {}, {
										content: () => h(STag, { type, size, plain, round, circle, title: "标签" })
									})
								)
							)
						)
					)
				)
			})
		])
	}
}