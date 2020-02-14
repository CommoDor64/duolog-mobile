import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import { Plan } from './Plan'

function PlanList(props) {
    const onPress = () => { props.navigation.navigate('PlanView') }
    return (
        <View>
            {props.plans.map(({ name, date }) => <Plan key={`planlist-item-${name}`} name={name} date={date} onPress={onPress} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
    }
});

export default PlanList 