import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    ////////////header///////////////
    icon:{
		color:"#fff",
		fontSize:25
	},
	headerText:{
		color:"#fff",
        fontSize:25,
        fontWeight: 'bold',
        fontFamily: 'cursive'
    },
    ////////All categories//////////
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    leftTitle: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    rightTitle: {
        fontSize: 14,
        color: '#42c762'
    },
    circleCardView: {
        marginRight: 5,
        width: 100,
        paddingLeft: 10
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
        width: 110
    },
    logo: {
        flex: 1,
        aspectRatio: 1.5,
        resizeMode: 'contain'
    },
	footerContainer:{
		backgroundColor:"#fff",
       
	},
	subText:{
		fontSize:8
	}
});

export default styles;