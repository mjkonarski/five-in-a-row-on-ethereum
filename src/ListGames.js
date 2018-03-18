import React from 'react';
import {Link} from 'react-router-dom'
import { Tag } from 'antd';

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
                <ListedGame eth={this.props.eth} gameId={gameId} game={game}/>
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

class ListedGame extends React.Component {
    constructor(props) {
        super(props)

        this.confirmGame = this.confirmGame.bind(this);

        this.state = {
            newTag: props.game.gameStatus === 0,
            inProgressTag: props.game.gameStatus === 1,
            finishedTag: props.game.gameStatus === 2,
            myTurnTag: props.playerInTurn === props.eth.currentAccount,
            opponentsTurnTag: props.playerInTurn === props.eth.currentAccount,
            toConfirm: props.game.gameStatus === 0 && props.game.playerB === props.eth.currentAccount
        };
    }

    shortenPlayer(player) {
        return player.substr(0, 6) + ".." + player.substr(-6);
    }

    confirmGame() {
        this.props.eth.contract.acceptGame(this.props.gameId)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    render() {
        var tags = []

        if (this.state.newTag) {
            tags.push((<Tag color="green">New</Tag>));
        }

        if (this.state.inProgressTag) {
            tags.push((<Tag color="blue">In progress</Tag>));
        }

        if (this.state.finishedTag) {
            tags.push((<Tag color="blue">Finished</Tag>));
        }

        if (this.state.toConfirm) {
            tags.push((<Tag onClick={this.confirmGame} color="red">Accept</Tag>));
        }

        const playerA = this.shortenPlayer(this.props.game.playerA);
        const playerB = this.shortenPlayer(this.props.game.playerB);

        return (
            <li key={`game${this.props.gameId}`}>
                <Link to={`/game/${this.props.gameId}`}>
                    {this.props.gameId}: {playerA} - {playerB}
                </Link>
                {tags}
            </li>
        );
    }
}

export default ListGames;