import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


class WebViewPage extends Component {
    static navigationOptions = {
        title:'详情',
        tabBarIcon: ({tintColor})=>(
            <Icon name='md-home' size={25} color={tintColor}/>

        ),
        headerRight: (
            <Icon.Button
                name='md-share'
                backgroundCoor='transparent'
                underlayColor='transparent'
                activeOpacity={0.8}
                onpress={()=>{}}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>这是WebViewPage页面</Text>
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
export default WebViewPage;