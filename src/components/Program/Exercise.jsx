import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable, List, Surface, Checkbox, TextInput } from 'react-native-paper';
import { exerciseStatus } from '../../constants/contants'


function Exercise(props) {
    const [exercise, setExercise] = useState(props.exercise)
    const [status, setStatus] = useState(props.exercise.status)
    const [expanded, setExpanded] = useState(props.expanded);
    const [notes, setNotes] = useState('')
    const right = ({ color }) =>
        <View>
            <Text>{exerciseStatus[status].text}</Text>
            <Text>{exercise.sets.length + "sets"}</Text>
        </View>
    return (
        <Surface style={styles.item} >
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
                                props.toggleCompletedExerciseSet(exerciseSetIndex)
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


function ExerciseSet(props) {
    const { exerciseSetIndex, intensity, unit, reps } = props
    const [completed, setCompleted] = useState(props.completed)
    return (
        <DataTable.Row key={`set-data-row-${Date.now()}-${exerciseSetIndex}`}>
            <DataTable.Cell>{`${intensity}${unit}`}</DataTable.Cell>
            <DataTable.Cell>{reps}</DataTable.Cell>
            <Checkbox.Android
                status={completed ? 'checked' : 'unchecked'}
                onPress={() => {
                    setCompleted(!completed)
                    props.toggleCompletedExerciseSet()
                }}
                color='#6200ee'
            />
        </DataTable.Row >)
}
const styles = StyleSheet.create({
    item: {
        margin: 8,
        elevation: 4,
        borderRadius: 8
    }
});

export default Exercise;