
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import PlanList from './PlanList';
import Progress from './Progress'

function HomeView({ navigation }) {
    const plans = [1, 2, 3, 4, 5].map(item => ({ name: "plan" + item, date: "some date" + item }))

    return (<SafeAreaView >
        <Surface style={styles.surface}>
            <Progress />
        </Surface>
        <PlanList plans={plans} navigation={navigation} />
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        margin: 4,
        elevation: 4,
    },
});

export default HomeView;