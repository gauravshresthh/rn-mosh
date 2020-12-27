import React from 'react';
import {
	View,
	StatusBar,
	Text,
	StyleSheet,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './app/components/AppText.android';
import AppButton from './app/components/AppButton';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
	return (
		<>
			<StatusBar hidden />
			<WelcomeScreen />
		</>
	);
}
