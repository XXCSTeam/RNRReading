import React, { Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Todo extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onClick}
                style={{
                    backgroundColor: this.props.completed ? 'green' : 'red',
                    height:30,
                    marginBottom:5
                }}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text>
                        {this.props.text}
                    </Text>
                </View>


            </TouchableOpacity>
        )
    }
}
