export const REQUEST_ARTICLE_LIST = 'REQUEST_ARTICLE_LIST';
export const FETCH_ARTICLE_LIST = 'FETCH_ARTICLE_LIST';
export const RECEIVE_ARTICLE_LIST = 'RECEIVE_ARTICLE_LIST';

export function requestArticleList(
  isRefreshing,
  loading,
  isLoadMore,
) {
  return {
    type: REQUEST_ARTICLE_LIST,
    isRefreshing,
    loading,
    isLoadMore,
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
