import React from "react";
import {StyleSheet, TouchableOpacity, View} from 'react-native';

// takes in array of hex values
// returns a row of pixels
export default function Row(props) {
    const row = props.colors.map((color, index) => {
        return (
            <TouchableOpacity onPress={() => props.update(index, props.index)} key={index}>
                <View style={[styles.pixel, {backgroundColor: color}]}>
                </View>
            </TouchableOpacity>
        );
    });
    return <View style={styles.row}>{row}</View>;
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    pixel: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        backgroundColor: '#FF0000',
        width: 42,
        height: 42
    },
});