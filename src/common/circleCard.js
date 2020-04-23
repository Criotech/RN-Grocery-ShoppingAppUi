import React from 'react';
import { View } from 'react-native';

const CircleCard = (props) => {
    const { containerStyle } = styles
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderColor: "#fff",
        borderWidth: 1,
        height: 90,
        width: 90,
        borderRadius: 45,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        backgroundColor:"#fff"
    }
}

export { CircleCard }