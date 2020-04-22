import React from 'react';
import { Text, Image } from 'react-native';
import { View } from 'native-base'
import { Button, Colors } from "../../common";

import styles from './homeStyle.js';

const Home = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../images/welcome.png')}
                    />
                </View>

                <View style={styles.subView}>
                    <Text style={styles.appName}>Fryo!</Text>
                    <View style={{marginTop: 15}}>
                        <Button bgColor="#42c762" bdColor="#fff" textColor="#fff">
                            Sign In
                        </Button>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Button bdColor="#42c762" textColor="#42c762">
                            Sign Up
                        </Button>
                    </View>
                    <View style={{marginTop: 20}}>  
                        <Text style={{textAlign: 'center', color: "#C9CACA", fontSize: 12}}>Language  <Text style={{color: 'black', fontWeight: '600'}}>English ></Text></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home;