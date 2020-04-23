import React from "react";
import { Text } from "react-native";
import { Footer, FooterTab, Button} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./DashboardStyle";


export const FooterComponent =  ({logo})=>{

	return (
		<Footer>
			<FooterTab style={styles.footerContainer} >
							<Button >
								<MaterialCommunityIcons size={22} name='truck-delivery' color="#42c762" />
								<Text style={{fontSize:10, color:"#42c762"}}>Delivery</Text>
							</Button>
							<Button >
								<FontAwesome5 size={22} name='shopping-cart' color="grey" />
								<Text style={{fontSize:10, color:"grey"}}>Shopping Cart</Text>
							</Button>
							<Button >
								<FontAwesome5 size={22} name='heart-o' color="grey" />
								<Text style={{fontSize:10, color:"grey"}}>Favorites</Text>
							</Button>
							<Button >
								<Ionicons size={22} name='md-person' color="grey" />
								<Text style={{fontSize:10, color:"grey"}}>Profile</Text>
							</Button>
							<Button >
								<Ionicons size={22} name='md-settings' color="grey" />
								<Text style={{fontSize:10, color:"grey"}}>Settings</Text>
							</Button>
			</FooterTab>
		</Footer>
	);
}

export default FooterComponent;
