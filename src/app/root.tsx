import * as React from 'react';
import * as CSSModules from 'react-css-modules';

import {Hello} from './hello';
import * as styles from './../test.css';

@CSSModules(styles)
export default class Root extends React.Component<{}, {}> {
    state = {
        a: 1,
        f: 'f',
        z: 'z'
    };

    constructor(props: any) {
        super(props);
        setTimeout(() => this.setState({
            a: 3,
            f: 'ffff',
            z: 'zzzzz'
        }), 5000);
    }

    render() {
        return (
            <div>
                <div styleName='blue'>hello, I am rootB{this.state.a}</div>
                <Hello compiler={this.state.f} framework={this.state.z}/>
            </div>
        );
    }
}
