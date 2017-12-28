import {Alert,ToastAndroid,Platform} from 'react-native';
const showShort=(content,isAlert)=>{
    if(!content){
        return;
    }
    if(isAlert || Platform.OS === 'ios'){
        Alert.alert('提示',content.toString());
    }else{
        ToastAndroid.show(content.toString(),ToastAndroid.SHORT); //ToastAndroid.SHORT提示信息持续的时间
    }
};
const showLong= (content,isAlert)=>{
    if(isAlert || Platform.OS === 'ios'){
        Alert.alert('提示',content.toString());
    }else{
        ToastAndroid.show(content,toString(),ToastAndroid.LONG); //ToastAndroid.LONG提示信息持续的时间

    }
}
export default {
    showShort,
    showLong
}

