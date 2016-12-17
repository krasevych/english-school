import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface HelloState {
    name: string
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, HelloState> {
    state = {
        name: 'wow'
    };

    constructor(props: HelloProps) {
        super(props);
    }

    handleSetName = () => {
        this.setState({
            name: 'wow2'
        });
    };

    handleInputChange = (e: any) => {
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        });
    };

    render() {
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}! {this.state.name}</h1>
            <input type="text" onChange={this.handleInputChange}/>
            <button onClick={this.handleSetName}>new name</button>
        </div>;
    }
}