import request from 'superagent'

const rootUrl = '/api/v1'

export function getFirstQuotes () {
  return request.get(rootUrl + '/quotes/first')
    .then(res => {
      return res.body
    })
}
export function getSecondQuotes () {
  return request.get(rootUrl + '/quotes/second')
    .then(res => {
      return res.body
    })
}
