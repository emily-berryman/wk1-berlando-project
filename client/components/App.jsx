import React from 'react'
import { connect } from 'react-redux'

import { fetchFirstQuotes, fetchSecondQuotes } from '../actions'

import Quotes from './Quotes'

export class App extends React.Component {
  // state = {
  //   firstQuotes: [],
  //   secondQuotes: []
  // }

  componentDidMount () {
    this.props.dispatch(fetchFirstQuotes())
    this.props.dispatch(fetchSecondQuotes())
    // console.log('component did in fact mount')
  }

  render () {
    return (
      <div className='app'>
        <h1 className="header">Are there any quotes?!</h1>
      <Quotes />
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    first: globalState.first,
    second: globalState.second
  }
}

export default connect(mapStateToProps)(App)
