import React from 'react'
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
   const { inputStyle, labelStyle, containerStyle } = styles;
   
   return (
        <View style={containerStyle}> 
            <Text style={labelStyle}>{label}</Text>
              <TextInput 
              secureTextEntry={secureTextEntry}
              autoCorrect={false}
              style={inputStyle}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              />
        </View>
    )
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 15,
        borderWidth: 1,
        borderColor: "#878787",
        borderRadius: 5,
        height: 40,
    }
}

export { Input };
