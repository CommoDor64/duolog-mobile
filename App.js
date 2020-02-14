import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Store from './store/data-context'
import store from './src/store/Store'
import { setUserData } from './src/actions/plans'
import HomeView from './src/components/Home/HomeView'
import PlanView from './src/containers/Plan'

const Stack = createStackNavigator();


export default function App() {
  const [plans, setPlans] = useState({})
  useEffect(() => {
    fetch("https://bf154748-abeb-4ba3-a20d-eb5de6feceaa.mock.pstmn.io/userdata")
      .then(res => res.json())
      .then(resJson => {
        store.dispatch(setUserData(resJson))
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <Provider store={store}>
      <NavigationNativeContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="PlanView" component={PlanView} />
        </Stack.Navigator>
      </NavigationNativeContainer>
    </Provider>
  );

}

