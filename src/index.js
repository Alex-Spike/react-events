import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Event from './screens/Event';
console.disableYellowBox = true;

export default StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Event: {
      screen: Event,
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  }
);