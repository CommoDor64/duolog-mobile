import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import Exercise from './Exercise'
import storage from '../../storage/storage';

function Program(props) {
    const [trainingDay, setTrainingDay] = useState(props.trainingDay)

    // update storage on unmount
    useEffect(() => {
        return () => { storage.setUserData() }
    }, [])

    const keyExtractor = (programIndex, trainingDayIndex, exerciseIndex) => {
        return `program-${programIndex}-trainingDay-${trainingDayIndex}-exercise-${exerciseIndex}`
    }

    const exerciesesRender = ({ item: exercise, index: exerciseIndex }) =>
        <Exercise
            key={`exercise-${exercise}-${exerciseIndex}`}
            exerciseIndex={exerciseIndex}
            exercise={exercise}
            expanded={false}
            toggleCompletedExerciseSet={(exerciseIndex, exerciseSetIndex) => {
                props.toggleCompletedExerciseSet(
                    exerciseIndex,
                    exerciseSetIndex)
            }}
            setExerciseStatus={props.setExerciseStatus}
        />

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={trainingDay.exercises}
                renderItem={exerciesesRender}
                keyExtractor={(_item, index) => keyExtractor(props.currentProgramIndex, props.currentTrainingDayIndex, index)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    text: {
        textAlign: "center",
    }
});

export default Program