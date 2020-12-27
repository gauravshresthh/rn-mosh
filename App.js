import React from 'react';
import {
	View,
	StatusBar,
	Text,
	StyleSheet,
} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import Card from './app/components/Card';

export default function App() {
	return (
		<>
			<StatusBar hidden />
			<View
				style={{
					backgroundColor: '#F0F8FF',
					padding: 20,
					paddingTop: 100,
					flex: 1,
				}}
			>
				<Card
					title='Red jacket for sale'
					subTitle='$100'
					image={require('./app/assets/jacket.jpg')}
				/>
			</View>
		</>
	);
}
