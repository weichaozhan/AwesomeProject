import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert, TouchableHighlight, FlatList, SectionList} from 'react-native';

export default class CP extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			show: true,
			text: '这是一个输入框',
		};
		this.timer = null;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				show: !this.state.show,
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	changeText(text) {
		this.setState({
			text,
		});
	}

	getAPI() {
		fetch('http://192.168.1.144:3000/api/admin', {
			method: 'get',
		})
			.then(res => {				
				Alert.alert(res._bodyText);
				console.log(res);
			});
	}

	render() {
		return (
			<View>
				<Button 
					title="点我"
					color="purple"
					onPress={() => {
						this.getAPI();
					}}
				/>
				<TouchableHighlight onPress={() => {
					Alert.alert('点击了按钮 TouchableHighlight！');
				}} style={{height: 30, margin: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}} underlayColor="yellow">
          <Text style={{color: '#afafaf', fontWeight: 'bold'}}>TouchableHighlight</Text>
        </TouchableHighlight>
				<Text>
					{this.props.name}
				</Text>
				<View width={200} height={80} style={styles.bgGray}>
					<Text style={[styles.bigYellow, !this.state.show && styles.hidden]}>
						闪烁
					</Text>
				</View>
				<TextInput
					style={{margin: 10,height: 50, backgroundColor: 'orange'}}
					placeholder="这是一个输入框"
					onChangeText={(text) => {
						this.changeText(text);
					}}
				/>
				<Text>
					我是输入内容：{this.state.text}
				</Text>
				<FlatList
					data={[
						{
							key: '1',
							name: 'a',
						},
						{
							key: '2',
							name: 'b',
						},
						{
							key: '3',
							name: 'c',
						},
					]}
					renderItem={({item}) => <Text>{`${item.key}、${item.name}`}</Text>}
				/>
				<SectionList
					sections={[
						{
							title: 'First',
							data: [
								{
									key: 11,
									name: 'a',
								},
								{
									key: 12,
									name: 'b',
								},
								{
									key: 13,
									name: 'c',
								},
							],
						},
						{
							title: 'Second',
							data: [
								{
									key: 21,
									name: 'a',
								},
								{
									key: 22,
									name: 'b',
								},
								{
									key: 23,
									name: 'c',
								},
							],
						}
					]}
					renderItem={({item}) => <Text>{item.key}、{item.name}</Text>}
					renderSectionHeader={({section}) => <Text>{section.title}</Text>}
					keyExtractor={(item, index) => index}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bigYellow: {
		fontSize: 28,
		color: 'yellow',
	},
	hidden: {
		opacity: 0,
	},
	bgGray: {
		backgroundColor: 'gray',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});