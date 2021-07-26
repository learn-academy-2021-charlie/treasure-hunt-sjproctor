import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasure})
  }

  handleGamePlay = (index) => {
    const {board} = this.state
    if(index === this.state.treasureLocation){
      board[index] = "💎"
      this.setState({board: board})
    } else {
      board[index] = "🌴"
      this.setState({board: board})
    }
  }

  render(){
    console.log(this.state.treasureLocation)
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div id="gameboard">
          {this.state.board.map((value, index) => {
            return (
              <Square
                value={value}
                key={index}
                index={index} handleGamePlay={this.handleGamePlay}
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
