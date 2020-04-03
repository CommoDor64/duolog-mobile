import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { List, Surface } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Exercise from './Exercise'
import storage from '../../storage/storage';
import { exerciseStatus } from '../../constants/contants'

function TrainingDays(props) {

    const { currentProgramIndex, trainingDays } = props
    return (
        <View>
            {trainingDays.map((trainingDay, trainingDayIndex) => (
                <Surface
                    style={styles.item}
                >
                    <List.Item
                        key={`trainingDay-item-${currentProgramIndex}-${trainingDayIndex}`}
                        title={trainingDay.day}
                        description={exerciseStatus[trainingDay.status].text}
                        onPress={() => {
                            props.setCurrentTrainingDay(trainingDayIndex)
                            props.navigation.navigate('ProgramView', { trainingDayIndex })
                        }}
                    />
                </Surface>
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    text: {
        textAlign: "center",
    },
    item: {
        margin: 8,
        elevation: 4,
        borderRadius: 8
    }
});

export default TrainingDays