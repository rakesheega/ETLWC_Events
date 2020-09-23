import { showLog } from "c/utils";
import { LightningElement } from "lwc";

export default class Level00 extends LightningElement {
	level = `Level #0`;

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
