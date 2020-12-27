import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppText = (props) => {
	return (
		<Text style={styles.text}>
			{props.children}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 40,
		fontFamily: 'Roboto',
	},
});

export default AppText;
