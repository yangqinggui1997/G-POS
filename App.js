import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { setNavigator } from './src/navigationRef'

const switchNavigator = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    SigninScreen: SigninScreen,
    HomeStaffScreen: HomeStaffScreen
  },
  {
    initialRouteName: 'ResolveAuth'
  }
)

const App = createAppContainer(switchNavigator)

export default () => {
  return <App ref={(navigator) => {setNavigator(navigator)}}/>
}