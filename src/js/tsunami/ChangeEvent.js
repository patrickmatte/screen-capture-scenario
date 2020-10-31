import BaseEvent from "./events";

export default class ChangeEvent extends BaseEvent {

    static dispatch(eventTarget, type, value) {
		eventTarget.dispatchEvent(new ChangeEvent(type, value));
    }

    constructor(type, data, eventInit) {
        super(type, data, eventInit);
    }

}