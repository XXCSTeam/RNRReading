/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY';
export const CANCLE_CATEGORY = 'CANCLE_CATEGORY';
export const TOTALNUM='TOTALNUM';//选择的个数

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
/**
 *分类
 */
export const CATEGORYLIST= [{text:'体育迷',choose:false},{text:'段子手',choose:false},{text:'私房话',choose:false},{text:'八卦镜',choose:false},{text:'爱生活',choose:false},
    {text:'财经迷',choose:false},{text:'汽车迷',choose:false},{text:'潮人帮',choose:false},{text:'辣妈帮',choose:false},{text:'点赞党',choose:false},{text:'旅行家',choose:false},
    {text:'职场人',choose:false},{text:'美食家',choose:false},{text:'学霸族',choose:false},{text:'星座控',choose:false},{text:'推荐',choose:false},{text:'热点',choose:false},
    {text:'学霸族',choose:false}]


/*
 * action 创建函数
 */

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function completeTodo(index) {
    return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export function chooseCategory(index) {
    return {type:CHOOSE_CATEGORY,index}
}
export function cancleCategory(index) {
    return {type:CANCLE_CATEGORY,index}
}

export function totalNum(index) {
    return {type:TOTALNUM}
}