import { View } from '@tarojs/components'
import { h, ref } from '@vue/runtime-core'

import { SList, SListItem, SHeading, SPanel, SButton, SInput, SSelect, SModal, SForm } from '@/components';
import './index.scss'

export default {
	setup() {
		let showModal = ref(false);

		let positions = ["default", "left", "left-top", "left-bottom", "right", "right-top", "right-bottom", "top", "bottom"];
		let fills = ["x", "y"];
		let noMargins = [true, false];
		let transparents = [true, false];
		let actionPositions = ["top", "bottom"];
		let showConfirms = [true, false];
		let showCancels = [true, false];
		let showCloses = [true, false];
		let showMasks = [true, false];
		let maskClosables = [true, false];
		let rounds = [true, false];
		let cancelTypes = ["default", "primary", "success", "warning", "danger"];
		let confirmTypes = ["default", "primary", "success", "warning", "danger"];

		let position = ref("default");
		let fill = ref("x");
		let noMargin = ref(false);
		let transparent = ref(false);
		let actionPosition = ref("bottom");
		let showConfirm = ref(true);
		let showCancel = ref(true);
		let showClose = ref(false);
		let showMask = ref(true);
		let maskClosable = ref(true);
		let round = ref(true);
		let cancelType = ref("default");
		let confirmType = ref("success");

		let title = ref("Modal标题");
		let content = ref("Modal内容");
		let confirmText = ref("确认");
		let cancelText = ref("取消");

		// let footerButton
		let openModal = () => {
			showModal.value = true;
		}
		return {
			showModal,
			positions,
			fills,
			noMargins,
			transparents,
			actionPositions,
			showConfirms,
			showCancels,
			showCloses,
			showMasks,
			maskClosables,
			rounds,
			cancelTypes,
			confirmTypes,

			position,
			fill,
			noMargin,
			transparent,
			actionPosition,
			showConfirm,
			showCancel,
			showClose,
			showMask,
			maskClosable,
			round,
			cancelType,
			confirmType,

			title,
			content,
			confirmText,
			cancelText,

			openModal
		}
	},
	render() {
		return h(View, { class: ['page', 'page-modal'] }, [
			h(SList, {}, {
				default: () => h(SListItem, { inline: false }, {
					title: () => h(SHeading, { level: 4 }, { default: () => "模态框" }),
					content: () => "Modal"
				})
			}),
			h(SPanel, { noPadding: true }, {
				default: () => [
					h(SButton, { type: "primary", full: true, onTap: this.openModal }, { default: () => "弹出模态框" }),
				]
			}),
			h(SPanel, {
				noPadding: true
			}, {
				default: () => [
					h(SForm, {}, {
						default: () => [
							h(SInput, { value: this.title, 'onUpdate:value': (e) => this.title = e, title: "title", titleWidth: "180", titleAlign: "left", contentAlign: "right", placeholder: "" }),

							h(SInput, { value: this.content, 'onUpdate:value': (e) => this.content = e, title: "content", titleWidth: "180", titleAlign: "left", contentAlign: "right", placeholder: "" }),

							h(SInput, { value: this.confirmText, 'onUpdate:value': (e) => this.confirmText = e, title: "confirmText", titleWidth: "180", titleAlign: "left", contentAlign: "right", placeholder: "" }),

							h(SInput, { value: this.cancelText, 'onUpdate:value': (e) => this.cancelText = e, title: "cancelText", titleWidth: "180", titleAlign: "left", contentAlign: "right", placeholder: "" }),

							h(SSelect, {
								title: 'position',
								value: this.position,
								onSelect: (e) => this.position = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let positions: any = []; this.positions.map((v, k) => positions.push({ id: v, name: v })); return positions; })()
							}),
							h(SSelect, {
								title: 'fill',
								value: this.fill,
								onSelect: (e) => this.fill = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let fills: any = []; this.fills.map((v, k) => fills.push({ id: v, name: v })); return fills; })()
							}),
							h(SSelect, {
								title: 'noMargin',
								value: this.noMargin,
								onSelect: (e) => this.noMargin = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let noMargins: any = []; this.noMargins.map((v, k) => noMargins.push({ id: v, name: v })); return noMargins; })()
							}),
							h(SSelect, {
								title: 'transparent',
								value: this.transparent,
								onSelect: (e) => this.transparent = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let transparents: any = []; this.transparents.map((v, k) => transparents.push({ id: v, name: v })); return transparents; })()
							}),
							h(SSelect, {
								title: 'actionPosition',
								value: this.actionPosition,
								onSelect: (e) => this.actionPosition = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let actionPositions: any = []; this.actionPositions.map((v, k) => actionPositions.push({ id: v, name: v })); return actionPositions; })()
							}),
							h(SSelect, {
								title: 'showConfirm',
								value: this.showConfirm,
								onSelect: (e) => this.showConfirm = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let showConfirms: any = []; this.showConfirms.map((v, k) => showConfirms.push({ id: v, name: v })); return showConfirms; })()
							}),
							h(SSelect, {
								title: 'showCancel',
								value: this.showCancel,
								onSelect: (e) => this.showCancel = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let showCancels: any = []; this.showCancels.map((v, k) => showCancels.push({ id: v, name: v })); return showCancels; })()
							}),
							h(SSelect, {
								title: 'showClose',
								value: this.showClose,
								onSelect: (e) => this.showClose = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let showCloses: any = []; this.showCloses.map((v, k) => showCloses.push({ id: v, name: v })); return showCloses; })()
							}),
							h(SSelect, {
								title: 'showMask',
								value: this.showMask,
								onSelect: (e) => this.showMask = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let showMasks: any = []; this.showMasks.map((v, k) => showMasks.push({ id: v, name: v })); return showMasks; })()
							}),
							h(SSelect, {
								title: 'maskClosable',
								value: this.maskClosable,
								onSelect: (e) => this.maskClosable = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let maskClosables: any = []; this.maskClosables.map((v, k) => maskClosables.push({ id: v, name: v })); return maskClosables; })()
							}),
							h(SSelect, {
								title: 'round',
								value: this.round,
								onSelect: (e) => this.round = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let rounds: any = []; this.rounds.map((v, k) => rounds.push({ id: v, name: v })); return rounds; })()
							}),
							h(SSelect, {
								title: 'cancelType',
								value: this.cancelType,
								onSelect: (e) => this.cancelType = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let cancelTypes: any = []; this.cancelTypes.map((v, k) => cancelTypes.push({ id: v, name: v })); return cancelTypes; })()
							}),
							h(SSelect, {
								title: 'confirmType',
								value: this.confirmType,
								onSelect: (e) => this.confirmType = e.value,
								titleWidth: "180",
								titleAlign: "left",
								contentAlign: "right",
								placeholder: "",
								data: (() => { let confirmTypes: any = []; this.confirmTypes.map((v, k) => confirmTypes.push({ id: v, name: v })); return confirmTypes; })()
							}),
						]
					})
				]
			}),
			h(SModal, {
				// 'v-model:value': showModal
				show: this.showModal,
				'onUpdate:show': (e) => this.showModal = e,
				title: this.title,
				content: this.content,
				confirmText: this.confirmText,
				cancelText: this.cancelText,
				position: this.position,
				fill: this.fill,
				noMargin: this.noMargin,
				transparent: this.transparent,
				actionPosition: this.actionPosition,
				showConfirm: this.showConfirm,
				showCancel: this.showCancel,
				showClose: this.showClose,
				showMask: this.showMask,
				maskClosable: this.maskClosable,
				round: this.round,
				cancelType: this.cancelType,
				confirmType: this.confirmType,
			}, {
				// default: () => {
				// 	return h(View, {}, "这里是slot的应用演示")
				// }
			})
		])
	}
}