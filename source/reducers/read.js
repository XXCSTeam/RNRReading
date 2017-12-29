
import * as types from '../actions/read';
const ImgUrl='https://www.baidu.com/';
const Article=[
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
    {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'4天前'},
]

const initialState = {
  isRefreshing: false,
  loading: false,
  isLoadMore: false,
  noMore: false,
  articleList: [
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'},
      {contentImg:ImgUrl,title:'中国三四城市的赚钱机会越来越多',userName:'中国经济报',date:'四天前'}
  ]
};

export default function read(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLE_LIST:
      return Object.assign({}, state, {
        isRefreshing: action.isRefreshing,
        loading: action.loading,
        isLoadMore: action.isLoadMore
      });
      case types.REQUEST_ARTICLE_LIST:
        return Object.assign({}, state, {
          isRefreshing: action.isRefreshing,
          isLoadMore: action.loading,
          noMore: action.articleList && action.articleList.length === 0,
          articleList: state.isLoadMore
            ? loadMore(state, action)
            : state.articleList,
        });

    default:
      return state;
  }
}


function loadMore(state, action) {
    return state.articleList.concat(Article);
}
