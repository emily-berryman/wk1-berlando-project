
import { getFirstQuotes, getSecondQuotes } from '../apis/quotesAPI'

//test

export const ADD_FIRST_QUOTES = 'ADD_FIRST_QUOTES'
export const ADD_SECOND_QUOTES = 'ADD_SECOND_QUOTES'

export function addFirstQuotes (first) {
  return {
    type: ADD_FIRST_QUOTES,
    first
  }
}
export function addSecondQuotes (second) {
  return {
    type: ADD_SECOND_QUOTES,
    second
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
      .then(first => {
        dispatch(addFirstQuotes(first))
        return null
      })
  }
}
export function fetchSecondQuotes () {
  return dispatch => {
    return getSecondQuotes()
      .then(second => {
        dispatch(addSecondQuotes(second))
        return null
      })
  }
}
