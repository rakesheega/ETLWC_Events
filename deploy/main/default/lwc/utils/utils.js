const _pad = (msg, length) => {
	return `${msg}${".".repeat(length - msg.length)}`;
};

export const showLog = (target, level, event) => {
	let tmp;
	let msg = "";

	msg += _pad(target, 10);
	msg += `| ${level}`;

	tmp = `BUBBLES: ${event.detail.bubbles}`;
	msg += ` | ${_pad(tmp, 15)}`;

	tmp = `COMPOSED: ${event.detail.composed}`;
	msg += ` | ${_pad(tmp, 15)}`;

	tmp = `FROM_${event.detail.fromButton ? "BUTTON" : "COMPONENT"}`;
	msg += ` | ${_pad(tmp, 15)}`;

	console.log(msg);
};
