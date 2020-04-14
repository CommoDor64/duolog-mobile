import React from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { List, Surface } from 'react-native-paper'
import { exerciseStatus } from '../../constants/contants'

function Program(props) {
    const keyExtractor = (programIndex, trainingDayIndex) =>
        `program-${programIndex}-trainingDay-${trainingDayIndex}`

    const trainingDayRender = ({ item: trainingDay, index: trainingDayIndex }) => (
        <Surface style={styles.item}>
            <List.Item
                key={`trainingDay-item-${props.currentProgramIndex}-${trainingDayIndex}`}
                title={trainingDay.day}
                description={exerciseStatus[trainingDay.status].text}
                onPress={() => {
                    props.setCurrentTrainingDay(trainingDayIndex)
                    props.navigation.navigate('TrainingDayView', { trainingDayIndex })
                }}
            />
        </Surface>
    )
    return (
        <SafeAreaView>
            <FlatList
                data={props.trainingDays}
                renderItem={trainingDayRender}
                keyExtractor={(_item, index) => keyExtractor(props.currentProgramIndex, index)}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    text: {
        textAlign: "center",
    },
    item: {
        margin: 8,
        elevation: 4,
        borderRadius: 8
    }
});

export default Program