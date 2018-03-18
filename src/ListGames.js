import React from 'react';
import {Link} from 'react-router-dom'

class ListGames extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            gamesList: {}
        };

        this.readListOfGames();
    }

    readListOfGames() {
        this.props.eth.contract.listGames().then((response) => {
            const gameIds = response[0].map((gameId) => gameId.toNumber()).filter((gameId) => gameId !== 0);

            gameIds.map((gameId) => this.readGameDetails(gameId));
        });
    }

    readGameDetails(gameId) {
        this.props.eth.contract.getGameDetails(gameId).then((response) => {
            const gameStatus = response[0];
            const playerInTurn = response[1];
            const playerA = response[2];
            const playerB = response[3];

            var gamesList = this.state.gamesList;

            gamesList[gameId] = {
                gameStatus: gameStatus.toNumber(),
                playerInTurn: playerInTurn.toNumber(),
                playerA: playerA,
                playerB: playerB
            };
            this.setState({gamesList: gamesList});
        });
    }

    render() {
        const list = Object.entries(this.state.gamesList).map(([gameId, game], _) =>
            (
                <li key={`game${gameId}`}>
                    <Link to={`/game/${gameId}`}>
                        {gameId}: {game.playerA} - {game.playerB} - {game.gameStatus} - {game.playerInTurn}
                    </Link>
                </li>
            ));
        return (
            <div>
                <h1>List of games</h1>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default ListGames;