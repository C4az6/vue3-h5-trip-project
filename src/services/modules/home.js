import hyRequest from '../request'

export const getHotSuggestData = () => {
  return hyRequest.get({ url: '/home/hotSuggests' })
}

export function getHomeCategories() {
  return hyRequest.get({
    url: '/home/categories'
  })
}

export function getHouseListData(page) {
  return hyRequest.get({
    url: '/home/houseList',
    params: { page }
  })
}