import React, { Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <View style={{marginVertical:10,marginHorizontal:20}}>
                <View>
                    {this.props.todos.map((todo, index) =>
                        <Todo {...todo}
                              key={index}
                              onClick={() => this.props.onTodoClick(index)} />
                    )}
                </View>

            </View>
        )
    }
}
