import {
	Button,
	NativeSyntheticEvent,
	StyleSheet,
	Text,
	TextInput,
	TextInputChangeEventData,
	View,
} from "react-native";
import React, { ChangeEvent, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { NavigatorStackParamList } from "../Components/NavigationComp";

type Props = {
	navigation: NavigationProp<NavigatorStackParamList>;
};

const DetailScreen = ({ navigation }: Props) => {
	const [value, setValue] = useState<{ name: string; email: string }>({
		name: "",
		email: "",
	});
	const handleOnChange = (
		e: NativeSyntheticEvent<TextInputChangeEventData>
	) => {
		setValue((prev) => ({ ...prev, name: e.nativeEvent.text }));
	};
	const handleOnChangeText = (text: string) => {
		setValue((prev) => ({ ...prev, email: text }));
	};
	const handleClear = () => {
		setValue({
			name: "",
			email: "",
		});
	};
	return (
		<View>
			<Text>Fill this form</Text>
			<TextInput
				value={value.name}
				style={styles.input}
				onChange={handleOnChange}
				cursorColor="black"
				placeholder="name"
				textContentType="name"
				selectionColor="#999898"
			/>
			<TextInput
				value={value.email}
				style={styles.input}
				onChangeText={handleOnChangeText}
				cursorColor="black"
				placeholder="email"
				textContentType="emailAddress"
				inputMode="email"
			/>
			<Button
				title="clear"
				color="#ff0000"
				onPress={handleClear}
			/>
			<Button
				title="submit"
				color="#00b3ff"
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});
