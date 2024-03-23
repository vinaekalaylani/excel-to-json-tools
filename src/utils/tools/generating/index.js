export function clientUniqueCode() {
	const character = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	let res = "";

	for (let i = 32; i > 0; --i) {
		res += character[Math.floor(Math.random() * character.length)];
	}

	return res
}

export function ticketAge(data) {
	let time = Math.ceil((new Date() - new Date(data)) / 1000);

	let hours = parseInt(time / 3600);
	let seconds = time % 3600;

	let minutes = parseInt(seconds / 60);
	seconds = seconds % 60;

	let days = parseInt(hours / 24);

	let res = "";
	if (hours > 24) {
		res = days + " days ago"
	} else if (hours > 0) {
		res = hours + " hours " + minutes + " minutes ago"
	} else if (minutes > 0) {
		res = minutes + " minutes ago"
	}

	return res
}

export function recordedTime(second) {
	let time = Math.ceil((new Date() - new Date(second)) / 1000);

	let hours = parseInt(time / 3600);
	let seconds = time % 3600;

	let minutes = parseInt(seconds / 60);
	seconds = seconds % 60;

	let res = "";
	if (hours > 0) {
		res = hours + "h " + minutes + "m"
	} else if (minutes > 0) {
		res = minutes + "m " + seconds + "s"
	} else {
		res = seconds + "s"
	}

	return res
}

export function resolutionTime(second) {
	let time = second;

	let hours = parseInt(time / 3600);
	let seconds = time % 3600;

	let minutes = parseInt(seconds / 60);
	seconds = seconds % 60;

	let res = "";
	if (hours > 0) {
		res = hours + "h " + minutes + "m"
	} else if (minutes > 0) {
		res = minutes + "m " + seconds + "s"
	} else {
		res = seconds + "s"
	}

	return res
}

export function categoryFilter(datas, category) {
	let arr = [];

	datas.forEach(el => {
		if (!arr.find((e) => e?.value === el[category]?.id)) {
			arr.push({ text: el[category]?.name, value: el[category]?.id })
		}
	});

	return arr
}