import * as React from "react";
import {Hello} from './hello';
export default class App extends React.Component<{},{}> {
    render() {
        return <div>
            <h1>hello world - 3</h1>
            <Hello compiler='test' framework='test'/>
        </div>
    }
}