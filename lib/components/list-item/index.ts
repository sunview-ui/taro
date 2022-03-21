import Taro from '@tarojs/taro'
import { View } from "@tarojs/components"
import { h, inject, mergeProps } from "@vue/runtime-core"
import { SDot, SIcon } from '..'

import './index.scss'

export default {
	props: {
		title: {
			type: [String, Number],
			default: "",
		},
		content: {
			type: [String, Number],
			defualt: ""
		},
		titleWidth: {
			type: String,
			default: ""
		},
		titleAlign: {
			type: String,
			default: ""
		},
		contentAlign: {
			type: String,
			default: ""
		},
		noMargin: {
			type: Boolean,
			default: false
		},
		arrow: {
			type: Boolean,
			default: false
		},
		round: {
			type: Boolean,
			default: false
		},
		circle: {
			type: Boolean,
			default: false
		},
		inline: {
			type: Boolean,
			default: true
		},
		size: {
			type: String,
			default: "default",
			validator: (val) =>
				[
					"default",
					"small",
					"large",
				].includes(val),
		},
		icon: {
			type: String,
			default: "",
		},
		dot: {
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
	},
	setup(props, { attrs, slots }) {

		let titleRender = () => h(View, {
			class: "s-list-item-title", style: {
				width: Taro.pxTransform(props.titleWidth || inject("titleWidth")),
				textAlign: props.titleAlign || inject("titleAlign"),
				display: 'flex',
				justifyContent: { left: 'flex-start', center: 'center', right: 'flex-end' }[props.titleAlign || inject("titleAlign")]

			}
		}, slots.title?.() || props.title);

		let contentRender = () => h(View, {
			class: "s-list-item-content", style: {
				textAlign: props.contentAlign || inject("contentAlign"),
				display: 'flex',
				justifyContent: { left: 'flex-start', center: 'center', right: 'flex-end' }[props.contentAlign || inject("contentAlign")]
			},
		}, slots.content?.() || props.content);

		let dotRender = () => props.dot ? h(View, {
			class: "s-list-item-dot", style: {
				textAlign: props.contentAlign || inject("contentAlign"),
			},
		}, h(SDot, props.dot)) : '';

		return () => h(View, mergeProps({
			class: ["s-list-item",
				`s-list-item-size-${inject("size") || props.size}`,
				props.round || inject("itemRound") ? 's-list-item-round' : '',
				props.circle || inject("itemCircle") ? 's-list-item-circle' : '',
				props.noMargin || inject("itemNoMargin") ? 's-list-item-no-margin' : ''
			],
		}, attrs), [
			h(View, { class: "main" }, [

				slots.icon ? h(View, {
					class: "s-list-item-icon",
				}, slots.icon()) : (
					props.icon ? h(SIcon, {
						class: "s-list-item-icon",
						icon: props.icon,
						size: 12
					}) : ''
				),
				props.inline ? [
					titleRender(), contentRender(), dotRender()
				] : h(View, { class: 's-list-item-main' }, [
					titleRender(), contentRender(), dotRender()
				]),


				slots.extra ? h(View, {
					class: ["s-list-item-extra"],
				}, slots.extra?.()) : '',
				props.arrow ? h(View, {
					class: "s-list-item-arrow"
				}, h(SIcon, { icon: 'right', size: 24 })) : '',
			]),
			slots.description ? h(View, { class: "description" }, slots.description?.()) : ''

		])
	}
}