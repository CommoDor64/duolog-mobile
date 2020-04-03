import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { List, Surface, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ProgramScroll(props) {
    return (
        <SafeAreaView>
            {props.programs.map(({ name }, programIndex) =>
                (
                    <TouchableRipple
                        onPress={() => {
                            props.setCurrentProgram(programIndex)
                            props.navigation.navigate('TrainingDaysView', { programIndex })
                        }}
                    >
                        <Surface
                            style={styles.item}
                        >
                            <List.Item
                                key={`planlist-item-${name}-${programIndex}`}
                                title={"plan" + programIndex}
                                right={() => (<Icon name="keyboard-arrow-right" size={30} />)}

                            />
                        </Surface>
                    </TouchableRipple>))}
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