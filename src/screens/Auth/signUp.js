import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { AuthCard, Input } from "../../common";
import styles from "./authStyle.js"

const SignUp = () => {
    return (
        <AuthCard>
            <View style={styles.topTextView}>
                <Text style={[styles.topText]}>Sign Up</Text>
                <Text style={[styles.topText, { color: "#42c762" }]}>SignUp</Text>
            </View>

            <View style={{ marginTop: 24 }}>
                <Text style={styles.welcomeText}>Welcome to Fryo!</Text>
                <Text style={{ color: '#C9CACA', fontSize: 12 }}>Let's get started</Text>
            </View>

            <View>
                <View style={{ marginTop: 10 }}>
                    <Input placeholder="Username" />
                    <Input placeholder="Full Name" />
                    <Input placeholder="Email Address" />
                    <Input placeholder="Password" />
                </View>
            </View>

            <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: "flex-end" }}>
                <View style={styles.done}>
                    <Icon name="arrowright" size={20} color="#fff" />
                </View>
            </View>

        </AuthCard>
    )
}

export default SignUp;
