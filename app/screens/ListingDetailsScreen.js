import React from 'react';
import {
	View,
	Image,
	StyleSheet,
} from 'react-native';

import AppText from './../components/AppText';
import colors from '../config/colors';

const ListingDetailsScreen = () => {
	return (
		<View>
			<Image
				style={styles.image}
				source={require('../assets/jacket.jpg')}
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>
					Red Jacket for sale
				</AppText>
				<AppText style={styles.price}>
					$100
				</AppText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
	title: {
		fontWeight: '500',
		fontSize: 20,
	},
	price: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
	},
	detailsContainer: { padding: 20 },
});
export default ListingDetailsScreen;
