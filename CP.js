import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class CP extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			show: false,
		};
		this.timer = null;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				show: !this.state.show,
			});
		}, 100);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<View>
				<Text>
					{this.props.name}
				</Text>
				{this.state.show &&
					<Text>
						闪烁
					</Text>
				}
				<Text>
						不闪烁
					</Text>
			</View>
		);
	}
}