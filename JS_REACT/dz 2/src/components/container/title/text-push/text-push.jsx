import React from "react";
import './text-push.scss'

const TextPush =(props)=>{

    return(
        <>
            <div className="text-push">{props.wordBan.join(',')}</div>
        </>
    )

}

export default TextPush;