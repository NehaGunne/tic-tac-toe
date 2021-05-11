import React from 'react';


const PlayerName=(props)=>{
    let style={
        margin:'10px',
        padding:'5px',
        textAlign:'center'
    }
    return (
        <div style={style}>
            <label >Enter player{props.id} name:</label>
            <input type='text' onChange={(e)=>props.onNameChange(e,props.id)}/>
        </div>
    )
}
export default PlayerName;