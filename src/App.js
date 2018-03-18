import React, {Component} from 'react';
import './App.css';
import Board from './Game.js';
import Web3 from 'web3';
import abi from './abi.js';
import Eth from 'ethjs-query';
import EthContract from 'ethjs-contract';

import {Layout, Menu, Dropdown, Button, Icon, Breadcrumb} from 'antd';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

class App extends Component {
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

        const address = '0x6ee3a20b862d1e10c30868e6d0b2c5c9089581f3';

        const eth = new Eth(web3.currentProvider);
        const contract = (new EthContract(eth))(abi).at(address);
        const currentAccount = web3.eth.accounts[0];

        this.state = {
            eth: {
                currentAccount: currentAccount,
                contract: contract,
                web3: web3
            }
        };

    }

    render() {
        return (
            <div className="App">
                <Layout className="layout">
                    <GameHeader eth={this.state.eth}/>

                    <Layout>
                        <GameMenu/>
                        <Game eth={this.state.eth} />
                    </Layout>
                </Layout>
            </div>
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
                    <Menu.Item key="newGame"><Icon type="plus"/>New game</Menu.Item>
                    <Menu.Item key="listGames"><Icon type="bars"/>List games</Menu.Item>
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

class Game extends React.Component {
    render() {
        return (
            <Layout style={{padding: '0 24px 24px'}}>
                <Content className="content" style={{}}>
                    <div className="game">
                        <div className="game-board">
                            <Board size={10} eth={this.props.eth}/>
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default App;
