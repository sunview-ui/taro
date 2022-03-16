import { View } from '@tarojs/components'
import { h } from '@vue/runtime-core'

import { SList, SListItem, SHeading, SButton, SPanel } from '@/components'
import './index.scss'

export default {
	setup() {
		return {
			handleClick:(e) => {
				console.log("Clicked !", e);
			}
		}
	},
	render() {
		return h(View, { class: ['page', 'page-button'] }, [
			h(SList, {}, {
				default: () => h(SListItem, { inline: false }, {
					title: () => h(SHeading, { level: 4 }, { default: () => "按钮" }),
					content: () => "Button"
				})
			}),
			h(SPanel, {}, {
				default: () => [
					h(SButton, { onTap: this.handleClick, type: "default", full: true }, () => "默认长按钮"),
					h(SButton, { onTap: this.handleClick, type: "primary", full: true }, () => "主要长按钮"),
					h(SButton, { onTap: this.handleClick, type: "success", full: true }, () => "成功长按钮"),
					h(SButton, { onTap: this.handleClick, type: "warning", full: true }, () => "警告长按钮"),
					h(SButton, { onTap: this.handleClick, type: "danger", full: true }, () => "危险长按钮"),

					h(SButton, { onTap: this.handleClick, type: "default" }, () => "默认按钮"),
					h(SButton, { onTap: this.handleClick, type: "primary" }, () => "主要按钮"),
					h(SButton, { onTap: this.handleClick, type: "success" }, () => "成功按钮"),
					h(SButton, { onTap: this.handleClick, type: "warning" }, () => "警告按钮"),
					h(SButton, { onTap: this.handleClick, type: "danger" }, () => "危险按钮"),

					h(SButton, { onTap: this.handleClick, type: "default", round: true }, () => "默认圆角按钮"),
					h(SButton, { onTap: this.handleClick, type: "primary", round: true }, () => "主要圆角按钮"),
					h(SButton, { onTap: this.handleClick, type: "success", round: true }, () => "成功圆角按钮"),
					h(SButton, { onTap: this.handleClick, type: "warning", round: true }, () => "警告圆角按钮"),
					h(SButton, { onTap: this.handleClick, type: "danger", round: true }, () => "危险圆角按钮"),

					h(SButton, { onTap: this.handleClick, type: "default", disabled: true }, () => "默认禁用按钮"),
					h(SButton, { onTap: this.handleClick, type: "primary", disabled: true }, () => "主要禁用按钮"),
					h(SButton, { onTap: this.handleClick, type: "success", disabled: true }, () => "成功禁用按钮"),
					h(SButton, { onTap: this.handleClick, type: "warning", disabled: true }, () => "警告禁用按钮"),
					h(SButton, { onTap: this.handleClick, type: "danger", disabled: true }, () => "危险禁用按钮"),

					h(SButton, { onTap: this.handleClick, type: "default", plain: true }, () => "空默认按钮"),
					h(SButton, { onTap: this.handleClick, type: "primary", plain: true }, () => "空主要按钮"),
					h(SButton, { onTap: this.handleClick, type: "success", plain: true }, () => "空成功按钮"),
					h(SButton, { onTap: this.handleClick, type: "warning", plain: true }, () => "空警告按钮"),
					h(SButton, { onTap: this.handleClick, type: "danger", plain: true }, () => "空危险按钮"),


					h(SButton, { onTap: this.handleClick, type: "default", size: "small" }, () => "小默认按钮"),
					h(SButton, { onTap: this.handleClick, type: "primary", size: "small" }, () => "小主要按钮"),
					h(SButton, { onTap: this.handleClick, type: "success", size: "small" }, () => "小成功按钮"),
					h(SButton, { onTap: this.handleClick, type: "warning", size: "small" }, () => "小警告按钮"),
					h(SButton, { onTap: this.handleClick, type: "danger", size: "small" }, () => "小危险按钮"),


					h(SButton, { onTap: this.handleClick, type: "default", size: "large" }, () => "大默认按钮"),
					h(SButton, { onTap: this.handleClick, type: "primary", size: "large" }, () => "大主要按钮"),
					h(SButton, { onTap: this.handleClick, type: "success", size: "large" }, () => "大成功按钮"),
					h(SButton, { onTap: this.handleClick, type: "warning", size: "large" }, () => "大警告按钮"),
					h(SButton, { onTap: this.handleClick, type: "danger", size: "large" }, () => "大危险按钮"),


					h(SButton, { onTap: this.handleClick, type: "default", circle: true }, () => "默认圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "primary", circle: true }, () => "主要圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "success", circle: true }, () => "成功圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "warning", circle: true }, () => "警告圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "danger", circle: true }, () => "危险圆形按钮"),


					h(SButton, { onTap: this.handleClick, type: "default", circle: true, size: "small" }, () => "小默认圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "primary", circle: true, size: "small" }, () => "小主要圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "success", circle: true, size: "small" }, () => "小成功圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "warning", circle: true, size: "small" }, () => "小警告圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "danger", circle: true, size: "small" }, () => "小危险圆形按钮"),


					h(SButton, { onTap: this.handleClick, type: "default", circle: true, size: "large" }, () => "大默认圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "primary", circle: true, size: "large" }, () => "大主要圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "success", circle: true, size: "large" }, () => "大成功圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "warning", circle: true, size: "large" }, () => "大警告圆形按钮"),
					h(SButton, { onTap: this.handleClick, type: "danger", circle: true, size: "large" }, () => "大危险圆形按钮"),
				]
			})
		])
	}
}