import React from "react";
import './textarea.scss';

const TextArea =(props)=>{

    return(
        <>
             <div className="textArea">
                <textarea name="" id="" cols="30" rows="10" value={props.ban.join(' ')}  placeholder="text here" onChange={props.addTextArea}></textarea>
            </div>
        </>
    )
}

export default TextArea;