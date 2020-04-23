import React from 'react';
import { View } from 'react-native';

const BoxCard = (props) => {
    const { containerStyle } = styles
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        height: 180,
        width: 180,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        backgroundColor: '#ffffff',
        padding: 10
    }
}

export { BoxCard }