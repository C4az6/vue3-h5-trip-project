import hyRequest from '../request'

export const getHotSuggestData = () => {
  return hyRequest.get({ url: '/home/hotSuggests' })
}