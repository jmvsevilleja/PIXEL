import React from "react";
import {StyleSheet, View} from 'react-native';
import Row from "./row";

// takes in array of arrays as props
// returns a bunch of Row components
export default function Grid(props) {
    const grid = props.colors.map((colors, index) => {
        return (
            <Row key={index} colors={colors} index={index} update={props.update} />
        );
    });
    return <View style={styles.grid}>{grid}</View>;
}
const styles = StyleSheet.create({
    grid: {
        borderWidth: 1,
        borderColor: '#CCCCCC'

    },
});