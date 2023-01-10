import React, { useState } from "react";
import CenzorBtn from './cenzorBtn/cenzorBtn'
import TextArea from "./textarea/textArea";
import Title from "./title/title";
import Words from "./words/words";
import '../container/container.scss'

const Container =()=>{

    const [wordBan, setWordBan] = useState([]);
    const [word, setWord] = useState('');
    const [nameValue, setNameValue] = useState();

    const addWords = event =>{
        setWord(event.target.value);
        setNameValue()
    };

    const addWordBtn = () => {
        setWordBan([...wordBan, word]);
        console.log(wordBan);
        setNameValue(' ');
    };

    const resetWord = () =>{
        setWordBan([]);
        console.log(wordBan);
    };

    const [text, setText] = useState([]);

    const addTextArea = event =>{
        setText(event.target.value)
    };

    const ban = text.toString().split(' ');

    const cenzorBtn = () =>{

        for(let i = 0; i < wordBan.length; i++){
    
            for(let j = 0; j < ban.length; j++){
    
                if(ban[j] === wordBan[i]){
                    ban[j] = `${'*'.repeat(ban[j].length)}`;
                }
            }
        }
        setText(ban.join(' '));
    };

    return(
        <>
            <div className="container">
                <Title wordBan={wordBan}/>
                <Words addWords={addWords} addWordBtn={addWordBtn} resetWord={resetWord} nameValue={nameValue}/>
                <TextArea addTextArea={addTextArea} ban={ban}/>
                <CenzorBtn cenzorBtn={cenzorBtn}/>
            </div>
        </>
    )
}

export default Container;