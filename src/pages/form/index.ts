import { View } from '@tarojs/components'
import { h, ref } from '@vue/runtime-core'

import { SList, SListItem, SHeading, SPanel, SForm, SInput, SSelect, SDatetimeSelect, SButton } from '@/components'
import './index.scss'

export default {
	setup() {
		return {
			input_value: ref('hello'),

			select_1_value: ref(71),
			select_1_values: [
				{ id: 71, name: "猫" },
				{ id: 72, name: "狗" },
				{ id: 73, name: "猴" },
				{ id: 74, name: "鸡" },
				{ id: 75, name: "猪" },
			],

			select_2_value: ref(null),
			select_2_values: [
				{
					id: 20, name: "0-A",
					children: [
						{
							id: 210, name: "0-B-0", children: [
								{ id: 21230, name: "0-B-2-3-0" },
								{ id: 21231, name: "0-B-2-3-1" },
							],
						},
						{ id: 211, name: "0-B-1" },
						{
							id: 212,
							name: "0-B-2",
							children: [
								{ id: 2120, name: "0-B-2-0" },
								{ id: 2121, name: "0-B-2-1" },
								{ id: 2122, name: "0-B-2-2" },
								{
									id: 2123,
									name: "0-B-2-3",
									children: [
										{ id: 21230, name: "0-B-2-3-0" },
										{ id: 21231, name: "0-B-2-3-1" },
									],
								},
							],
						},
						{ id: 213, name: "0-B-3" },
						{ id: 214, name: "0-B-4" },
						{ id: 215, name: "0-B-5" },
					],
				},
				{
					id: 21,
					name: "0-B",
				},
				{ id: 22, name: "0-C" },
			],

			select_3_value: ref(new Date()),
			select_4_value: ref(new Date()),
			select_5_value: ref(new Date())
		}
	},
	render() {
		return h(View, { class: ['page', 'page-form'] }, [
			h(SList, {}, {
				default: () => h(SListItem, { inline: false }, {
					title: () => h(SHeading, { level: 4 }, { default: () => "表单" }),
					content: () => "Form"
				})
			}),
			h(SPanel, {}, {
				default: () => h(SForm, {}, {
					default: () => [
						h(SInput, { value: this.input_value, 'onUpdate:value': (e) => this.input_value = e, title: "标题", titleWidth: "180", titleAlign: "center", contentAlign: "center", placeholder: "具有奇怪属性的SInput演示" }),

						h(SInput, { value: this.input_value, 'onUpdate:value': (e) => this.input_value = e, title: "标题", }),

						h(SInput, { value: this.input_value, 'onUpdate:value': (e) => this.input_value = e, title: "标题", size: "small" }),

						h(SInput, { value: this.input_value, 'onUpdate:value': (e) => this.input_value = e, title: "标题", size: "large" }),

						h(SInput, { title: "标题", placeholder: "just a placeholder" }),
						h(SInput, { title: "标题", circle: true, placeholder: "just a placeholder" }),
						h(SInput, { title: "标题", placeholder: "just a placeholder" }),
						h(SInput, { title: "标题", circle: true, disabled: true, placeholder: "just a placeholder" }),

						h(SInput, { value: this.input_value, 'onUpdate:value': (e) => this.input_value = e, title: "标题", circle: true }),

						h(SInput, { value: this.input_value, 'onUpdate:value': (e) => this.input_value = e, title: "标题", circle: true, disabled: true }),

						h(SInput, { value: this.input_value, 'onUpdate:value': (e) => this.input_value = e, title: "标题", circle: true, disabled: true }, {
							extra: () => h("view", { class: "text" }, h(SButton, { size: 'small', type: 'primary' }, { default: () => 'Extra Button' }))
						}),

						h(SSelect, {
							title: '请选择单选',
							value: this.select_1_value,
							onSelect: (e) => this.select_1_value = e.value,
							contentAlign: 'center',
							data: this.select_1_values
						}),

						h(SSelect, {
							title: '请选择联动',
							value: this.select_2_value,
							onSelect: (e) => this.select_2_value = e.value,
							data: this.select_2_values
						}),

						h(SDatetimeSelect, {
							title: '请选择日期',
							type: 'date',
							start: new Date((Math.floor(this.select_3_value.valueOf() / 1000) - 778 * 80000) * 1000),
							end: new Date((Math.floor(this.select_3_value.valueOf() / 1000) + 664 * 80000) * 1000),
							value: this.select_3_value,
							"onUpdate:value": (e) => this.select_3_value = e
						}),

						h(SDatetimeSelect, {
							title: '请选择时间',
							type: 'time',
							start: new Date((Math.floor(this.select_4_value.valueOf() / 1000) - 778 * 80000) * 1000),
							end: new Date((Math.floor(this.select_4_value.valueOf() / 1000) + 664 * 80000) * 1000),
							value: this.select_4_value,
							"onUpdate:value": (e) => this.select_4_value = e
						}),

						h(SDatetimeSelect, {
							title: '请选择日期时间',
							type: 'datetime',
							// start: new Date((Math.floor(this.select_5_value.valueOf() / 1000) - 778 * 80000)*1000),
							// end: new Date((Math.floor(this.select_5_value.valueOf() / 1000) + 664 * 80000)*1000),
							start: new Date("2017-02-03 22:33:44"),
							value: this.select_5_value,
							contentAlign: 'left',
							"onUpdate:value": (e) => { this.select_5_value = e; console.log(e) }
						}),
					]
				})
			})


		])
	}
}