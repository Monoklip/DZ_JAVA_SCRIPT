import React from "react";
import TextPush from "./text-push/text-push";
import Text from "./text/text";
import './title.scss'

const Title =(props)=>{


    return(
        <>
            <div className="title">
                <Text />
                <TextPush wordBan={props.wordBan}/>
            </div>
        </>
    )
}

export default Title;
