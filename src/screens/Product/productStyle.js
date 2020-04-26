import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    ////////////header///////////////
    headerText: {
        color: "#000000",
        fontSize: 18,
        fontWeight: 'bold',
    },
    centerBox: {
        width: windowWidth / 1.3,
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
        paddingTop: 60,
        marginTop: 80
    },
    name: {
        fontSize: 16
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    plus: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        marginRight: 10,
        borderWidth: 0.1
    },
    imageBox: {
        position: 'absolute',
        top: 60,
        zIndex: 5,
        padding: 10,
        height: 150,
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
        borderWidth: 0.5,
        borderColor: "#878787"
    },
    count: {
        padding: 3,
        backgroundColor: '#878787',
        width: 50,
        paddingLeft: 5,
        borderRadius: 15,
    },
    imageContainer: {
        height: 100,
        width: 120
    },
    logo: {
        flex: 1,
        aspectRatio: 1.5,
        resizeMode: 'contain'
    },

})

export default styles;