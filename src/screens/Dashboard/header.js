import React from "react";
import { Text } from "react-native";
import { Header, Left, Body, Right, Button} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import styles from "./DashboardStyle.js";

export const HeaderComponent =  ()=>{
	return (
		<Header style={{backgroundColor:"#42c762", height: 70}} >
			<Left>
				<Button transparent>
					<Ionicons name="md-menu" style={styles.icon} />
				</Button>
			</Left>
			<Body style={{alignItems: 'space-around'}}>
                <Text style={styles.headerText}>Fryo</Text>
			</Body>

			<Right>
				<Button transparent >
					<Ionicons name="ios-search" style={styles.icon} />
				</Button>
                <Button transparent>
                <EvilIcons name="bell" style={styles.icon} />
				</Button>
			</Right>
		</Header>
	);
}

export default HeaderComponent;