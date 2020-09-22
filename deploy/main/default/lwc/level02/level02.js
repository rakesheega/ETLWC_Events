import { LightningElement } from "lwc";

export default class Level02 extends LightningElement {
	level = `Level #2`;
	onButtonClick() {
		console.log(`Button Clicked: ${this.level}`);
	}

	onComponentClick() {
		console.log(`Component Clicked: ${this.level}`);
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

	onComponentCustomClick() {
		console.log(`Component Custom Clicked: ${this.level}`);
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
