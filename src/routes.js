import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home, Fade, Rotate } from './screens';

const Routes = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      },
    },
    Fade: {
      screen: Fade,
      navigationOptions: {
        title: 'Fade',
      },
    },
    Rotate: {
      screen: Rotate,
      navigationOptions: {
        title: 'Rotate',
      },
    },
  }),
);

export default Routes;
