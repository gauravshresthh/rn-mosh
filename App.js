import React from 'react';
import {
	View,
	StatusBar,
	Text,
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
	return (
		<>
			<StatusBar hidden />
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontSize: 30,
						fontFamily: 'Roboto',
						color: 'tomato',
						textTransform: 'uppercase',
					}}
				>
					I love React Native
				</Text>
			</View>
		</>
	);
}
