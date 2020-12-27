import React from 'react';
import {
	View,
	StatusBar,
	Text,
	StyleSheet,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './app/components/AppText.android';
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
				<AppText>I love React Native</AppText>
				<MaterialCommunityIcons
					name='email'
					size={40}
					color='#2c698d'
				/>
			</View>
		</>
	);
}
