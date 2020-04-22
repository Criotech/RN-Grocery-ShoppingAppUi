import React from 'react';
import { View } from 'react-native';

const AuthCard = (props) => {
    const { containerStyle } = styles
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        marginLeft: 0.5,
        marginRight: 0.5,
        backgroundColor: '#ffffff',
        padding: 20
    }
}

export { AuthCard }