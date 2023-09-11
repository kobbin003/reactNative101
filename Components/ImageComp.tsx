import { Image, StyleSheet, Text, View } from "react-native";
import { Logs } from "expo";

const compStyle = StyleSheet.create({
	container: {
		backgroundColor: "red",
		height: 50,
		width: 50,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	tinyPic: {
		height: 20,
		width: 20,
	},
});
const ImageComp = () => {
	console.log("comp");
	// console.warn("comp error");
	Logs.enableExpoCliLogging();
	return (
		<View style={compStyle.container}>
			<Image
				source={require("../assets/pacman_ghost.png")}
				style={compStyle.tinyPic}
			/>
			<Image
				source={require("../assets/pacman_ghost.png")}
				style={compStyle.tinyPic}
			/>
		</View>
	);
};
export default ImageComp;
