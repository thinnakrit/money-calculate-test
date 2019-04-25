import React from 'react'
import {
  calculateChange,
  printCalculateChange,
} from './helpers/calculateChange'

class Home extends React.Component {

  state = {
    change: 0
  }


  setChange = (data) => {
    this.setState({
      change: data.target.value
    })
  }

  render() {
    const { change } = this.state
    const resultChange = calculateChange(change)
    const showResult = printCalculateChange(resultChange)
    return (
      <div>
        <div><input value={change} onChange={this.setChange} /></div>
        <div>
          Your change is {showResult || 'no change'}.
        </div>
      </div>
    )
  }
}

export default Home
