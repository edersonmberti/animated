import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { LoginScreen, HomeScreen } from './screens';

const Routes = createAppContainer(
  createSwitchNavigator({
    LoginScreen,
    HomeScreen,
  }),
);

export default Routes;
