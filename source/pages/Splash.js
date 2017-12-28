import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


class Splash extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
               <Text>这是Splash页面</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Splash;