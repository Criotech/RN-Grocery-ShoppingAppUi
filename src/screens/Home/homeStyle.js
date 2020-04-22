import { Colors } from "../../common";

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        paddingLeft: 10,
        height: 150,
        width: 250
    },
    logo: {
        flex: 1,
        aspectRatio: 1.5,
        resizeMode: 'contain'
    },
    subView: {
        marginTop: 15,
        width: 250
    },
    appName: {
        fontFamily: 'cursive',
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 2,
        textAlign: 'center',
        color: "#878787"
    }
}

export default styles;