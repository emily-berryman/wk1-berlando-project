
import { getFirstQuotes, getSecondQuotes } from '../apis/quotesAPI'

//test

export const ADD_FIRST_QUOTES = 'ADD_FIRST_QUOTES'
export const ADD_SECOND_QUOTES = 'ADD_SECOND_QUOTES'

export function addFirstQuotes (quotes) {
  return {
    type: ADD_FIRST_QUOTES,
    quotes
  }
}
export function addSecondQuotes (quotes) {
  return {
    type: ADD_SECOND_QUOTES,
    quotes
  }
}

// export function getAllQuotes () {
//   getFirstQuotes()
//   getSecondQuotes()
// }

// export function fetchQuotes () {
//   return dispatch => {
//     return getAllQuotes()
//       .then(quotes => {
//         dispatch(addQuotes(quotes))
//         return null
//       })
//   }
// }
export function fetchFirstQuotes () {
  return dispatch => {
    return getFirstQuotes()
      .then(quotes => {
        dispatch(addFirstQuotes(quotes))
        return null
      })
  }
}
export function fetchSecondQuotes () {
  return dispatch => {
    return getSecondQuotes()
      .then(quotes => {
        dispatch(addSecondQuotes(quotes))
        return null
      })
  }
}
