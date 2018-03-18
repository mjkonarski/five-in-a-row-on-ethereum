import React from "react";

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board size={10} eth={this.props.eth} gameId={this.props.gameId}/>
                </div>
            </div>
        );
    }
}

class Board extends React.Component {
    static BOARD_SIZE = 10

    constructor(props) {
        super(props)

        this.makeMove = this.makeMove.bind(this);
        this.watchMove = this.watchMove.bind(this);

        var boardState = new Array(Board.BOARD_SIZE);
        for (var i = 0; i < Board.BOARD_SIZE; i++) {
            boardState[i] = new Array(Board.BOARD_SIZE);
        }

        this.state = {
            boardState: boardState,
        };

        this.readBoardState();

        this.props.eth.web3contract.Move().watch(this.watchMove);
    }

    watchMove(error, result) {
        if (!error) {
            this.readBoardState();
        }
    }

    readBoardState() {
        this.props.eth.contract.getBoard(this.props.gameId).then((board) => {
            var boardState = new Array(Board.BOARD_SIZE);

            for (var row = 0; row < Board.BOARD_SIZE; row++) {
                boardState[row] = new Array(Board.BOARD_SIZE);

                for (var col = 0; col < Board.BOARD_SIZE; col++) {
                    boardState[row][col] = board[0][row][col].toNumber();
                }
            }

            this.setState({boardState: boardState});
        });
    }

    makeMove(row, col) {
        console.log(`row = ${row} col = ${col}`)

        this.props.eth.contract.makeMove(this.props.gameId, row, col)
            .then((txHash) => {
                console.log(txHash);
            }).catch((err) => {
            console.log(err.message);
        });
    }

    render() {
        return (
            <div>
                {
                    Array(this.props.size)
                        .fill(null)
                        .map((_, i) => <Row key={`row${i}`} row={i} eth={this.props.eth} size={this.props.size}
                                            makeMove={this.makeMove} rowState={this.state.boardState[i]}/>)
                }
            </div>
        );
    }
}

class Row extends React.Component {
    createCell(row, col, value) {
        return (
            <Cell key={`cell${row}_${col}`} makeMove={this.props.makeMove} eth={this.props.eth} col={col} row={row} value={value}/>
        )
    }

    render() {
        return (
            <div className="board-row">
                {
                    Array(this.props.size)
                        .fill(null)
                        .map((_, col) => this.createCell(this.props.row, col, this.props.rowState[col]))
                }
            </div>
        );
    }
}

class Cell extends React.Component {
    render() {
        var value;
        switch(this.props.value) {
            case 1:
                value = 'X';
                break;
            case 2:
                value = 'O';
                break;
            default:
                value = '';
        }

        return (
            <button className="cell" onClick={((e) => this.props.makeMove(this.props.row, this.props.col, e))}>
                {value}
            </button>
        );
    }
}

export default Game;
