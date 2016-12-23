import * as React from 'react';
import {Hello} from './hello';

export default class Root extends React.Component<{}, {}> {
    state = {
        a: 1,
        f: 'f',
        z: 'z'
    };

    constructor(props: any) {
        super(props);
        setTimeout(() => this.setState({
            a: 2,
            f: 'ffff',
            z: 'zzzzz'
        }), 5000);
    }

    render() {
        return (
            <div>
                <div>hello, I am root{this.state.a}</div>
                <Hello compiler={this.state.f} framework={this.state.z}/>
            </div>
        );
    }
}
