import React from 'react';
import Board from './Components/Board.jsx';
import Button from './Components/StartButton.jsx';
import Ship from './Components/Ship.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      board: new Array(10).fill( new Array(10).fill(0) ),
    };

    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleRotateShips = this.handleRotateShips.bind(this);
  }

  handleStartGame() {
    this.setState({
      gameStarted: true
    })
  }

  handleRotateShips() {
    let list = document.getElementById('outer-ship-container').classList;

    if (!list.contains('horizontal')) {
      document.getElementById('outer-ship-container').classList.add('horizontal');
    } else {
      document.getElementById('outer-ship-container').classList.remove('horizontal');
    }
  }

  render() {
    return (
      <div className="app">
        <div className="button-container">
          <Button type='Start Game' board={this.state.board} handleClick={this.handleStartGame} />
          <Button type='Rotate Ships' board={this.state.board} handleClick={this.handleRotateShips} />
        </div>
        <div className="board-container">
          <Board type="p1" gameStarted={this.state.gameStarted} />
          <Board type="c1" gameStarted={this.state.gameStarted} />
        </div>
        <div id="outer-ship-container">
          <Ship size={5} board={this.state.board} />
          <Ship size={4} board={this.state.board} />
          <Ship size={3} board={this.state.board} />
          <Ship size={3} board={this.state.board} />
          <Ship size={2} board={this.state.board} />
        </div>
      </div>
    );
  }
}

export default App;
