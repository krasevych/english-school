import {AppContainer} from 'react-hot-loader';
import * as React from "react";
import * as ReactDOM from "react-dom";
import './test';
import App from './app/app'

interface IHotModule {
    hot?: { accept: (path: string, callback: () => void) => void };
}

declare const module: IHotModule;

const rootEl = document.getElementById('root');
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./app/app', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./app/app').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}