import React from 'react'
import { connect } from 'react-redux'


   

class Quotes extends React.Component {
  
  
  state = {
    currentQuotes: "test"
  }
  
  randomQuote = () => {
    let randomQuoteIndex = Math.floor((Math.random() * this.props.quotes.length))
    console.log(this.props.quotes[randomQuoteIndex].quote)
    return this.props.quotes[randomQuoteIndex].quote  
  }

  handleClick = (e) => {
    e.preventDefault()

    console.log('button has been clikced')

    this.setState ({
      currentQuotes: this.randomQuote()
    })
    console.log(this.state.currentQuotes)
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
              <ul>
                <li>{this.state.currentQuotes}</li>
              </ul>
            </div>
            <button onClick={this.handleClick}>click to get a quotes</button>
          </div>  
        </>
      )
    }
  }
function mapStateToProps (globalState) {
  return {
    quotes: globalState.quotes,
  }
}

export default connect(mapStateToProps)(Quotes)
