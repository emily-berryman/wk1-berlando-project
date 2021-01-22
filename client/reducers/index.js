import { combineReducers } from 'redux'

import firstQuotes from './firstQuotes'
import secondQuotes from './secondQuotes'

export default combineReducers({
  firstQuotes,
  secondQuotes
})
