import { makeObservable, observable, action } from "mobx";

export class InputStore {
    inputValue = "enter task title"; // Начальное значение input

    constructor() {
        makeObservable(this, {
            inputValue: observable,
            setInputValue: action,
        });
    }

    setInputValue(title: string) {
        this.inputValue = title;
    }
}


