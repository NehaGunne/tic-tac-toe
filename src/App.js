import React from 'react';
import AppHeader from './components/AppHeader';
import PlayerName from './components/player-name';
import TicTacToe from './components/tic-tac-toe';



class App extends React.Component{
    player1='';player2=''
    state={
        flag:true
    }
    getPlayerName1=(e,id)=>{
        let player=e.target.value;
        this.player1=player

    }
    getPlayerName2=(e,id)=>{
        let player=e.target.value;
        this.player2=player

    }
    getBoard=()=>{
        this.setState({flag:false})
    }
    render_input(){
        return (
            <div>
                <PlayerName id={1} onNameChange={(e,id)=>this.getPlayerName1(e,id)}/>
                <PlayerName id={2} onNameChange={(e,id)=>this.getPlayerName2(e,id)}/>
                <div style={{textAlign:'center'}}>
                    <button className='btn' onClick={this.getBoard}>Start</button>
                </div>

            </div>
        )
    }
    render_board(){
        if(this.player1=='' ||this.player2=='')
        {
            this.render_input()
            this.setState({flag:true})
            return alert('names are empty')
        }
        if(!this.state.flag){
            return (
                <div>
                    <TicTacToe player1={this.player1} player2={this.player2} />
                </div>
            )

        }
         
    }
    render(){
    return (
        <div>
            <AppHeader title="Tic Tac Toe" theme="dark"/>
            {this.state.flag===true?this.render_input():this.render_board()}
            

        </div>
    )
    }
}

export default App;