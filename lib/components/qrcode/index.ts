import Taro from '@tarojs/taro'
import { Canvas, View, Text } from "@tarojs/components"
import { h, ref, mergeProps, watch, computed } from "@vue/runtime-core"

import QRCodeImpl from 'qr.js/lib/QRCode';
import QRCodeErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel';

import { createRandomNumber } from '../../utils'

import './index.scss'
export default {
	props: {
		size: {
			type: Number,
			default: 375
		},
		level: {
			type: String,
			default: "L"
		},
		color: {
			type: String,
			default: "#000"
		},
		backgroundColor: {
			type: String,
			default: "#fff"
		},
		error: {
			type: Boolean,
			default: false
		},
		errorMessage: {
			type: String,
			default: "该二维码暂不可用"
		},
		errorSize: {
			type: Number,
			default: 32
		},
		errorTextColor: {
			type: String,
			default: "#000"
		},
		errorMaskColor: {
			type: String,
			default: "#ccc"
		},
		errorMaskOpacity: {
			type: Number,
			default: 0.5
		},
		content: {
			type: String,
			default: "sunview-ui"
		},
		type: {
			type: String,
			default: ""
		}
	},
	setup(props, { attrs }) {

		let canvasId = `s-qrcode-canvas-${(new Date().getTime())}-${createRandomNumber(10000000, 99999999)}`;
		let content = computed(() => {
			return props.content
		})

		let convertStr = (str) => {
			let out = '';
			for (let i = 0; i < str.length; i++) {
				let charcode = str.charCodeAt(i);
				if (charcode < 0x0080) {
					out += String.fromCharCode(charcode);
				} else if (charcode < 0x0800) {
					out += String.fromCharCode(0xc0 | (charcode >> 6));
					out += String.fromCharCode(0x80 | (charcode & 0x3f));
				} else if (charcode < 0xd800 || charcode >= 0xe000) {
					out += String.fromCharCode(0xe0 | (charcode >> 12));
					out += String.fromCharCode(0x80 | ((charcode >> 6) & 0x3f));
					out += String.fromCharCode(0x80 | (charcode & 0x3f));
				} else {
					// This is a surrogate pair, so we'll reconsitute the pieces and work
					// from that
					i++;
					charcode =
						0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
					out += String.fromCharCode(0xf0 | (charcode >> 18));
					out += String.fromCharCode(0x80 | ((charcode >> 12) & 0x3f));
					out += String.fromCharCode(0x80 | ((charcode >> 6) & 0x3f));
					out += String.fromCharCode(0x80 | (charcode & 0x3f));
				}
			}
			return out;
		}

		let convertHexToRGBA = (hex: string, opacity = 1) => {
			if (hex.length == 4) {
				hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
			}
			return {
				red: parseInt("0x" + hex.slice(1, 3)),
				green: parseInt("0x" + hex.slice(3, 5)),
				blue: parseInt("0x" + hex.slice(5, 7)),
				rgba: "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")"
			}
		}

		let drawer = () => {
			// console.log(props.size);

			let qrcode = new QRCodeImpl(-1, QRCodeErrorCorrectLevel[props.level]);
			qrcode.addData(convertStr(content.value));
			qrcode.make();

			let ctx = Taro.createCanvasContext(canvasId);

			let cells = qrcode.modules;
			if (cells === null) return;

			let blockSize: number = parseInt((props.size / cells.length).toString());
			// console.log(blockSize);
			// console.log(cells.length);
			// console.log(blockSize * cells.length);
			let offset = (props.size - blockSize * cells.length) / 2;
			// console.log(offset);


			ctx.scale(1, 1);

			// 清空画布
			ctx.draw();

			// 绘制背景色
			ctx.setFillStyle(props.backgroundColor);
			ctx.fillRect(0, 0, props.size, props.size);

			if (props.error) {
				// 计算定位点长度
				let locationAreaLength = 0;
				for (let i in cells[0]) {
					if (cells[0][i]) {
						locationAreaLength++
					} else {
						break;
					}
				}

				// console.log(locationAreaLength);
				// 绘制一个只有定位点的二维码
				ctx.setFillStyle(props.color);
				for (let i in cells) {
					for (let j in cells[i]) {
						if (
							cells[i][j] && (
								// 左上
								(locationAreaLength - parseInt(i) > 0 && locationAreaLength - parseInt(j) > 0)

								// 右上
								|| (locationAreaLength + parseInt(i) - cells.length >= 0 && locationAreaLength - parseInt(j) > 0)

								// 左下
								|| (locationAreaLength - parseInt(i) > 0 && locationAreaLength + parseInt(j) - cells[i].length >= 0)

								// // 右下
								// || (
								// 	locationAreaLength - 1 + parseInt(i) - cells.length > 0
								// 	&& locationAreaLength - 1 + parseInt(j) - cells[i].length > 0
								// 	&& (locationAreaLength - 1) / 3 + parseInt(i) - cells.length < 0
								// 	&& (locationAreaLength - 1) / 3 + parseInt(j) - cells[i].length < 0
								// )
							)
						) {
							ctx.fillRect(offset + blockSize * parseInt(i), offset + blockSize * parseInt(j), blockSize, blockSize)
						}
					}
				}

				// 绘制错误遮罩层
				ctx.setFillStyle(convertHexToRGBA(props.errorMaskColor, props.errorMaskOpacity).rgba)
				ctx.fillRect(0, 0, props.size, props.size);

				// 绘制错误提示
				ctx.setFontSize(props.errorSize);
				// console.log(props.errorSize);
				ctx.setFillStyle(props.errorTextColor);
				// console.log(props.errorTextColor);
				// console.log(props.errorSize * props.errorMessage.length / 2);

				ctx.fillText(props.errorMessage, (props.size - props.errorSize * props.errorMessage.length) / 2, (props.size + props.errorSize) / 2)
			} else {
				// 绘制正常二维码
				ctx.setFillStyle(props.color);
				for (let i in cells) {
					for (let j in cells[i]) {
						if (cells[i][j]) {
							ctx.fillRect(offset + blockSize * parseInt(i), offset + blockSize * parseInt(j), blockSize, blockSize)
						}
					}
				}
			}

			ctx.draw(true);

		}

		// 立即执行一次绘图方法
		drawer();

		// 监视内容改变，再次绘图
		watch(content, (val, oldVal) => {
			drawer();
		})

		return () => h(View, mergeProps({
			class: ["s-qrcode"],
			style: {
				width: `${props.size}px`,
				height: `${props.size}px`,
			}
		}, attrs), h(Canvas, {
			canvasId,
			type: props.type,
			disableScroll: true,
			style: {
				width: 'inherit',
				height: 'inherit'
			}
		}))
	}
}