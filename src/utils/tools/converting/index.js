export function toHex(str) {
    let arr = [];
    for (const index in str) {
        arr[index] = str.charCodeAt(index).toString(16).slice(-4);
    }

    let hex = "";
    for (const index in str) {
        hex += arr[index];
    }

    return hex
}

export function toBase64(buffer) {
	let binary = "";
	let bytes = new Uint8Array(buffer);
	let len = bytes.byteLength;
	for (let i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return "data:image/jpeg;base64," + btoa(binary);
}

export function toName(data, value) {
    const find = data.find((el) => el.id === value)
    return find?.name || "-"
}

export function toStatusName(value) {
    if (value === 1) return "Active"
    else if (value === 0) return "Inactive"
    else if (value === 10) return "Open"
    else if (value === 21) return "Closed (Resolved)"
    else if (value === 22) return "Closed (Pending SLM)"
    else if (value === 23) return "Closed (Pending FLM)"
    else return value
}

export function toRecordName(value) {
    if (value === 1) return "Open"
    else if (value === 2) return "Resolved/Closed"
    else if (value === 3) return "Penfing SLM"
    else return value
}

export function toPrefixName(value) {
    if (value.toLowerCase() === "a") return "FLM"
    else if (value.toLowerCase() === "b") return "SLM"
    else return value.toLowerCase()
}