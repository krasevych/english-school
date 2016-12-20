import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from 'react-hot-loader';

import Root from './app/root';
import './test';

interface IHotModule {
    hot?: {accept: (path: string, callback: () => void) => void};
}

declare const module: IHotModule;

const rootEl = document.getElementById('root');
ReactDOM.render(
    <AppContainer>
        <Root />
    </AppContainer>,
    rootEl
);

if (module.hot) {
    const url = './app/root';
    module.hot.accept(url, () => {
        const NextApp = require(url).default;

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}