import jsonplaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts')

  dispatchEvent({ type: 'FETCH_POSTS', payload: response })

}
