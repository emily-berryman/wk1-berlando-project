import { getQuotes } from '../apis/quotesAPI'

//test

export const ADD_QUOTES = 'ADD_QUOTES'

export function addQuotes (quotes) {
  return {
    type: ADD_QUOTES,
    quotes
  }
}

export function fetchQuotes () {
  return dispatch => {
    return getQuotes()
      .then(quotes => {
        dispatch(addQuotes(quotes))
        return null
      })
  }
}
