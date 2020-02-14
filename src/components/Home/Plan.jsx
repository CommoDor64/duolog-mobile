import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ProgressBar, Colors, Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
export function Plan(props) {
    const { name, date, key } = props
    return (
        <Surface style={styles.item} >
            <List.Item
                title={name}
                right={() => (<Icon name="keyboard-arrow-right" size={30} />)}
                onPress={props.onPress}
            />
        </Surface>
    );
}

const styles = StyleSheet.create({
    item: {
        margin: 4,
        elevation: 1,
    }
});
