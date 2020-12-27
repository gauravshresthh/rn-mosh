import React from 'react';
import { View, Text } from 'react-native';

const AppText = (props) => {
	return (
		<View>
			<Text>{props.children}</Text>
		</View>
	);
};

export default AppText;
