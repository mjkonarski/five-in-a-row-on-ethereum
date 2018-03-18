import React from 'react';
import './App.css';
import Game from './Game.js';
import ListGames from './ListGames.js';
import WrappedNewGame from './NewGame.js';
import Web3 from 'web3';
import Config from './abi.js';
import Eth from 'ethjs-query';
import EthContract from 'ethjs-contract';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'

import {Layout, Menu, Icon} from 'antd';

const {Header, Content, Sider} = Layout;

class App extends React.Component {
    constructor(props) {
        super(props)

        var web3;
        if (typeof window.web3 !== 'undefined') {
            web3 = new Web3(window.web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            console.log('No web3? You should consider trying MetaMask!')
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }

        const address = '0xa5392cd0d7d212f9dc06a452ea90930e12b64e87';

        const eth = new Eth(web3.currentProvider);
        const contract = (new EthContract(eth))(Config.abi, Config.byteCode, { from: web3.eth.accounts[0] }).at(address);
        const currentAccount = web3.eth.accounts[0];

        const web3contract = web3.eth.contract(Config.abi).at(address);

        this.state = {
            eth: {
                currentAccount: currentAccount,
                contract: contract,
                web3contract: web3contract,
                web3: web3
            }
        };

    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Layout className="layout">
                        <GameHeader eth={this.state.eth}/>

                        <Layout>
                            <GameMenu/>
                            <Layout style={{padding: '0 24px 24px'}}>
                                <Content className="content" style={{}}>
                                    <Route path="/newGame" render={_ => (
                                        <WrappedNewGame eth={this.state.eth}/>
                                    )}/>
                                    <Route path="/listGames" render={_ => (
                                        <ListGames eth={this.state.eth}/>
                                    )}/>
                                    <Route path="/game/:gameId" render={props => (
                                        <Game eth={this.state.eth} gameId={props.match.params.gameId}/>
                                    )}/>
                                </Content>
                            </Layout>

                        </Layout>
                    </Layout>
                </div>
            </Router>
        );
    }

}

class GameMenu extends React.Component {
    render() {
        return (
            <Sider width={200} style={{background: '#fff'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['listGames']}
                    style={{height: '100%', borderRight: 0}}
                >

                    <Menu.Item key="newGame"><span><Icon type="plus"/><Link to="/newGame">New game</Link></span></Menu.Item>
                    <Menu.Item key="listGames"><span><Icon type="bars"/><Link to="/listGames">ListGames</Link></span></Menu.Item>
                    <Menu.Item key="playGame"><Icon type="rocket"/>Play game!</Menu.Item>

                </Menu>
            </Sider>
        );
    }
}

class GameHeader extends React.Component {
    render() {
        return (
            <Header className="header">
                <div className="title">
                    Five-In-A-Row on Ethereum
                </div>
                <div className="header-info-bar">
                    <div> Current account: {this.props.eth.currentAccount} </div>
                </div>
            </Header>
        );
    }
}

export default App;
