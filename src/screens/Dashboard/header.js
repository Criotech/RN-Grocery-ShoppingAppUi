import React from "react";
import { Text } from "react-native";
import { Header, Left, Body, Right, Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./DashboardStyle.js";

export const HeaderComponent =  ({logo})=>{
	return (
		<Header style={{backgroundColor:"#42c762"}} >
			<Left>
				<Button transparent>
					<Icon name="bars" style={styles.icon} />
				</Button>
			</Left>
			<Body>
                <Text>Fryo</Text>
			</Body>

			<Right>
				<Button transparent>
					<Icon name="gift" style={styles.icon} />
				</Button>
                <Button transparent>
					<Icon name="gift" style={styles.icon} />
				</Button>
			</Right>
		</Header>
	);
}

export default HeaderComponent;