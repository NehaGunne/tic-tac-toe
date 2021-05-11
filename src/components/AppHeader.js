import React from 'react';

const AppHeader=(props)=>{
    let style={
        height:"70px",
        borderBottom:"1px solid gray",
        marginBottom:"10px",
        margin:"0px"
    }
    if(props.theme==='dark'){
        style.backgroundColor="black";
        style.color="white";
    }
    return(
        <h1 style={style}>{props.title}</h1>
    )
}
export default AppHeader;