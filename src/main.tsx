import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Root from './app/root';

const rootEl = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
        <Root />
    </AppContainer>,
    rootEl
);

if ((module as HotModule).hot) {
    (module as HotModule).hot.accept('./app/root', () => {
        const NextApp = require('./app/root').default;

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}
