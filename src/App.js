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

class Row extends React.Component {
    render() {
        return (
            <div className="board-row">
                {
                    Array(this.props.size)
                        .fill(null)
                        .map((_, i) => <Square column={i} row={this.props.row} />)
                }
            </div>
        );
    }
}

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                X
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        return (
            <div>
                {
                    Array(this.props.size)
                    .fill(null)
                    .map((_, i) => <Row row={i} size={this.props.size} />)
                }
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board size={10} />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}


export default App;
