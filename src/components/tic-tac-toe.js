import React from 'react';
import Board from './tic-tac-toe-board';
import Timer from './timer';

class TicTacToe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value1:0,
            value2:0
        }
        this.id1=0;
        this.id2=0;
    }
     startTimer1=()=>{
        this.id1=setInterval(()=>{
                let prev=this.state.value1;
               this.setState({value1:++prev}) 
            },1000);
    }
     startTimer2=()=>{
        this.id2=setInterval(()=>{
            let prev=this.state.value2;
            this.setState({value2:++prev}) 
            },1000);
    }
     stopTimer1=()=>{
        clearInterval(this.id1);
    }
     stopTimer2=()=>{
        clearInterval(this.id2);
    }
    timerReset=()=>{
        this.setState({value1:0,value2:0})
    }
    render(){

        return(
            <div>
                <Board start1={()=>this.startTimer1()} stop1={()=>this.stopTimer1()}
                start2={()=>this.startTimer2()} stop2={()=>this.stopTimer2()} player1={this.props.player1}
                player2={this.props.player2} reset={()=>this.timerReset()}/>
    
                <div className='game-card'>
                    <Timer id='timer1' time={this.state.value1}/>
                    <Timer id='timer2' time={this.state.value2}/>
                </div>
            </div>
    
        )
    }
}

export default TicTacToe