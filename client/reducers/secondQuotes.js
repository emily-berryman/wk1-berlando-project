import { ADD_SECOND_QUOTES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SECOND_QUOTES:
      return action.second
    default:
      return state
  }
}
export default reducer
