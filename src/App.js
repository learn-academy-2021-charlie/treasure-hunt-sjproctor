import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      counter: 5
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    let bomb = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasure, bombLocation: bomb})
  }

  handleGamePlay = (index) => {
    const {board, treasureLocation, bombLocation, counter} = this.state
    if(index === treasureLocation){
      board[index] = "💎"
      this.setState({board: board, counter: counter - 1})
    } else if(index === bombLocation){
      board[index] = "💣"
      this.setState({board: board, counter: counter - 1})
    } else {
      board[index] = "🌴"
      this.setState({board: board, counter: counter - 1})
    }
  }

  render(){
    console.log(this.state.treasureLocation)
    console.log(this.state.bombLocation)
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <p>Turns Remaining: {this.state.counter}</p>
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
