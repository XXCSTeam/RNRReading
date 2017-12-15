import React, { Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return(
                <View style={{alignItems:'center',justifyContent:'center',width:50,height:30,marginBottom:10}}>
                    <Text>
                        {name}
                    </Text>
                </View>

            )
        }

        return (

                <TouchableOpacity onPress={e => {
                    e.preventDefault()
                    this.props.onFilterChange(filter)
                }} >
                    <View style={{borderRadius:5,alignItems:'center',justifyContent:'center',width:50,height:30,backgroundColor:'#EEEEEE',marginBottom:10}}>
                    <Text>
                        {name}
                    </Text>
                    </View>
                </TouchableOpacity>

        )
    }

    render() {
        return (
            <View style={{marginLeft:20}}>
                <View>


                    {this.renderFilter('SHOW_ALL', '全部')}
                    {this.renderFilter('SHOW_COMPLETED', '已完成')}
                    {this.renderFilter('SHOW_ACTIVE', '未完成')}
                </View>
            </View>
        )
    }
}

