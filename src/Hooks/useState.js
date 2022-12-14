import ReactDOM from "react-dom";

const rootElement = document.getElementById("root")




const MyReact = {
    stateArr: [],
    currentStateIndex: 0,
    Component: null,
    useState(initialValue) {
        // if it reached beyond the last element of the array
        // it will need create a new state
        if (this.currentStateIndex === this.stateArr.length) {
            const statePair = {
                value: initialValue,
                setState(newValue) {
                    statePair.value = newValue;
                    MyReact.currentStateIndex = 0;
                    ReactDOM.render(<MyReact.Component />, rootElement);
                }
            };

            this.stateArr.push(statePair);
        }
        // get the current state and setState before incrementing the index
        const currentStatePair = this.stateArr[this.currentStateIndex];
        this.currentStateIndex += 1;
        return [currentStatePair.value, currentStatePair.setState];
    },
    render(component, rootElement) {
        this.component = component;
        this.rootElement = rootElement;
        ReactDOM.render(<this.component />, this.rootElement);
    }
};