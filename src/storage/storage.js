import { AsyncStorage } from 'react-native';
import userDataModel from './userdata.json';
import store from '../store/Store'
export const USER_DATA = "userData"

async function init() {
    try {
        const userData = await AsyncStorage.getItem(USER_DATA)
        if (userData === null) {
            await AsyncStorage.setItem(USER_DATA, JSON.stringify(userDataModel))

        }
    } catch (err) {
        console.error(err)
    }
}

async function wipeUserData() {
    try {
        await AsyncStorage.setItem(USER_DATA, JSON.stringify(userDataModel))
    } catch (err) {

    }
}
async function getUserData() {
    try {
        const userData = JSON.parse(await AsyncStorage.getItem(USER_DATA))
        return userData;
    } catch (error) {

    }
}

async function setUserData() {
    try {
        await AsyncStorage.setItem(USER_DATA, JSON.stringify(store.getState()))
    } catch (err) {
        console.error(err)
    }
}

async function appendProgram(program) {
    try {
        let userData = JSON.parse(await AsyncStorage.getItem(USER_DATA))
        userData.programs.push(program)
        await AsyncStorage.setItem(USER_DATA, JSON.stringify(userData))
    } catch (err) {
        console.error(err)
    }
}

export default {
    init,
    setUserData,
    getUserData,
    appendProgram,
    wipeUserData
}