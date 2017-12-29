import {StackNavigator,TabNavigator} from 'react-navigation';
import Splash from '../pages/Splash';
import CategoryContainer from './CategoryContainer';
import MainContainer from './MainContainer';
import WebViewPage from '../pages/ItemDetail/WebViewPage';
import Feedback from '../pages/Feedback/Feedback';
import About from '../pages/About/About';

const TabContainer = TabNavigator(
    {
        Main:{ screen: MainContainer},
        Category:{ screen: CategoryContainer},
        Feedback:{ screen: Feedback},
        About:{ screen: About},
    },
    {
        lazy:true,//app打开时将底部的标签全部加载，默认false
        tabBarPosition:'bottom',
        tabBarOptions:{
            activeTintColor:'#3e9ce9',
            inactiveTintColor:'#999',
            showIcon:true,
            style:{
                backgroundColor:'#fff'
            },
            indicatorStyle:{//选项卡底部的行，android底部会多一条线，解决方案：将height：0
                opacity:0
            },
            tabStyle:{
                padding:0
            }


        }
    }
);

const App = StackNavigator(
    {
        // Splash: { screen: Splash},
        Category: {
            screen: CategoryContainer,
            navigationOptions:{
                headerLeft:null
            }
        },
        Home: {
            screen: TabContainer,
            navigationOptions: {
                headerLeft:null  //  设置导航条左侧，可以是按钮或者其他
            }
        },
        Web:{ screen: WebViewPage}
    },
    {
        headerMode: 'screen',         //边缘滑动返回上级页面时动画效果
        navigationOptions: {
            headerStyle: {
                backgroundColor:'#3e9ce9'
            },
            headerTitleStyle: {
                color:'#fff',
                fontSize:20
            },
            headerTintColor:'#fff'
        }
    }

);
export default App;