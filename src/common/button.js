import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, bgColor, bdColor, textColor }) => {
    const { buttonStyle, textStyle } = styles
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[buttonStyle, {backgroundColor: bgColor, color: textColor, borderColor:bdColor}]} >
            <Text style={[textStyle, {color: textColor }]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }, 
    buttonStyle: {
        alignSelf: 'stretch',
        borderRadius: 4,
        marginRight: 5,
        marginLeft: 5,
        borderWidth: 1
    }
}

export { Button }