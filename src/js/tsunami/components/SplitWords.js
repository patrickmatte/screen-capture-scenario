import * as tsunami from "../tsunami";
import SplitLetters from "./SplitLetters";
import UIList from "./UIList";

export default class SplitWords extends UIList {

	constructor(element) {
		super(element);
		this.alsoShowChildren = true;
		this.wordTemplate = `<span class="word" is="ui-component">{{item}}</span>`;
		this.spaceTemplate = `<span class="space">&nbsp;</span>`;
		this.showChildrenDelay = 25;
		this.hideChildrenDelay = 25;
	}

	updateValue(value) {
		let array = value.split(" ").join("- -").split("-");
		this.dataProvider = array;
	}

	getTemplateForModel(model) {
		let template;
		switch (model) {
			case " ":
				template = this.spaceTemplate;
				break;
			default:
				template = this.wordTemplate;
				break;
		}
		return template;
	}

}

tsunami.define("split-letters", SplitLetters);
