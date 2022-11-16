import hyRequest from '../request'

export const getHotSuggestData = () => {
  return hyRequest.get({ url: '/home/hotSuggests' })
}

export function getHomeCategories() {
  return hyRequest.get({
    url: '/home/categories'
  })
}