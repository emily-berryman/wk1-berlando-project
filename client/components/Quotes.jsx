import React from 'react'
import { connect } from 'react-redux'


   

class Quotes extends React.Component {
  
  
  state = {
    currentFirstQuotes: "test",
    currentSecondQuotes: "test"
  }
  
  randomFirstQuote = () => {
    // console.log(this.props.first[0].quote)
    let randomFirstQuoteIndex = Math.floor((Math.random() * this.props.first.length))
    return this.props.first[randomFirstQuoteIndex].quote  
  }
  randomSecondQuote = () => {
    let randomSecondQuoteIndex = Math.floor((Math.random() * this.props.second.length))
    // console.log(this.props.second[randomSecondQuoteIndex].quote)
    return this.props.second[randomSecondQuoteIndex].quote  
  }

  handleClick = (e) => {
    e.preventDefault()

    // console.log('button has been clicked')

    this.setState ({
      currentFirstQuotes: this.randomFirstQuote(),
      currentSecondQuotes: this.randomSecondQuote()
    })
    // console.log(this.state.currentFristQuotes)
  }

  // quote = () => {
  //   if (this.state.currentQuotes != "") 
  //   return this.state.currentQuotes.quote
  // }
    render() {

     

      return (
        <>
          <div>
            <h1>here is a list of incredible quote!</h1>
            <div>
              <p>{this.state.currentFristQuotes} {this.state.currentSecondQuotes}</p>
              {/* <ul>
                <li>{this.state.currentQuotes}</li>
              </ul> */}
            </div>
            <button onClick={this.handleClick}>click to get a quotes</button>
          </div>  
        </>
      )
    }
  }
  function mapStateToProps (globalState) {
    return {
      first: globalState.first,
      second: globalState.second
    }
  }

export default connect(mapStateToProps)(Quotes)
