import React, {Component} from 'react';
import {
    InteractionManager,
    StyleSheet,
    View,
    DeviceEventEmitter,
    ScrollView,
    RefreshControl,
    Alert,
    Text
} from 'react-native';
import Button from '../../components/Button';

let tempTypeIds = [];

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeIds: tempTypeIds
        }
    }

    componentWillMount() {


    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <Text>请选择您感兴趣的1-5个类别</Text>
                </View>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    style={styles.container}
                    horizontal={false}
                >
                    <View style={styles.content}>
                        {
                            this.props.categoryList.map((item, i) => {
                                return (
                                    <Button
                                        containerStyle={[styles.sureBtn,{backgroundColor:item.choose?'#3e9ce9':'#ccc'}]}
                                        style={styles.btnText}
                                        text={item.text}
                                        onPress={() => {
                                            item.choose?this.props.cancleCategory(i):this.props.chooseCategory(i)
                                        }}
                                        activeOpacity={0.8}
                                        disabled={false}
                                        key={i}
                                    />
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#f6f6f6'


    },
    header:{
      height:40,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    content:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        paddingHorizontal:15,
    },
    sureBtn: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,

    },
    btnText: {}
});
export default Category;

