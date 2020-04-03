import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import TrainingDay from './TrainingDays'
import Exercise from './Exercise'
import { exerciseStatus } from '../../constants/contants'
import { List } from 'react-native-paper';
import storage from '../../storage/storage';
function Program(props) {
    const { currentProgramIndex, currentTrainingDayIndex } = props
    const [trainingDay, setTrainingDay] = useState(props.trainingDay)
    // const exerciseBoxHeight = (Dimensions.get("window").height / trainingDays.length) + 53 // 53 magic number

    // const currentExerciseIndex = trainingDays
    //     .map((trainingDay, trainingDayIndex) => ({ ...trainingDay, trainingDayIndex }))
    //     .filter(trainingDay => trainingDay.status !== exerciseStatus.COMPLETED.name)[0].trainingDayIndex

    // const flatListRef = useRef(null)

    // useEffect(() => {
    //     setTimeout(() => {
    //         flatListRef.current.scrollToIndex({ animated: true, index: currentExerciseIndex })
    //     }, 300)
    // }, [props.trainingDay])

    useEffect(() => {
        setTrainingDay(props.trainingDay)
        console.log(props.trainingDay)
        return () => { storage.setUserData() }
    }, [props])
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