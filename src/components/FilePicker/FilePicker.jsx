import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';

import { jsonToTemplate } from './jsonToTemplate'

function FilePicker(props) {
    const onPress = async () => {
        try {
            const { type, uri } = await DocumentPicker.getDocumentAsync({})
            if (type === "cancel") {
                return
            }

            const csv = await FileSystem.readAsStringAsync(uri)
            const trainingTemplate = jsonToTemplate(Papa.parse(csv).data)
            props.appendProgram(trainingTemplate)

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <View>
            <Button icon="deathly-hallows" mode="text" onPress={onPress}>
                Add Plan
            </Button>
        </View>
    )
}

export default FilePicker