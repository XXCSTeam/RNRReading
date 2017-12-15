import React, { Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class AddTodo extends Component {
    constructor (props){
        super(props);
        this.state=({
            text:''
        })
    }
    render() {
        return (
            <View style={{margin:20,marginTop:50,marginBottom:Platform.OS=='android'?20:50,flexDirection:'row'}}>
                    <TextInput
                        style={{flex:3,height: 40, borderColor: '#000', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />

                        <TouchableOpacity onPress={()=>{this.handleClick()}}  style={{flex:1,marginLeft:20}}>
                            <View style={{borderRadius:5,alignItems:'center',justifyContent:'center',width:50,height:30,backgroundColor:'#EEEEEE'}}>
                                <Text>
                                    添加
                                </Text>
                            </View>

                        </TouchableOpacity>
            </View>
        )
    }

    handleClick(){
        const text = this.state.text.trim();
        text !='' && this.props.onAddClick(text);
        this.setState({text:''});
    }
}
