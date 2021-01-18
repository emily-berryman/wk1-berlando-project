import React from 'react'
import { connect } from 'react-redux'

import { fetchQuotes } from '../actions'

export class App extends React.Component {
  state = {
    quotes: []
  }

  componentDidMount () {
    this.props.dispatch(fetchQuotes())
  }

  render () {
    return (
      <div className='app'>
        <h1>Are there any quotes?!</h1>
        {/* <ul>
          {this.props.quotes.map(quote => (
            <li key={quote}>{quote}</li>
          ))}
        </ul> */}
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    quotes: globalState.quotes
  }
}

export default connect(mapStateToProps)(App)
