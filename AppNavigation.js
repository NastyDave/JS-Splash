import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from '@screens/SplashScreen'
import LoginScreen from '@screens/LoginScreen'

const AppNavigation = createStackNavigator({
    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShow: false,
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            headerShow: false,
        }
    },
})

export default createAppContainer(AppNavigation)
