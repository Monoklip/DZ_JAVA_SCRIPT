import React from "react";
import './textarea.scss';

const TextArea =(props: { ban: any[]; addTextArea: React.ChangeEventHandler<HTMLTextAreaElement> | undefined; })=>{

    return(
        <>
             <div className="textArea">
                <textarea name="" id="" value={props.ban.join(' ')}  placeholder="text here" onChange={props.addTextArea}></textarea>
            </div>
        </>
    )
}

export default TextArea;