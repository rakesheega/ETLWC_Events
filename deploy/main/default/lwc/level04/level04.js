import { showLog } from "c/utils";
import { LightningElement } from "lwc";

export default class Level04 extends LightningElement {
	level = `Level #4`;

	onButtonClick() {
		showLog("STD", "BUTTON", this.level);
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
