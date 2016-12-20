import * as React from 'react';

export default class Root extends React.Component<{}, {}> {
    render() {
        const a:{a:number} = {a:1};
        return (
            <div>hello, I am root</div>
        )
    }
}