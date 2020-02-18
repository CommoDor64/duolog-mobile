import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable, List, Surface, Checkbox } from 'react-native-paper';
import { exerciseStatus } from '../../constants/contants'


function Exercise(props) {
    const { name, sets, status } = props.exercise
    const [expanded, setExpanded] = useState(props.expanded);
    return (
        <Surface style={styles.item} >
            <List.Accordion
                title={name}
                expanded={expanded}
                description={exerciseStatus[status].text}
                onPress={() => setExpanded(!expanded)}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Intensity</DataTable.Title>
                        <DataTable.Title>Reps</DataTable.Title>
                        <DataTable.Title></DataTable.Title>
                    </DataTable.Header>
                    {sets.map((exerciseSet, exerciseSetIndex) => (
                        <DataTable.Row key={`set-data-row-${exerciseSet}-${exerciseSetIndex}`}>
                            <DataTable.Cell>{`${exerciseSet.intensity}${exerciseSet.unit}`}</DataTable.Cell>
                            <DataTable.Cell>{exerciseSet.reps}</DataTable.Cell>
                            <Checkbox.Android
                                status={exerciseSet.completed ? 'checked' : 'unchecked'}
                                onPress={() => props.toggleCompletedExerciseSet(exerciseSetIndex)}
                            />
                        </DataTable.Row >))}
                </DataTable>
            </List.Accordion>
        </Surface>
    );
}



const styles = StyleSheet.create({
    item: {
        margin: 4,
        elevation: 4,
    }
});

export default Exercise;