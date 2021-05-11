import React from 'react';


const Table=(props)=>{
    console.log(props.values)
    return(
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>s.no</th>
                    <th>player</th>
                    <th>position</th>
                </tr>
            </thead>
            <tbody id='tbody'>
                {props.values.map((each)=>{
                    return(
                    <tr>
                        <td>{each[0][0]}</td>
                        <td>{each[0][2]}</td>
                        <td>{each[0][1]}</td>
                    </tr>

                )})
            }
                
            </tbody>
        </table>
    </div>

    )
}
export default Table;

