pragma solidity 0.4.21;


contract FiveInARow {
    struct Game {
        uint id;
        address playerA;
        address playerB;
        address playerInTurn;
        uint8[10][10] board;
    }

    mapping(uint => Game) public games;
    uint public nextGameId = 0;

    function createGame(address opponent) public {
        games[nextGameId].id = nextGameId;
        games[nextGameId].playerA = msg.sender;
        games[nextGameId].playerInTurn = msg.sender;
        games[nextGameId].playerB = opponent;

        nextGameId++;
    }

    function makeMove(uint gameId, uint8 x, uint8 y) public {
        //require(games[gameId].playerInTurn == msg.sender);
        assert(msg.sender == games[gameId].playerA || msg.sender == games[gameId].playerB);

        require(games[gameId].board[x][y] == 0);

        uint8 symbol;
        if (msg.sender == games[gameId].playerA) {
            symbol = 1;
        } else {
            symbol = 2;
        }
        games[gameId].board[x][y] = symbol;
    }

    function getBoard(uint gameId) public view returns(uint8[10][10]) {
        return games[gameId].board;
    }
}
