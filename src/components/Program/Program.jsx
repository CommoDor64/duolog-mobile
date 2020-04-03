import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

// components
import Exercise from './Exercise'
// misc
import storage from '../../storage/storage';

function Program(props) {
    const { currentProgramIndex, currentTrainingDayIndex } = props
    const [trainingDay, setTrainingDay] = useState(props.trainingDay)
    useEffect(() => {
        return () => { storage.setUserData() }
    }, [])
    const TrainingDayRender = ({ item: exercise, index: exerciseIndex }) =>
        <Exercise
            key={`exercise-${exercise}-${exerciseIndex}`}
            exerciseIndex={exerciseIndex}
            exercise={exercise}
            expanded={false}
            toggleCompletedExerciseSet={(exerciseSetIndex) => {
                props.toggleCompletedExerciseSet(
                    currentProgramIndex,
                    currentTrainingDayIndex,
                    exerciseIndex,
                    exerciseSetIndex)
            }}
            setExerciseStatus={props.setExerciseStatus}
        />

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={trainingDay.exercises}
                renderItem={TrainingDayRender}
                keyExtractor={(item, index) => `trainingDay-${Date.now()}-${item.name}-${index}`}
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