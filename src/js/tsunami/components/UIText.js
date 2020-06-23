import UIComponent from "./UIComponent";
import ExpressionBinding from "./ExpressionBinding";
import Data from "../data/Data";

export default class UIText extends UIComponent {

	constructor(element) {
		super(element);
	}

    get scope() {
        return super.scope;
    }

    set scope(value) {
        super.scope = value;
        let expression = this.element.textContent;
        let hasTemplateLiteral1 = (expression.indexOf("`") != -1);
        let hasTemplateLiteral2 = (expression.indexOf("${") != -1);
        if (hasTemplateLiteral1 && hasTemplateLiteral2) {
            let setModel = (value) => {
                this.model = value;
            }
            this.expressionBinding = new ExpressionBinding(setModel, expression, value);
        }
    }

    get model() {
        return this.element.textContent;
    }

    set model(value) {
        if (value instanceof Data) value = value.value;
        this.element.textContent = value;
    }

    destroy() {
        if (this.expressionBinding) this.expressionBinding.destroy();
        return super.destroy();
    }

}
