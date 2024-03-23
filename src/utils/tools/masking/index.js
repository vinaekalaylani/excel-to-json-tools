import CryptoJS from "crypto-js";
import { toHex } from "../converting";

export function maskingCardNo(payload) {
	let masked = "";
	masked += payload.slice(0, 6); // 6 digit;

	let index = 0;
	while (index < (payload.length - 10)) {
		masked += "X";
		index += 1;
	} // masking

	masked += payload.slice(payload.length - 4); // 4 digit

	return masked
}

export function maskingPhoneNo(payload) {
	let masked = "";
	masked += payload.slice(0, 2); // 2 digit;

	let index = 0;
	while (index < (payload.length - 4)) {
		masked += "X";
		index += 1;
	} // masking

	masked += payload.slice(payload.length - 2); // 2 digit

	return masked
}

export function maskingPwd(payload) {
	if (payload !== "") {
		let key = "63706d5f70617373776f7264";
		key = toHex(key); // Hex String
		key = CryptoJS.enc.Hex.parse(key); // Bytes

		let masked = CryptoJS.TripleDES.encrypt(payload, key, {
			mode: CryptoJS.mode.ECB,
		}); // Not ASCII

		return masked.toString()
	}
}