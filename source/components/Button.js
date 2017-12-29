import React,{Component} from 'react';
import {ViewPropTypes, Text, TouchableOpacity} from 'react-native';

class Button extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <TouchableOpacity
                style={this.props.containerStyle}
                onPress={this.props.onPress}
                disabled={this.props.disabled}
                activeOpacity={this.props.activeOpacity}
            >
                <Text style={this.props.style}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

Button.defaultProps={
    onPress:function(){},
    disabled: false,
    activeOpacity: 0.8
}


export default Button;


