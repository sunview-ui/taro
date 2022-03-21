import { View } from '@tarojs/components'
import { h } from '@vue/runtime-core'

import { SList, SListItem, SHeading, Spanel } from '@/components'
import './index.scss'

export default {
	setup() {
		return {

		}
	},
	render() {
		return () => h(View, { class: ['page', 'page-swiper'] }, [
			h(SList, {}, {
				default: () => h(SListItem, { inline: false }, {
					title: () => h(SHeading, { level: 4 }, { default: () => "滑块视图" }),
					content: () => "Swiper"
				})
			}),
			h(Spanel, {
				noPadding: true
			}, {
				default:()=> h(SSwiper, {}, {
					default: ()=> [
						
					]
				})
			})
		])
	}
}