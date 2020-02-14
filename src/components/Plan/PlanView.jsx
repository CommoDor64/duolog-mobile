import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Exercise from './Exercise'

function PlanView(props) {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                {props.exercises.map((exercise, index) => (
                    <Exercise
                        index={index}
                        exercise={exercise}
                        toggleCompletedSet={(index)}
                        toggleCompletedExerciseSet={props.toggleCompletedExerciseSet}
                        setExerciseStatus={props.setExerciseStatus}
                    />))}
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
    },
    text: {
        textAlign: "center",
    }
});

export default PlanView