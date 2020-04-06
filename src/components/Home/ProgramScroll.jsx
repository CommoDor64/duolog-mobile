import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { List, Surface, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ProgramScroll(props) {
    const keyExtractor = (programIndex) =>
        `program-${programIndex}`

    const programsRender = ({ item: program, index: programIndex }) => (
        <TouchableRipple
            onPress={() => {
                props.setCurrentProgram(programIndex)
                props.navigation.navigate('ProgramView', { programIndex })
            }}>
            <Surface style={styles.item}>
                <List.Item
                    title={"plan" + programIndex}
                    right={() => (<Icon name="keyboard-arrow-right" size={30} />)}
                />
            </Surface>
        </TouchableRipple>
    )

    return (
        <SafeAreaView>
            <FlatList
                data={props.programs}
                renderItem={programsRender}
                keyExtractor={(_item, index) => keyExtractor(index)}
            />
        </SafeAreaView>
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