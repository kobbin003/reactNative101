import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import AboutScreen from "../screens/AboutScreen";
export type NavigatorStackParamList = {
	Home: undefined;
	About: undefined;
	Detail: undefined;
};

const Stack = createNativeStackNavigator<NavigatorStackParamList>();

const NavigationComp = () => {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: "Home, hehe" }}
				/>
				<Stack.Screen
					name="About"
					component={AboutScreen}
					// options={{ title: "about" }}
				/>
				<Stack.Screen
					name="Detail"
					component={DetailScreen}
					// options={{ title: "about" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default NavigationComp;
