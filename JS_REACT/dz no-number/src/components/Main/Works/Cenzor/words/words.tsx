import React from "react";
import './words.scss';

const Words =(props: { addWords: React.ChangeEventHandler<HTMLInputElement> | undefined; nameValue: string | number | readonly string[] | undefined; addWordBtn: React.MouseEventHandler<HTMLButtonElement> | undefined; resetWord: React.MouseEventHandler<HTMLButtonElement> | undefined; })=>{

    return(
        <>
            <div className="words">
                <input className="inuputText" onChange={props.addWords} value={props.nameValue} placeholder="word here.."></input>
                <button className="addBtn" onClick={props.addWordBtn}>Add</button>
                <button className="resetBtn" onClick={props.resetWord}>Reset</button>
            </div>
        </>
    )
}

export default Words;