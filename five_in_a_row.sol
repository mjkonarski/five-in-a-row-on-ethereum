pragma solidity 0.4.21;


contract FiveInARow {

    enum GameStatus { New, InProgress, Finished }
    enum PlayerInTurn { PlayerA, PlayerB }

    struct Game {
        uint id;
        GameStatus status;
        address playerA;
        address playerB;
        PlayerInTurn playerInTurn;
        uint8[10][10] board;
    }

    event Move(uint gameId, uint8 x, uint8 y);

    mapping(uint => Game) public games;
    mapping(address => uint[10]) public playerToGames;
    mapping(address => uint) public playerToNumberOfGames;
    uint public nextGameId = 1;

    function createGame(address opponent) public {
        games[nextGameId].id = nextGameId;
        games[nextGameId].status = GameStatus.New;
        games[nextGameId].playerA = msg.sender;
        games[nextGameId].playerInTurn = PlayerInTurn.PlayerA;
        games[nextGameId].playerB = opponent;

        if (playerToNumberOfGames[msg.sender] == 10 ) {
            playerToNumberOfGames[msg.sender] = 0;
        }
        playerToGames[msg.sender][playerToNumberOfGames[msg.sender]] = nextGameId;
        playerToNumberOfGames[msg.sender]++;

        if (playerToNumberOfGames[opponent] == 10 ) {
            playerToNumberOfGames[opponent] = 0;
        }
        playerToGames[opponent][playerToNumberOfGames[opponent]] = nextGameId;
        playerToNumberOfGames[opponent]++;

        nextGameId++;
    }

    function acceptGame(uint gameId) public {
        require(msg.sender == games[gameId].playerB);
        
        games[gameId].status = GameStatus.InProgress;
    }

    function getGameDetails(uint gameId) public view
        returns (GameStatus, PlayerInTurn, address, address) {
        return (games[gameId].status, games[gameId].playerInTurn,
            games[gameId].playerA, games[gameId].playerB);
    }

    function listGames() public view returns (uint[10]){
        return playerToGames[msg.sender];
    }

    function makeMove(uint gameId, uint8 x, uint8 y) public
        onlyPlayerInTurn(gameId) {
        require(games[gameId].status == GameStatus.InProgress);
        require(games[gameId].board[x][y] == 0);

        uint8 symbol;
        if (msg.sender == games[gameId].playerA) {
            symbol = 1;
            games[gameId].playerInTurn = PlayerInTurn.PlayerB;
        } else {
            symbol = 2;
            games[gameId].playerInTurn = PlayerInTurn.PlayerA;

        }
        games[gameId].board[x][y] = symbol;
        emit Move(gameId, x, y);
    }

    function getBoard(uint gameId) public view returns(uint8[10][10]) {
        return games[gameId].board;
    }

    function getSender() view public returns(address) {
        return msg.sender;
    }

    modifier onlyPlayerInTurn(uint gameId) {
        if (games[gameId].playerInTurn == PlayerInTurn.PlayerA) {
            require(msg.sender == games[gameId].playerA);
        } else {
           require(msg.sender == games[gameId].playerB);
        }
        _;
    }
}
