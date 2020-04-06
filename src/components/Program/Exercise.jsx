import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable, List, Surface, Checkbox, TextInput } from 'react-native-paper';
import { exerciseStatus } from '../../constants/contants'
import ExerciseSet from './ExerciseSet'

function Exercise(props) {
    const [exercise, setExercise] = useState(props.exercise)
    const [status, setStatus] = useState(props.exercise.status)
    const [expanded, setExpanded] = useState(props.expanded);
    const [notes, setNotes] = useState('')
    return (
        <Surface style={styles.item}>
            <List.Accordion
                title={exercise.name}
                description={exerciseStatus[status].text}
                expanded={expanded}
                descriptionNumberOfLines={4}
                onPress={() => setExpanded(!expanded)}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Intensity</DataTable.Title>
                        <DataTable.Title>Reps</DataTable.Title>
                        <DataTable.Title></DataTable.Title>
                    </DataTable.Header>
                    {exercise.sets.map((exerciseSet, exerciseSetIndex) => (
                        <ExerciseSet
                            exerciseSetIndex={exerciseSetIndex}
                            completed={exerciseSet.completed}
                            intensity={exerciseSet.intensity}
                            unit={exerciseSet.unit}
                            reps={exerciseSet.reps}
                            toggleCompletedExerciseSet={() => {
                                props.toggleCompletedExerciseSet(props.exerciseIndex, exerciseSetIndex)
                                setStatus(props.exercise.status)
                            }}
                        />))}
                </DataTable>
                <TextInput
                    mode='flat'
                    label='Notes'
                    value={notes}
                    onChangeText={text => setNotes(text)}
                    style={{ height: 80, backgroundColor: 'white' }}
                />
            </List.Accordion>
        </Surface>
    );
}
const styles = StyleSheet.create({
    item: {
        margin: 8,
        elevation: 4,
        borderRadius: 8
    }
});

export default Exercise;