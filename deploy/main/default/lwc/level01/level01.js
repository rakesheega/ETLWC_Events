import { showLog } from "c/utils";
import { LightningElement } from "lwc";

export default class Level01 extends LightningElement {
	level = `Level #1`;

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
