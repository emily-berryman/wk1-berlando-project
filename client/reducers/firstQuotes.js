import { ADD_FIRST_QUOTES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIRST_QUOTES:
      return action.quotes
    default:
      return state
  }
}

export default reducer
