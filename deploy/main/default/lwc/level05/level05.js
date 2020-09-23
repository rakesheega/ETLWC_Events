import { LightningElement } from "lwc";

export default class Level05 extends LightningElement {
	level = `Level #5`;
	onButtonClick(event) {
		event.stopPropagation();
		console.log(`Button Clicked: ${this.level}`);
		event.target.dispatchEvent(new CustomEvent("customclick", { bubbles: true, composed: true, detail: "TEST" }));
	}

	onCellClick() {
		console.log(`Cell Clicked: ${this.level}`);
	}

	onRowClick() {
		console.log(`Row Clicked: ${this.level}`);
	}

	onTableClick() {
		console.log(`Table Clicked: ${this.level}`);
	}

	onButtonCustomClick() {
		console.log(`Button Custom Clicked: ${this.level}`);
	}

	onCellCustomClick() {
		console.log(`Cell Custom Clicked: ${this.level}`);
	}

	onRowCustomClick() {
		console.log(`Row Custom Clicked: ${this.level}`);
	}

	onTableCustomClick() {
		console.log(`Table Custom Clicked: ${this.level}`);
	}
}
