import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ToastUtil from '../../utils/ToastUtil';


import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Keyboard,
    TouchableHighlight
} from 'react-native';


class Feedback extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '图片',
        tabBarIcon: ({tintColor}) => (
            <Icon name='md-thumbs-up' size={25} color={tintColor}/>

        ),
        headerRight: (
            <Icon.Button
                name='md-checkmark'
                backgroundCoor='transparent'
                underlayColor='transparent'
                activeOpacity={0.8}
                onPress={() => {
                    navigation.state.params.handleCheck();
                }}
                style={{backgroundColor: '#3e9ce9'}}
            />
        )
    })

    constructor(props) {
        super(props);
        this.searchText = '';
        this.contentImg = 'http://image.baidu.com/search/index?tn=baiduimage&fm=result&ie=utf-8&word=';
    }

    componentDidMount() {
        this.searchText = '';
        this.props.navigation.setParams({handleCheck: this.onActionSelected});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={{flex:6,justifyContent:'center'}}>
                        <TextInput
                            ref={(ref) => {
                                this.textInput = ref;
                            }}
                            style={styles.textInput}
                            placeholder="请输入搜索内容！"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            multiline
                            autoFocus
                            onChangeText={(text) => {
                                this.searchText = text;
                            }}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <TouchableHighlight style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={this.onActionSelected}>
                            <Text>搜索</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }


    onActionSelected = (article) => {
        if (this.searchText === undefined || this.searchText.replace(/\s+/g, '') === '') {
            ToastUtil.showShort('请填写搜索内容~');
            Keyboard.dismiss();//把弹出的键盘收回去
        } else {
            // ToastUtil.showShort('您的问题已反馈，我们会及时跟进处理');
            // this.textInput.clear();
            // this.searchText = '';
            article.userName = this.searchText;
            article.contentImg = this.contentImg+this.searchText;
            const { navigate } = this.props.navigation;
            navigate('Web', { article });
            Keyboard.dismiss();//把弹出的键盘收回去
        }
    };


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        padding: 15,
        textAlignVertical: 'center',
    },
    box:{
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:10,
        height:40,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#ccc'
    },
    button:{
        height:50
    }
});

export default Feedback;





