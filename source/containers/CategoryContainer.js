import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../pages/Category/Category';
import Button from '../components/Button';
import {
    chooseCategory, CHOOSE_CATEGORY, CANCLE_CATEGORY, cancleCategory,
    VisibilityFilters
} from '../actions';
import {connect} from 'react-redux';
import ToastUtil from '../utils/ToastUtil';





import {
    Platform,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter
} from 'react-native';

let maxCategory = 5;//默认最多5个类别，远端可配置

class CategroContainer extends Component {
    static navigationOptions = ({ navigation,screenProps }) => ({
        title:'分类',
        tabBarIcon: ({tintColor})=>(
            <Icon name='md-pricetags' size={25} color={tintColor}/>
        ),
        headerRight: (
            <Icon.Button
                name='md-checkmark'
                backgroundCoor='transparent'
                underlayColor='transparent'
                activeOpacity={0.8}
                onPress={()=>{
                    navigation.state.params? navigation.state.params.clickBtn():()=>{};

                }}
                style={{backgroundColor:'#3e9ce9'}}
            />
        )
    });

    constructor(props){
        super(props);
        this.state={
            num:0
        }

    }
    componentDidMount(){
        // 处理数据源
        this.props.navigation.setParams({clickBtn:this.clickBtn})
    }
    componentWillReceiveProps(){


    }
    render() {
        const {categoryList,dispatch} = this.props;

        return (
            <Category
                categoryList={categoryList}
                chooseCategory={(index)=>dispatch(chooseCategory(index))}
                cancleCategory={(index)=>dispatch(cancleCategory(index))}
            />
        )
    }
    // 点击确定按钮
    clickBtn=()=>{
        if(this.props.totalNum>maxCategory){
            ToastUtil.showShort(`不要超过${maxCategory}个类别哦`);
            return;
        }
        const { navigate } = this.props.navigation;
        DeviceEventEmitter.emit('changeCategory');
        navigate('Main');
    }

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    sureBtn:{
        backgroundColor:'#3e9ce9',
        margin:10,
        padding:10,
        borderRadius:10
    },
    btnText:{

    }
})

function category(state) {
    return {
        categoryList:state.category,
        totalNum:((state.category).filter(todo => todo.choose)).length


    }

}
export default connect(category)(CategroContainer);
