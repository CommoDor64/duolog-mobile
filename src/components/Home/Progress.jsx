import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { List, ProgressBar, Colors } from 'react-native-paper';

function Progress(props) {
    const { name, date } = props
    return (
        <ProgressBar progress={0.5} color={Colors.red800} />
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
    }
});

export default Progress; 