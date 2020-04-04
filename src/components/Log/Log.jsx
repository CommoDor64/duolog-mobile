
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import storage from '../../storage/storage'
function Log(props) {
    const [log, setLog] = useState("")
    storage.getUserData()
        .then(userData => setLog(JSON.stringify(userData)))
        .catch(err => console.error(err))
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text>{log}</Text>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        margin: 4,
        elevation: 4,
    },
});

export default Log;