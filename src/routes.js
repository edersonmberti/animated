import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home, Fade, Rotate, Lottie } from './screens';

export const animatedStack = createStackNavigator({
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
  Lottie: {
    screen: Lottie,
    navigationOptions: {
      title: 'Lottie',
    },
  },
});

const Routes = createAppContainer(animatedStack);

export default Routes;
