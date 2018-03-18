const abi = [{
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}],
    "name": "games",
    "outputs": [{"name": "id", "type": "uint256", "value": "0"}, {
        "name": "playerA",
        "type": "address",
        "value": "0x0000000000000000000000000000000000000000"
    }, {
        "name": "playerB",
        "type": "address",
        "value": "0x0000000000000000000000000000000000000000"
    }, {"name": "playerInTurn", "type": "address", "value": "0x0000000000000000000000000000000000000000"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "gameId", "type": "uint256"}],
    "name": "getBoard",
    "outputs": [{
        "name": "",
        "type": "uint8[10][10]",
        "value": [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]]
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "opponent", "type": "address"}],
    "name": "createGame",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "gameId", "type": "uint256"}, {"name": "x", "type": "uint8"}, {"name": "y", "type": "uint8"}],
    "name": "makeMove",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "nextGameId",
    "outputs": [{"name": "", "type": "uint256", "value": "0"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}]

export default abi;
