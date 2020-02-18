import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import { Provider } from 'react-redux';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// redux
import { setUserData } from './src/actions/userdata'
import store from './src/store/Store';
// containers / views
import HomeView from './src/containers/Home';
import ProgramView from './src/containers/ProgramView';
import FilePickerView from './src/containers/FilePickerView';
// lib
import storage from './src/storage/storage'

const Stack = createStackNavigator();

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
        <NavigationNativeContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeView} />
            <Stack.Screen name="ProgramView" component={ProgramView} />
          </Stack.Navigator>
        </NavigationNativeContainer>
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