import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Header, Left, Body, Right } from "native-base";
import { Button } from '../../common'
import styles from "./productStyle.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo"

export const Product = ({ navigation, route }) => {
    const { image, tag, name, price } = route.params;
    const [count, setCount] = useState(0);
    return (
        <View style={{ flex: 1 }}>
            <Header style={{ backgroundColor: "#ffffff", height: 50 }} >
                <Left>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                        <FontAwesome5 name="arrow-left" color="#878787" size={16} />
                    </TouchableOpacity>
                </Left>
                <Body style={{ alignItems: 'space-around' }}>
                    <Text style={styles.headerText}>{name}</Text>
                </Body>

                <Right>

                </Right>
            </Header>



            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <View style={styles.centerBox}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>{price}</Text>

                    <View style={{ flexDirection: 'row', marginTop: 12 }}>
                        <FontAwesome name="star" color="orange" size={22} style={{ marginRight: 5 }} />
                        <FontAwesome name="star" color="orange" size={22} style={{ marginRight: 5 }} />
                        <FontAwesome name="star" color="orange" size={22} style={{ marginRight: 5 }} />
                        <FontAwesome name="star" color="orange" size={22} style={{ marginRight: 5 }} />
                        <FontAwesome name="star-o" color="orange" size={22} />
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 15 }}>
                        <Text style={{ color: '#878787' }}>Quantity</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                        <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.plus}>
                            <Entypo name="minus" color="black" size={24} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 5, marginRight: 15, paddingTop: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{count}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.plus}>
                            <Entypo name="plus" color="black" size={24} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: 200 }}>
                        <View style={{ marginTop: 15 }}>
                            <Button bgColor="#42c762" bdColor="#fff" textColor="#fff">
                                <Text style={{ fontSize: 14 }}> Buy Now </Text>
                            </Button>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Button bdColor="#42c762" textColor="#42c762">
                                <Text style={{ fontSize: 14 }}> Add to Cart </Text>
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={styles.imageBox}>
                    <View style={styles.count} >
                        <Text style={{ color: "#fff", fontSize: 12 }}>{tag}</Text>
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.logo}
                            source={image}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Product;