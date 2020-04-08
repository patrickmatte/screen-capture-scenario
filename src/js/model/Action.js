import BooleanData from "../tsunami/data/BooleanData";
import NumberData from "../tsunami/data/NumberData";
import {awaitTimeout} from "../tsunami/await";
import StringData from "../tsunami/data/StringData";
import Data from "../tsunami/data/Data";
import { app } from "../main";

export default class Action {

	constructor(type = "Action", name = "Action", description = "Add an Action") {

		this.capture = this.capture.bind(this);
		this.play = this.play.bind(this);
		this.deleteAction = this.deleteAction.bind(this);
		this.addAction = this.addAction.bind(this);

		this.type = type;
		this.name = new StringData();
		this.name.length = new NumberData();
		this.name.addEventListener(Data.CHANGE, () => {
			this.name.length.value = Math.max(this.name.value.length, 4);
		});
		this.name.value = name;
		this.icon = new StringData();
		this.description = new StringData(description);
		this.captureDescription = new StringData();
		this.isTestable = new BooleanData();
		this.isCaptureable = new BooleanData();
		this.isCapturing = new BooleanData();
		this.changeCursorOnCapture = new BooleanData();
		this.isCapturing.addEventListener(Data.CHANGE, (event) => {
			if (this.changeCursorOnCapture.value) app.showCaptureIcon.value = event.data;
		});
		this.isPlaying = new BooleanData();
		this.delay = new NumberData(0);
		this.isSelectedItem = new BooleanData();


		this.array = [this];
	}

	addAction() {
		app.actions.types.selectedItem.value = this;
		app.actions.addSelectedType();
	}

	clone() {

	}

	copy(action) {
		if(!action) return;
		this.delay.value = action.delay.value;
		this.isCaptureable.value = action.isCaptureable.value;
		this.isTestable.value = action.isTestable.value;
	}

	triggerDelay() {
		let promise1 = awaitTimeout(this.delay.value * 1000);
		let promise2 = promise1.then(() => {
			return this.trigger();
		});
		return promise2;
	}

	trigger() {
		return Promise.resolve();
	}

	serialize() {
		return {
			type:this.type,
			delay:this.delay.value,
			name:this.name.value
		}
	}

	deserialize(data) {
		this.type = data.type;
		this.delay.value = data.delay;
		this.name.value = data.name;
	}

	capture() {
		this.isCapturing.value = true;
	}

	captureComplete() {
		this.isCapturing.value = false;
		app.save();
	}

	captureAtInit() {
	}

	play() {
		this.isPlaying.value = true;
		let promise1 = this.trigger();
		let promise2 = promise1.then(() => {
			this.isPlaying.value = false;
			app.save();
		});
		return promise2;
	}

	deleteAction() {
		let index = app.actions.indexOf(this);
		app.actions.remove(this);
		let newIndex = Math.max(index - 1, 0);
		app.actions.selectedIndex.value = Math.min(newIndex, app.actions.value.length - 1);
	}
}