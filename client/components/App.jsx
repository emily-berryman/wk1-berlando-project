import React from 'react'
import { connect } from 'react-redux'

import { fetchFirstQuotes, fetchSecondQuotes } from '../actions'

import Quotes from './Quotes'

export class App extends React.Component {
  state = {
    quotes: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFirstQuotes())
    this.props.dispatch(fetchSecondQuotes())
    console.log('component did in fact mount')
  }

  render () {
    return (
      <div className='app'>
        <h1>Are there any quotes?!</h1>
      <Quotes />
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
