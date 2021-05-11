import React from 'React';
import PlayerName from './player-name';

const UserInput=()=>{
    const getPlayerName=(e,id)=>{
        let player=e.target.value;
        let key='player'+id
        if(id==1){
            this.setState({player:player})
        }
        this.setState({[key]:player})

    }
    return(
        <div>
            <PlayerName id={1} onNameChange={(e,id)=>getPlayerName(e,id)}/>
            <PlayerName id={2} onNameChange={(e,id)=>getPlayerName(e,id)}/>
            <button className='btn'>Start</button>
        </div>
    )
}

export default UserInput;