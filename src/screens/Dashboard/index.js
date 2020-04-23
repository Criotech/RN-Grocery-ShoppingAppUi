import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import { CircleCard, BoxCard } from '../../common'
import Header from "./header"
import Footer from './footer'
import styles from "./DashboardStyle.js";

const AllCategories = [
    {
        name: 'Coffee',
        icon: "coffee"
    },
    {
        name: "Creamery",
        icon: "ice-cream"
    },
    {
        name: "Snaks",
        icon: "hotdog"
    },
    {
        name: "Dishes",
        icon: "utensil-spoon"
    },
    {
        name: 'Coffe',
        icon: "coffe"
    },
    {
        name: "Creamery",
        icon: "ice-cream"
    }
]

const HotDeal = [
    {
        image: require('../../../images/2.png'),
        like: true,
        tag: "-10.0%",
        name: 'Akara',
        price: '$25'
    },
    {
        image: require('../../../images/3.png'),
        like: false,
        tag: "-7.0%",
        name: 'Hamburger',
        price: '$100'
    },
    {
        image: require('../../../images/1.png'),
        like: true,
        tag: "-5.0%",
        name: 'Strawberry',
        price: '$50'
    },
    {
        image: require('../../../images/5.png'),
        like: false,
        tag: "-8.0%",
        name: 'pasta',
        price: '$50'
    }
]

const DrinksParol = [
    {
        image: require('../../../images/6.png'),
        like: true,
        tag: "-5.0%",
        name: 'Cocacola',
        price: '$100'
    },
    {
        image: require('../../../images/7.png'),
        like: false,
        tag: "-10.0%",
        name: 'Lemonade',
        price: '$1000'
    },
    {
        image: require('../../../images/8.png'),
        like: true,
        tag: "-5.0%",
        name: 'Voldka',
        price: '$450'
    },
    {
        image: require('../../../images/9.png'),
        like: false,
        tag: "-7.0%",
        name: 'Tuquila',
        price: '$500'
    }
]

export const Dashboard = () => {
    return (
        <View style={{flex: 1}}>
            <Header />
            <ScrollView >
                {/* All Categories */}
                <View style={{ margin: 20 }}>
                    <View>
                        <View style={styles.title}>
                            <Text style={styles.leftTitle}>All Categories</Text>
                            <Text style={styles.rightTitle}>View all ></Text>
                        </View>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            AllCategories &&
                            AllCategories.map((item, index) => {
                                return (
                                    <View style={styles.circleCardView} key={index}>
                                        <CircleCard>
                                            <FontAwesome5 style={{ color: "#2e242c" }} name={item.icon} size={30} />
                                        </CircleCard>
                                        <Text style={{ textAlign: 'center', marginTop: 10, color: "#878787", fontWeight: 'bold' }}>{item.name} ></Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>

                {/* Hot Deals */}
                <View style={{ margin: 20, marginTop: 20 }}>
                    <View>
                        <View style={styles.title}>
                            <Text style={styles.leftTitle}>Hot Deals</Text>
                            <Text style={styles.rightTitle}>View all ></Text>
                        </View>

                    </View>
                    <ScrollView contentContainerStyle={{ padding: 20 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            HotDeal && HotDeal.map((item, index) => {
                                return (
                                    <View key={index} style={{ marginRight: 20 }}>
                                        <BoxCard >
                                            <View style={styles.count} >
                                                <Text style={{ color: "#fff", fontSize: 12 }}>{item.tag}</Text>
                                            </View>

                                            <View style={styles.imageContainer}>
                                                <Image
                                                    style={styles.logo}
                                                    source={item.image}
                                                />
                                            </View>
                                            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: "flex-end" }}>
                                                <AntDesign name={item.like ? 'heart' : 'hearto'} size={25} color={item.like ? 'red' : '#878787'} />
                                            </View>
                                        </BoxCard>

                                        <View style={{ marginTop: 20 }}>
                                            <Text style={{ fontSize: 15 }}>{item.name}</Text>
                                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{item.price}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </ScrollView>
                </View>

                {/* Drinks Parol */}
                <View style={{ margin: 20, marginTop: 20 }}>
                    <View>
                        <View style={styles.title}>
                            <Text style={styles.leftTitle}>Drinks Parol</Text>
                            <Text style={styles.rightTitle}>View all ></Text>
                        </View>

                    </View>
                    <ScrollView contentContainerStyle={{ padding: 20 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            DrinksParol && DrinksParol.map((item, index) => {
                                return (
                                    <View key={index} style={{ marginRight: 20 }}>
                                        <BoxCard >
                                            <View style={styles.count} >
                                                <Text style={{ color: "#fff", fontSize: 12 }}>{item.tag}</Text>
                                            </View>

                                            <View style={styles.imageContainer}>
                                                <Image
                                                    style={styles.logo}
                                                    source={item.image}
                                                />
                                            </View>
                                            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: "flex-end" }}>
                                                <AntDesign name={item.like ? 'heart' : 'hearto'} size={25} color={item.like ? 'red' : '#878787'} />
                                            </View>
                                        </BoxCard>

                                        <View style={{ marginTop: 20 }}>
                                            <Text style={{ fontSize: 15 }}>{item.name}</Text>
                                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{item.price}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </ScrollView>
                </View>
                
            </ScrollView>
        
            <Footer />
        </View>
    );
}

export default Dashboard;