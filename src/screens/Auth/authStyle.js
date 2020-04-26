import { Row } from "native-base";

const styles = {
    topTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topText: {
        fontSize: 14
    },
    welcomeText: {
        fontWeight: 'bold',
        fontSize: 21,
    },
    done: {
        borderColor: "#fff",
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor:"#42c762"
    }
}

export default styles;