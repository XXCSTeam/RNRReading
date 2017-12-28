import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ToastUtil from '../../utils/ToastUtil';


import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Keyboard
} from 'react-native';


class Feedback extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '建议',
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
        this.feedbackText = '';
    }

    componentDidMount() {
        this.feedbackText = '';
        this.props.navigation.setParams({handleCheck: this.onActionSelected});
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    ref={(ref) => {
                        this.textInput = ref;
                    }}
                    style={styles.textInput}
                    placeholder="请写下您宝贵的意见或建议，与iReading一起进步！"
                    placeholderTextColor="#aaaaaa"
                    underlineColorAndroid="transparent"
                    numberOfLines={200}
                    multiline
                    autoFocus
                    onChangeText={(text) => {
                        this.feedbackText = text;
                    }}
                />
            </View>
        );
    }


    onActionSelected = () => {
        if (this.feedbackText === undefined || this.feedbackText.replace(/\s+/g, '') === '') {
            ToastUtil.showShort('请填写建议内容哦~');
            Keyboard.dismiss();//把弹出的键盘收回去
        } else {
            ToastUtil.showShort('您的问题已反馈，我们会及时跟进处理');
            this.textInput.clear();
            this.feedbackText = '';
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
        textAlignVertical: 'top'
    }
});

export default Feedback;





