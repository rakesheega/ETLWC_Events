import { showLog } from "c/utils";
import { LightningElement } from "lwc";

export default class Level05 extends LightningElement {
	bubbles = false;
	composed = false;
	fromButton = true;
	level = `Level #5`;

	onBubblesChange(event) {
		this.bubbles = event.target.checked;
	}

	onComposedChange(event) {
		this.composed = event.target.checked;
	}

	onFromBottomChange(event) {
		this.fromButton = event.target.checked;
	}

	onToggleClick(event) {
		event.stopPropagation();
	}

	onButtonClick(event) {
		event.stopPropagation();
		showLog("STD", "BUTTON", this.level);
		let source;
		if (this.fromButton) {
			source = event.target;
		} else {
			source = this;
		}
		source.dispatchEvent(new CustomEvent("customclick", { bubbles: this.composed, composed: this.bubbles, detail: "TEST" }));
	}

	onButtonCustomClick() {
		showLog("CUSTOM", "BUTTON", this.level);
	}

	onComponentClick() {
		showLog("STD", "COMPONENT", this.level);
	}

	onCellClick() {
		showLog("STD", "CELL", this.level);
	}

	onRowClick() {
		showLog("STD", "ROW", this.level);
	}

	onTableClick() {
		showLog("STD", "TABLE", this.level);
	}

	onComponentCustomClick() {
		showLog("CUSTOM", "COMPONENT", this.level);
	}

	onCellCustomClick() {
		showLog("CUSTOM", "CELL", this.level);
	}

	onRowCustomClick() {
		showLog("CUSTOM", "ROW", this.level);
	}

	onTableCustomClick() {
		showLog("CUSTOM", "TABLE", this.level);
	}
}
