import React from 'react';




const Cell=(props)=>{
    console.log(props.isWinning);
    let style={
        color:props.value?'black':'transparent',
    }
    let value=props.value||'-';
    return(
        <button onClick={()=>props.onCellClick(props.id)}
            style={style}  className={props.isWinning?"winner-cell cell":"cell"}>{value}</button>

    )
}


export default Cell;
