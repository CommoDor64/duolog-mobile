import React, { useState } from 'react';
import { DataTable, Checkbox } from 'react-native-paper';

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

export default ExerciseSet