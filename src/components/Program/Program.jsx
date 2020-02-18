import React, { useEffect, useRef } from 'react';
import { Dimensions, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Exercise from './Exercise'
import { exerciseStatus } from '../../constants/contants'
function Program(props) {
    const { programIndex } = props.route.params
    const { exercises } = props.programs[programIndex]
    const exerciseBoxHeight = (Dimensions.get("window").height / exercises.length) + 53 // 53 magic number

    const currentExerciseIndex = props.programs[programIndex].exercises
        .map((exercise, exerciseIndex) => ({ ...exercise, exerciseIndex }))
        .filter(exercise => exercise.status !== exerciseStatus.COMPLETED.name)[0].exerciseIndex

    const flatListRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            flatListRef.current.scrollToIndex({ animated: true, index: currentExerciseIndex })
        }, 300)
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={exercises}
                renderItem={({ item: exercise, index: exerciseIndex }) => <Exercise
                    key={`exercise-${exercise}-${exerciseIndex}`}
                    exerciseIndex={exerciseIndex}
                    exercise={exercise}
                    expanded={currentExerciseIndex === exerciseIndex}
                    toggleCompletedSet={(exerciseIndex)}
                    toggleCompletedExerciseSet={(exerciseSetIndex) =>
                        props.toggleCompletedExerciseSet(programIndex, exerciseIndex, exerciseSetIndex)}
                    setExerciseStatus={props.setExerciseStatus}
                />}
                keyExtractor={(item, index) => `exercise-${item.name}-${index}`}
                windowSize={Dimensions.get("window").height}
                getItemLayout={(data, index) => ({
                    length: exerciseBoxHeight,
                    offset: (exerciseBoxHeight * index),
                    index
                })}
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