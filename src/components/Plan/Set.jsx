import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable, List, Surface, Checkbox } from 'react-native-paper';

function Set(props) {
    const { set } = props
    const setCompleted = (completed) => {

        let action = {
            type: 'toggleCompleteExercise',
            payload: { ...set, completed }
        }

        props.actions.setPlans(plans)
    }
    return (
        <DataTable.Row>
            <DataTable.Cell>{`${set.intensity}${set.metric}`}</DataTable.Cell>
            <DataTable.Cell>{set.reps}</DataTable.Cell>
            <Checkbox.Android
                status={set.completed ? 'checked' : 'unchecked'}
                onPress={() => setCompleted(!set.completed)}
            />
        </DataTable.Row >
    )
}

export default Set