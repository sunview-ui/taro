import { View } from "@tarojs/components"
import { h, mergeProps } from "@vue/runtime-core"

import './index.scss'

export default {
	props: {
		
	},
	setup(props, { attrs }) {
		return () => h(View, mergeProps({
			class: ["s-dot", `s-dot-type-${props.type}`, `s-dot-size-${props.size}`],
			style: {
				background: props.color
			}
		}, attrs))
	}
}