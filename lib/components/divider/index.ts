import { View } from "@tarojs/components"
import { h, mergeProps } from "@vue/runtime-core"
import './index.scss'

export default {
	props: {
		type: {
			type: String,
			default: "default",
			validator: (val) =>
				[
					"default",
					"primary",
					"success",
					"warning",
					"danger"
				].includes(val),
		},
		size: {
			type: String,
			default: "default",
			validator: (val) => [
				"default",
				"mini",
				"small",
				"large"
			].includes(val),
		},
	},
	setup(props, { attrs, slots }) {
		return () => h(View, mergeProps({
			class: ['s-divider', `s-divider-type-${props.type}`, `s-divider-size-${props.size}`]
		}, attrs), slots.default?.())
	}
}