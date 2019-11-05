/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

export { animatedStack } from './src/routes';

AppRegistry.registerComponent(appName, () => App);
