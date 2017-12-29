import React, {Component} from 'react';
// import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';

const Logo = require('../../img/about_logo.png');
const SHOW_API = 'https://www.showapi.com';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';

const READING_REPO = 'https://github.com/attentiveness/reading';
class About extends Component {
    static navigationOptions = {
        title: '关于',
        tabBarIcon: ({tintColor}) => (
            <Icon name='md-information-circle' size={25} color={tintColor}/>
        ),
        headerRight: (
            <Icon.Button
                name='logo-github'
                backgroundCoor='transparent'
                underlayColor='transparent'
                activeOpacity={0.8}
                onPress={() => Linking.openURL(READING_REPO)}
                style={{backgroundColor:'#3e9ce9'}}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image source={Logo} style={styles.logo}/>
                    {/*<Text style={styles.versionText}>{`v${DeviceInfo.getVersion()}`}</Text>*/}
                    <Text style={styles.title}>iReading</Text>
                    <Text style={styles.descrip}>让生活更精彩</Text>
                </View>

                <View style={styles.footContainer}>
                    <Text>免责声明：所有内容均来自:</Text>
                    <TouchableOpacity>
                        <Text>{SHOW_API}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    versionText: {
        fontSize: 14,
        color: '#aaa'
    },
    title: {
        fontSize: 24
    },
    logo: {
        width: 110,
        height: 110
    },
    descrip: {
        fontSize: 20
    },
    footContainer: {
        marginBottom: 40,
        alignItems:'center'
    }
})

export default About;