import { SList, SListItem, SHeading, SDot } from '@/components'
import { View } from '@tarojs/components'
import { h } from '@vue/runtime-core'
import './index.scss'
export default {
	setup() {
		return {
			types: ['default', 'primary', 'success', 'warning', 'danger'],
			sizes: ['small', 'default', 'large']
		}
	},
	render() {
		return [
			h(View, { class: ['page', 'page-dot'] }, [
				h(SList, {}, {
					default: () => h(SListItem, { inline: false }, {
						title: () => h(SHeading, { level: 4 }, { default: () => "提示点" }),
						content: () => "Dot"
					})
				}),
				h(SList, {}, {
					default: () => [
						this.types.map((type, typeKey) => {
							return this.sizes.map((size, sizeKey) => {
								return h(SListItem, { contentAlign: 'right' }, {
									title: () => `${type}-${size}`,
									content: () => h(SDot, { type, size })
								});
							})
						}),
						h(SListItem, { contentAlign: "right" }, {
							title: () => "custom-color",
							content: () => h(SDot, { type: 'primary', size: 'large', color: "#13c2c2" })
						})
					]
				}),

			]),

		]
	}
}