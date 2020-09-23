import { showLog } from "c/utils";
import { LightningElement } from "lwc";

export default class Level05 extends LightningElement {
	bubbles = true;
	composed = true;
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

	onButtonClick(event) {
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

	onComponentCustomClick(event) {
		showLog("COMPONENT", this.level, event);
	}

	onCellCustomClick(event) {
		showLog("CELL", this.level, event);
	}

	onRowCustomClick(event) {
		showLog("ROW", this.level, event);
	}

	onTableCustomClick(event) {
		showLog("TABLE", this.level, event);
	}
}
