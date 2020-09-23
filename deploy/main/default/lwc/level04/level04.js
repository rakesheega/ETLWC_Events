import { showLog } from "c/utils";
import { LightningElement } from "lwc";

export default class Level04 extends LightningElement {
	level = `Level #4`;

	onButtonClick(event) {
		showLog("STD", "BUTTON", this.level, event);
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
