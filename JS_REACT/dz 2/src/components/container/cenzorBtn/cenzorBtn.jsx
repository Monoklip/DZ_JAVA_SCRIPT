import React from "react";
import './cenzorBtn.scss';

const CenzorBtn =(props)=>{


    return(
        <>
             <button className="cenzorBtn" onClick={props.cenzorBtn}>Cenzor</button>
        </>
    )
}

export default CenzorBtn;