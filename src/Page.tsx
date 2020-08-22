import React from "react";
import { Thumbnail } from "native-base";
import { StyleSheet, Text } from "react-native";
import {
	Button,
	Footer,
	FooterTab,
	Content,
	Container,
	Icon,
	Header,
	Body,
	Title,
} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
	icon: {
		padding: 5,
		color: "#ffffff",
	},
	flex: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	footerText: {
		color: "#ffffff",
	},
});

const Page = ({ navigation, children }) => (
	<Container>
		<Header style={{ backgroundColor: "#5e97da" }}>
			<Body style={styles.flex}>
				<Title>App</Title>
				<Button transparent>
					<Thumbnail source={{ uri: "https://cdn.discordapp.com/attachments/347043966476353538/746779456152272916/unknown.png" }} style={{ width: 45, height: 45 }} />
				</Button>
			</Body>
		</Header>
		<Content>
			{children}
		</Content>
		<Footer>
			<FooterTab style={{ backgroundColor: "#5e97da" }}>
				<Button vertical onPress={() => navigation.navigate("Share")}>
					<FontAwesome5 name="share" size={20} style={styles.icon} />
					<Text adjustsFontSizeToFit style={styles.footerText}>Share</Text>
				</Button>
				<Button vertical onPress={() => navigation.navigate("Home")}>
					<FontAwesome5 name="home" size={20} style={styles.icon} />
					<Text adjustsFontSizeToFit style={styles.footerText}>Home</Text>
				</Button>
				<Button vertical onPress={() => navigation.navigate("Friends")}>
					<FontAwesome5 name="users" size={20} style={styles.icon} />
					<Text adjustsFontSizeToFit style={styles.footerText}>Friends</Text>
				</Button>
				<Button vertical onPress={() => navigation.navigate("Map")}>
					<FontAwesome5 name="map" size={20} style={styles.icon} />
					<Text adjustsFontSizeToFit style={styles.footerText}>Map</Text>
				</Button>
			</FooterTab>
		</Footer>
	</Container>
);

export default Page;
