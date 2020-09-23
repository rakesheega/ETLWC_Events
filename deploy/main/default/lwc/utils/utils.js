export const showLog = (STD_CUSTOM, target, level, event) => {
	let msg = "";

	if (STD_CUSTOM === "CUSTOM") {
		msg += "______CUSTOM | ";
	} else if (STD_CUSTOM === "STD") {
		msg += "STANDARD____ | ";
	} else {
		// eslint-disable-next-line no-alert
		alert("ERROR");
	}

	["COMPONENT", "CELL", "ROW", "TABLE"].forEach((tmp) => {
		if (tmp === target) {
			msg += tmp;
		} else {
			msg += "_".repeat(tmp.length);
		}
	});

	msg += `| ${level}`;

	msg += ` | ${event.detail.bubbles ? "BUBBLES" : "_".repeat("BUBBLES".length)} `;
	msg += ` | ${event.detail.composed ? "COMPOSED" : "_".repeat("COMPOSED".length)}`;
	msg += ` | FROM_${event.detail.fromButton ? "BUTTON___" : "COMPONENT"}`;

	console.log(msg);
};
