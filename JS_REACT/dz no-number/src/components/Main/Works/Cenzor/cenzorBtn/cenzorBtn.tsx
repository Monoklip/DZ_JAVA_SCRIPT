import React from "react";
import './cenzorBtn.scss';

const CenzorBtn =(props: { cenzorBtn: React.MouseEventHandler<HTMLButtonElement> | undefined; })=>{


    return(
        <>
             <button className="cenzorBtn" onClick={props.cenzorBtn}>Cenzor</button>
        </>
    )
}

export default CenzorBtn;