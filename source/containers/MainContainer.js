import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
// import Main from '../pages/MainPage/Main';





import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';


class App extends Component {
    static navigationOptions = {
        title:'首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={25} color={tintColor} />
        ),
    }
    constructor(props){
        super(props);
        this.state={
            choose:0
        }
    }
    render() {
        // Injected by connect() call:
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={styles.headContent}>
                        {
                            this.props.chooseList.map((item, i) => {
                                return (
                                    <Button
                                        containerStyle={[styles.sureBtn,(this.state.choose==i)?{borderColor:'#3e9ce9',borderBottomWidth:2}:'']}
                                        style={[styles.btnText,{color:(this.state.choose==i)?'#3e9ce9':'#ccc'}]}
                                        text={item.text}
                                        onPress={() => {
                                            console.log(i)
                                           this.setState({choose:i})
                                        }}
                                        activeOpacity={0.8}
                                        disabled={false}
                                        key={i}
                                        ref={i}
                                    />
                                )
                            })
                        }
                </View>
                <View style={styles.content}>

                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    style={styles.container}
                    horizontal={false}
                >
                    {/*<Main {...this.props} />*/}
                    <AddTodo
                        onAddClick={text =>
                            dispatch(addTodo(text))
                        } />
                    <TodoList
                        todos={visibleTodos}
                        onTodoClick={index =>
                            dispatch(completeTodo(index))
                        } />
                    <Footer
                        filter={visibilityFilter}
                        onFilterChange={nextFilter =>
                            dispatch(setVisibilityFilter(nextFilter))
                        } />
                </ScrollView>
                </View>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    headContainer:{

    },
    box:{
      flexDirection:'row',
        flex:1,
      justifyContent:'space-around',
        backgroundColor:'yellow',
        // height:10,
    },
    container:{
    },
    headContent:{

        height:50,
        borderBottomWidth:1,
        borderColor:'#ccc',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    content:{

    },
    btnText:{
        color:'#fff',
        fontSize:20,


    },
    sureBtn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
     // width:50,
     //    borderBottomWidth:2,
    }
})

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter,
        chooseList:(state.category).filter(todo => todo.choose),
        read:state.read

    }
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)