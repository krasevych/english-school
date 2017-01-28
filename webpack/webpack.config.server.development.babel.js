import { cloneDeep } from 'lodash';
import baseConfig from './webpack.config.server';

const config = cloneDeep(baseConfig);

config.output.publicPath = `http://localhost:3001${config.output.publicPath}`;

export default config;
