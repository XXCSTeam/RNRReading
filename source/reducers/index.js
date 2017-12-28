import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters,CHOOSE_CATEGORY,CANCLE_CATEGORY,CATEGORYLIST,TOTALNUM } from '../actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

// 选择分类
function category(state = CATEGORYLIST,action){
    switch (action.type) {
        case CHOOSE_CATEGORY:

            return [
                ...state.slice(0,action.index),
                Object.assign({},state[action.index],{
                    choose:true,
                }),
                ...state.slice(action.index+1)
            ]
        case CANCLE_CATEGORY:
            return [
                ...state.slice(0,action.index),
                Object.assign({},state[action.index],{
                    choose:false,
                }),
                ...state.slice(action.index+1)
            ]
        default:return state
    }
}

 // 计算选择的个数
function totalNum(state=0,action) {
    switch (action.type) {
        case TOTALNUM:
            return (category().filter(item=>item.choose)).length
        default:
            return state
    }

}
const todoApp = combineReducers({
    visibilityFilter,
    todos,
    category,
    totalNum
})

export default todoApp