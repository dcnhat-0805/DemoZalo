import MainComponent from "../screens/MainComponent";
import {createStackNavigator, createAppContainer} from 'react-navigation';
const AppNavigator = createStackNavigator(
    {
        Home: MainComponent
    },
    {
        initialRouteName: "Home"
    }
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;