const abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "playerToNumberOfGames",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "nextGameId",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "games",
        "outputs": [
            {
                "name": "id",
                "type": "uint256"
            },
            {
                "name": "status",
                "type": "uint8"
            },
            {
                "name": "playerA",
                "type": "address"
            },
            {
                "name": "playerB",
                "type": "address"
            },
            {
                "name": "playerInTurn",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "listGames",
        "outputs": [
            {
                "name": "",
                "type": "uint256[10]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "playerToGames",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "getGameDetails",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            },
            {
                "name": "",
                "type": "uint8"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "getBoard",
        "outputs": [
            {
                "name": "",
                "type": "uint8[10][10]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getSender",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "acceptGame",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "opponent",
                "type": "address"
            }
        ],
        "name": "createGame",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "gameId",
                "type": "uint256"
            },
            {
                "name": "x",
                "type": "uint8"
            },
            {
                "name": "y",
                "type": "uint8"
            }
        ],
        "name": "makeMove",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const byteCode = "60606040526001600355341561001457600080fd5b610fd8806100236000396000f3006060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063117a5b90146100b45780631b31abda1461017b57806345e09e541461023b578063474d0b5a146102bd5780635e01eb5a146102f6578063605bd5ff1461034b578063787cd6e41461036e57806399abff8c146103bb578063aa57f09c1461040c578063b135bbb014610447578063bc7617cc14610470575b600080fd5b34156100bf57600080fd5b6100d560048080359060200190919050506104c6565b604051808681526020018560028111156100eb57fe5b60ff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600181111561016357fe5b60ff1681526020019550505050505060405180910390f35b341561018657600080fd5b61019c6004808035906020019091905050610556565b604051808560028111156101ac57fe5b60ff1681526020018460018111156101c057fe5b60ff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200194505050505060405180910390f35b341561024657600080fd5b61025c600480803590602001909190505061061d565b6040518082600a6000925b818410156102ad5782846020020151600a60200280838360005b8381101561029c578082015181840152602081019050610281565b505050509050019260010192610267565b9250505091505060405180910390f35b34156102c857600080fd5b6102f4600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106d8565b005b341561030157600080fd5b610309610b09565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561035657600080fd5b61036c6004808035906020019091905050610b11565b005b341561037957600080fd5b6103a5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bba565b6040518082815260200191505060405180910390f35b34156103c657600080fd5b6103ce610bd2565b6040518082600a60200280838360005b838110156103f95780820151818401526020810190506103de565b5050505090500191505060405180910390f35b341561041757600080fd5b610445600480803590602001909190803560ff1690602001909190803560ff16906020019091905050610c5a565b005b341561045257600080fd5b61045a610efb565b6040518082815260200191505060405180910390f35b341561047b57600080fd5b6104b0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610f01565b6040518082815260200191505060405180910390f35b60006020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16905085565b60008060008060008086815260200190815260200160002060010160009054906101000a900460ff1660008087815260200190815260200160002060020160149054906101000a900460ff1660008088815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008089815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1693509350935093509193509193565b610625610f28565b600080838152602001908152602001600020600301600a80602002604051908101604052809291906000905b828210156106cd57838201600a806020026040519081016040528092919082600a80156106b9576020028201916000905b82829054906101000a900460ff1660ff16815260200190600101906020826000010492830192600103820291508084116106825790505b505050505081526020019060010190610651565b505050509050919050565b6003546000806003548152602001908152602001600020600001819055506000806000600354815260200190815260200160002060010160006101000a81548160ff0219169083600281111561072a57fe5b021790555033600080600354815260200190815260200160002060010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000806000600354815260200190815260200160002060020160146101000a81548160ff021916908360018111156107b957fe5b021790555080600080600354815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600a600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414156108a2576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600354600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a8110151561093057fe5b0181905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001019190505550600a600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610a12576000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600354600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a81101515610aa057fe5b0181905550600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060036000815480929190600101919050555050565b600033905090565b60008082815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b8057600080fd5b600160008083815260200190815260200160002060010160006101000a81548160ff02191690836002811115610bb257fe5b021790555050565b60026020528060005260406000206000915090505481565b610bda610f57565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600a806020026040519081016040528092919082600a8015610c50576020028201915b815481526020019060010190808311610c3c575b5050505050905090565b60008360006001811115610c6a57fe5b60008083815260200190815260200160002060020160149054906101000a900460ff166001811115610c9857fe5b1415610d125760008082815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d0d57600080fd5b610d82565b60008082815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d8157600080fd5b5b60016002811115610d8f57fe5b60008087815260200190815260200160002060010160009054906101000a900460ff166002811115610dbd57fe5b141515610dc957600080fd5b60008060008781526020019081526020016000206003018560ff16600a81101515610df057fe5b018460ff16600a81101515610e0157fe5b602091828204019190069054906101000a900460ff1660ff16141515610e2657600080fd5b60008086815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610e985760019150610e9d565b600291505b816000808781526020019081526020016000206003018560ff16600a81101515610ec357fe5b018460ff16600a81101515610ed457fe5b602091828204019190066101000a81548160ff021916908360ff1602179055505050505050565b60035481565b600160205281600052604060002081600a81101515610f1c57fe5b01600091509150505481565b610c8060405190810160405280600a905b610f41610f80565b815260200190600190039081610f395790505090565b61014060405190810160405280600a905b6000815260200190600190039081610f685790505090565b61014060405190810160405280600a905b600060ff16815260200190600190039081610f9157905050905600a165627a7a723058201b520ea52f0d725fa98d7872cc8fa1b1783822cf3a6341e0706a4efcb2f6c3aa0029";

const Config = {
    abi: abi,
    byteCode: byteCode
}

export default Config;
