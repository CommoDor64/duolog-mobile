import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// redux
import { setUserData } from './src/actions/userdata'
import store from './src/store/Store';
// containers 
import ProgramView from './src/containers/ProgramContainer';
import ProgramScrollView from './src/containers/ProgramScrollContainer';
import FilePickerView from './src/containers/FilePickerContainer';
import TrainingDaysView from './src/containers/TrainingDaysContainer';
import Log from './src/components/Log/Log'
// lib
import storage from './src/storage/storage'

// stack navigator for mail application flow
const Stack = createStackNavigator();
const StackComponent = () =>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="ProgramScrollView" component={ProgramScrollView} />
    <Stack.Screen name="TrainingDaysView" component={TrainingDaysView} />
    <Stack.Screen name="ProgramView" component={ProgramView} />
  </Stack.Navigator>
// tab navigator between main flow and Log print
const Tab = createBottomTabNavigator();
export default function App() {

  // load state from storage
  useEffect(() => {
    storage
      .getUserData()
      .then(userData => {
        store.dispatch(setUserData(userData))
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="ProgramScrollView" component={StackComponent} />
            <Tab.Screen name="Log" component={Log} />
          </Tab.Navigator>
        </NavigationContainer>
        <Surface style={styles.button}>
          <FilePickerView />
        </Surface>
      </Provider>
    </>
  );
}


const styles = StyleSheet.create({
  surface: {
    margin: 4,
    elevation: 10
  }
});