import React from 'react'
import { connect } from 'react-redux'


const Quotes = (props) => {
  
  

console.log(props.quotes)
    return (
      <>
        <div>
          <h1>here is a list of incredible quote!</h1>
          <div>
            <ul className='book-list'>
              <li>{props.quotes[0] && <p>{props.quotes[0].quote}</p>}</li>
            </ul>
          </div>
        </div>  
      </>
    )
  }

function mapStateToProps (globalState) {
  return {
    quotes: globalState.quotes,
  }
}

export default connect(mapStateToProps)(Quotes)
