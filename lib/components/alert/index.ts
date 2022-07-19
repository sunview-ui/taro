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
		align: {
			type: String,
			default: "left",
			validator: (val) => [
				"left",
				"center",
				"right"
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
		inline: {
			type: Boolean,
			default: false,
		}
	},
	setup(props, { attrs, slots }) {
		return () => h(View, mergeProps({
			class: ['s-alert', `s-alert-${props.type}`, `s-alert-${props.align}`, `s-alert-${props.size}`, props.inline ? 's-alert-inline': '']
		}, attrs), slots.default?.())
	}
}