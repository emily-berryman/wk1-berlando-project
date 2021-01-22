import { combineReducers } from 'redux'

import first from './firstQuotes'
import second from './secondQuotes'

export default combineReducers({
  first,
  second
})
