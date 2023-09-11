import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import ImageComp from "./Components/ImageComp";
import NavigationComp from "./Components/NavigationComp";

export default function App() {
	const handlNavigate = () => {};
	return (
		<>
			{/* <View>
				<Button
					onPress={handlNavigate}
					title="about"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View> */}
			<NavigationComp />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
