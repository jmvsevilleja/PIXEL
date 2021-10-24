import React, {useState} from 'react';
import {Button, StyleSheet, SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker'
import Grid from "../components/grid";

const makeArray = size => {
    return Array(size).fill(Array(size).fill("#FFFFFF"));
};

export default function Pixel(props) {

    // store the selected color in state
    const [selected, setSelected] = useState('#FF0000');

    // store the array of colors in state
    const [colors, setColors] = useState(makeArray(8));

    const update = (x, y) => {
        const newArray = [...colors].map((row, index) => {
            // copy so it wont affect the other rows
            let newRow = [...row];
            if (index === y) {
                newRow.splice(x, 1, selected);
            }
            return newRow;
        });
        setColors(newArray);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>PIXEL</Text>
                <Grid colors={colors} update={update} />
                <ColorPicker
                    // ref={r => {this.picker = r}}
                    color={selected}
                    swatchesOnly={false}
                    onColorChangeComplete={setSelected}
                    thumbSize={30}
                    sliderSize={30}
                    noSnap={true}
                    row={false}
                    //swatchesLast={this.state.swatchesLast}
                    swatches={true}
                    discrete={true}
                    style={styles.picker}
                />
                <Button
                    onPress={() => {
                        setColors(makeArray(8))
                    }}
                    title="Clear"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10
    },
    scrollView: {
        marginHorizontal: 20,
    },
    picker: {
        flex: 1,
        borderWidth: 4,
        borderColor: '#CCCCCC',
        padding: 20,
        marginTop: 10,
        marginBottom: 10
    }
});