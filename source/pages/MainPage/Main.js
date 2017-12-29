import React from 'react';
import {
    DeviceEventEmitter,
    InteractionManager,
    ListView,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
    ActivityIndicator,
    RefreshControl
} from 'react-native';

import ToastUtil from '../../utils/ToastUtil';



const pages = [];
let loadMoreTime = 0;
let currentLoadMoreTypeId;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            typeIds: [],
            typeList: {}
        };
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        const {read} = this.props;
        if (
            read.isLoadMore &&
            !nextProps.read.isLoadMore &&
            !nextProps.read.isRefreshing
        ) {
            if (nextProps.read.noMore) {
                ToastUtil.showShort('没有更多数据了');

            }
        }
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners('changeCategory');
    }

    onRefresh = () => {
        const {readActions} = this.props;
        readActions.requestArticleList(true, false, false,);


    };

    onEndReached = () => {
        const {readActions} = this.props;
        readActions.requestArticleList(false, false, true,);

    };
    renderFooter = () => {
        const {read} = this.props;
        return read.isLoadMore ? (<View style={styles.footerContainer}>
            <ActivityIndicator size="small" color="#3e9ce9" />
            <Text style={styles.footerText}>数据加载中……</Text>
        </View>):<View />;
    };

    renderItem = item => (
        <TouchableOpacity
            onPress={() => this.onPressHandler(item)}
        >
            <View style={styles.containerItem}>
                <Image style={styles.itemImg} source={require('../../img/about_logo.png')} resizeModel='contain'/>
                <View style={styles.itemRightContent}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.itemRightBottom}>
                        <Text style={styles.userName}>{item.userName}</Text>
                        <Text style={styles.timeAgo}>{item.date}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );


    render() {
        const {read} = this.props;
        let article=read.articleList;
        let isRefreshing=read.isRefreshing;
        this.state.dataSource.cloneWithRows(article);
        return (
            <View style={{flex: 1}}>
                <ListView
                    initialListSize={1}
                    dataSource={this.state.dataSource.cloneWithRows(article)}
                    renderRow={this.renderItem}
                    style={styles.listView}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                    renderFooter={this.renderFooter}
                    refreshControl={
                        <RefreshControl
                            style={styles.refreshControlBase}
                            refreshing={isRefreshing}
                            onRefresh={() => {
                                const {readActions} = this.props;
                                readActions.requestArticleList(true, false, false,);


                            }}
                            title="Loading..."
                        />
                    }
                />

            </View>
        )

    }
    onPressHandler=(article)=>{
        const { navigate } = this.props.navigation;
        navigate('Web', { article });

    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    content:{

    },
    containerItem:{
        paddingHorizontal:5,
        paddingVertical:10,
        borderBottomWidth:1,
        borderColor:'#ccc',
        flexDirection:'row',
        backgroundColor:'#fff'

    },
    itemImg:{
        width:50,
        height:40,
    },
    itemRightContent:{
        justifyContent:'space-around',
        marginLeft:10,
        flex:1

    },
    title:{

    },
    itemRightBottom:{
        flexDirection:'row',
        justifyContent:'space-between'

    },
    userName:{
      fontSize:10,
      color:'#3e9ce9'
    },
    timeAgo:{
        fontSize:10,
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    footerText: {
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 10
    },
    listView: {
        flex:1,
    },
    refreshControlBase: {
        backgroundColor: 'transparent'
    }


});


export default Main;





