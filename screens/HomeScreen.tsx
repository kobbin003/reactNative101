import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import ImageComp from "../Components/ImageComp";
import { NavigationProp } from "@react-navigation/native";
import { NavigatorStackParamList } from "../Components/NavigationComp";
type HomeScreenType = {
	navigation: NavigationProp<NavigatorStackParamList>;
};
const HomeScreen: FC<HomeScreenType> = ({ navigation, ...rest }) => {
	const handleNavigate = () => {
		navigation.navigate("About");
	};
	console.log("nav-props", rest);
	return (
		<View>
			<Text>Open up App.tsx to start working on your app!!!</Text>
			<ImageComp />
			<View>
				<Button
					onPress={() => navigation.navigate("About")}
					title="about"
					color="#841584"
					accessibilityLabel="Learn more about this App"
				/>
			</View>
			<View>
				<Button
					onPress={() => navigation.navigate("Detail")}
					title="detail"
					color="#1aacbc"
					accessibilityLabel="Fill your details"
				/>
			</View>
		</View>
	);
};

export default HomeScreen;
