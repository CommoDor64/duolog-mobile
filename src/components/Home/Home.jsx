
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ProgramScroll from './ProgramScroll';

function Home(props) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ProgramScroll navigation={props.navigation} />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        margin: 4,
        elevation: 4,
    },
});

export default Home;