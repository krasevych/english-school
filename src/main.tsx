require('./test');

 import * as React from "react";
 import * as ReactDOM from "react-dom";
import { Hello } from "./hello";

class Main extends React.Component<{},{}> {
    render() {
        return <h1>hello world1</h1>
    }
}


ReactDOM.render(
    <Main />,
    document.getElementById("example")
);