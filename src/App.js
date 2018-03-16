import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Game />
            </div>
        );
    }

}

class Game extends React.Component {


    constructor(props) {
        super(props)

        const BOARD_SIZE = 10

        var boardState = new Array(BOARD_SIZE);
        for (var i = 0; i < BOARD_SIZE; i++) {
            boardState[i] = new Array(BOARD_SIZE);
        }

        boardState[0][0] = 'X';
        boardState[3][3] = 'O';

        this.state = {
            boardState: boardState
        }
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board size={10} boardState={this.state.boardState}/>
                </div>
                <div className="game-info">
                    Current player:
                </div>
            </div>
        );
    }
}

class Board extends React.Component {
    render() {
        return (
            <div>
                {
                    Array(this.props.size)
                        .fill(null)
                        .map((_, i) => <Row key={`row${i}`} row={i} size={this.props.size} rowState={this.props.boardState[i]}/>)
                }
            </div>
        );
    }
}

class Row extends React.Component {
    createCell(row, col, value) {
        return (
            <Cell key={`cell${row}_${col}`} col={col} row={row} value={value} />
        )
    }

    render() {
        return (
            <div className="board-row">
                {
                    Array(this.props.size)
                        .fill(null)
                        .map((_, col) => this.createCell(this.props.row, col, this.props.rowState[col]) )
                }
            </div>
        );
    }
}

class Cell extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(`row = ${this.props.row} col = ${this.props.col}`)
    }

    render() {
        return (
            <button className="cell" onClick={this.handleClick}>
                {this.props.value}
            </button>
        );
    }
}

export default App;
