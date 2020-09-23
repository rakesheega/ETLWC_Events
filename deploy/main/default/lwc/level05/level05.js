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
		// showLog("STD", "COMPONENT", this.level, event);
		let source;
		if (this.fromButton) {
			source = event.target;
		} else {
			source = this;
		}
		source.dispatchEvent(
			new CustomEvent("customclick", {
				bubbles: this.composed,
				composed: this.bubbles,
				detail: { source, bubbles: this.composed, composed: this.bubbles, fromButton: this.fromButton }
			})
		);
	}

	onButtonCustomClick(event) {
		showLog("CUSTOM", "COMPONENT", this.level, event);
	}

	onComponentClick(event) {
		showLog("STD", "COMPONENT", this.level, event);
	}

	onCellClick(event) {
		showLog("STD", "CELL", this.level, event);
	}

	onRowClick(event) {
		showLog("STD", "ROW", this.level, event);
	}

	onTableClick(event) {
		showLog("STD", "TABLE", this.level, event);
	}

	onComponentCustomClick(event) {
		showLog("CUSTOM", "COMPONENT", this.level, event);
	}

	onCellCustomClick(event) {
		showLog("CUSTOM", "CELL", this.level, event);
	}

	onRowCustomClick(event) {
		showLog("CUSTOM", "ROW", this.level, event);
	}

	onTableCustomClick(event) {
		showLog("CUSTOM", "TABLE", this.level, event);
	}
}
