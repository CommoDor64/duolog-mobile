import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ProgramScroll(props) {
    return (
        <View>
            {props.programs.map(({ name }, programIndex) =>
                (<Surface style={styles.item}>
                    <List.Item
                        key={`planlist-item-${name}-${programIndex}`}
                        title={"plan" + programIndex}
                        right={() => (<Icon name="keyboard-arrow-right" size={30} />)}
                        onPress={() => props.navigation.navigate('ProgramView', { programIndex: programIndex })}
                    />
                </Surface>))}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
    },
    item: {
        margin: 4,
        elevation: 4,
    }
});

export default ProgramScroll 