import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const CustomButton = (props) => {
    // let {title='',style="",onPress} = props
    return (
        <View>
            <TouchableOpacity style={props.style} onPress={props.onPress} >
                <Text style={{ alignSelf: 'center', marginTop: 12, fontSize: 20, fontWeight: "bold" }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    touchableStyle: {
        backgroundColor: colors.themeColor,
        height: 55,
        width: 279,
        alignSelf: 'center',
    }
})

export default CustomButton;