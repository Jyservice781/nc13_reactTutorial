import React, {useState} from "react";
import BorderBox from "./BorderBox";

function ResetButton() {
    let [text, setText] = useState('')
    let onChange = (event) => {
        // listerEvent
        setText(event.target.value)
    }

    let onClick = () => {
        setText('')
    }

    return (
        <BorderBox>
            {/*input 과 같이 연동을 시킴으로써 reset 할때 같이 지워짐.*/}
            <input onChange={onChange} value={text}/>
            <button onClick={onClick}>reset</button>
            <h1>입력된 값: {text}</h1>
        </BorderBox>
    );
}

export default ResetButton;