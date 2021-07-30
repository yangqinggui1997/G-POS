import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { setNavigator } from './src/navigationRef'
import { createStore, combineReducers } from 'redux'
import userReducer from './src/store/reducers/user'
import { Provider } from 'react-redux'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import SigninScreen from './src/screens/SigninScreen'
import HomeStaffScreen from './src/screens/HomeStaffScreen'

const rootReducer = combineReducers({
  users: userReducer
})

const store = createStore(rootReducer)

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
  return <Provider store={store}>
    <App ref={(navigator) => {setNavigator(navigator)}}/>
  </Provider>
}