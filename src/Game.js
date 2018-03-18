import React from "react";

class Board extends React.Component {
    static BOARD_SIZE = 10

    constructor(props) {
        super(props)

        var boardState = new Array(Board.BOARD_SIZE);
        for (var i = 0; i < Board.BOARD_SIZE; i++) {
            boardState[i] = new Array(Board.BOARD_SIZE);
        }

        this.state = {
            boardState: boardState,
        };

        this.readBoardState();
    }

    readBoardState() {
        this.props.eth.contract.getBoard(0).then((board) => {
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

    render() {
        return (
            <div>
                {
                    Array(this.props.size)
                        .fill(null)
                        .map((_, i) => <Row key={`row${i}`} row={i} eth={this.props.eth} size={this.props.size}
                                            rowState={this.state.boardState[i]}/>)
                }
            </div>
        );
    }
}

class Row extends React.Component {
    createCell(row, col, value) {
        return (
            <Cell key={`cell${row}_${col}`} eth={this.props.eth} col={col} row={row} value={value}/>
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
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(`row = ${this.props.row} col = ${this.props.col}`)

        let account = this.props.eth.web3.eth.accounts[0];

        this.props.eth.contract.makeMove(0, this.props.row, this.props.col, {from: account}).then((txHash) => {
            console.log(txHash);
        });
    }

    render() {
        return (
            <button className="cell" onClick={this.handleClick}>
                {this.props.value}
            </button>
        );
    }
}

export default Board;
