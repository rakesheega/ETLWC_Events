export const showLog = (STD_CUSTOM, target, level) => {
	let msg = "";

	if (STD_CUSTOM === "CUSTOM") {
		msg += "______CUSTOM | ";
	} else if (STD_CUSTOM === "STD") {
		msg += "STANDARD____ | ";
	} else {
		// eslint-disable-next-line no-alert
		alert("ERROR");
	}

	["BUTTON", "CELL", "ROW", "TABLE"].forEach((tmp) => {
		if (tmp === target) {
			msg += tmp;
		} else {
			msg += "_".repeat(tmp.length);
		}
	});

	msg += `| ${level}`;

	console.log(msg);
};

// export { showLog };
