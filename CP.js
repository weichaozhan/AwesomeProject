import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class CP extends Component {
	render() {
		return (
			<View>
				<Text>
					{this.props.name}
				</Text>
			</View>
		);
	}
}