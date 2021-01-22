import { getFirstHalf, getSecondHalf } from '../apis/quotesAPI'

//test

export const ADD_QUOTES = 'ADD_QUOTES'

export function addQuotes (quotes) {
  return {
    type: ADD_QUOTES,
    quotes
  }
}

function getAllQuotes() {
  getFirstHalf()
  getSecondHalf()
}

export function fetchQuotes () {
  return dispatch => {
    return getAllQuotes()
      .then(quotes => {
        dispatch(addQuotes(quotes))
        return null
      })
  }
}
