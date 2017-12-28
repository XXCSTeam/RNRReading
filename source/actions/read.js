
// import * as types from '../constants/ActionTypes';
export const REQUEST_ARTICLE_LIST = 'REQUEST_ARTICLE_LIST';
export const FETCH_ARTICLE_LIST = 'FETCH_ARTICLE_LIST';
export const RECEIVE_ARTICLE_LIST = 'RECEIVE_ARTICLE_LIST';
export const REQUEST_TYPE_LIST = 'REQUEST_TYPE_LIST';
export const FETCH_TYPE_LIST = 'FETCH_TYPE_LIST';
export const RECEIVE_TYPE_LIST = 'RECEIVE_TYPE_LIST';

export function requestArticleList(
  isRefreshing,
  loading,
  typeId,
  isLoadMore,
  page = 1
) {
  return {
    type: REQUEST_ARTICLE_LIST,
    isRefreshing,
    loading,
    isLoadMore,
    typeId,
    page
  };
}

export function fetchArticleList(isRefreshing, loading, isLoadMore = false) {
  return {
    type: FETCH_ARTICLE_LIST,
    isRefreshing,
    loading,
    isLoadMore
  };
}

export function receiveArticleList(articleList, typeId) {
  return {
    type: RECEIVE_ARTICLE_LIST,
    articleList,
    typeId
  };
}
