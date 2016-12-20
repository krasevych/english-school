import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Root from './app/root';
import './test';

interface HotModule {
    hot?: {accept: (path: string, callback: () => void) => void};
}

declare const module: HotModule;

const rootEl = document.getElementById('root');
ReactDOM.render(
    <AppContainer>
        <Root />
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./app/root', () => {
        const NextApp = require('./app/root').default;

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}
