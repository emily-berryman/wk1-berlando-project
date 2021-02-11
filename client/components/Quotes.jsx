import React from 'react'
import { connect } from 'react-redux'


   

class Quotes extends React.Component {
  
  
  state = {
    currentFirstQuotes: "test",
    currentSecondQuotes: "secondTest"
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
          <div className="quotes">
            <h1 className="subtitle">here is a list of incredible quotes!</h1>
            <div>
             <button className="generate" onClick={this.handleClick}>click to get a quote</button>
             
      
          <div className= 'scroll-image-and-quote'>
              <img src='scroll.png' alt="description"/>

              <div className= 'quote-div'>
            <p className= 'quote'>{this.state.currentFirstQuotes} 
            <br/> ---- 
            <br/> {this.state.currentSecondQuotes}</p> 
              </div>
          </div>
          
          

      
       
              {/* <ul>
                <li>{this.state.currentQuotes}</li>
              </ul> */}
            </div>
            
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
