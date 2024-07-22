import React, {useState} from 'react';
import BorderBox from "./BorderBox";

function MultiInput() {
    let [inputs, setInputs] = useState({
        // 객체 초기화
        username: '',
        password: ''
    })

    let onChange = (e) => {
        // console.log(e.target.name + ": " + e.target.value)
        // spread 문법 새로운 배열을 만들고 추가적으로 값을 넣을 수 있는 문법이다.
        let {name, value} = e.target;
        // 각각 e.target 변수로 지정
        setInputs({
            ...inputs,
            // ...inputs
            // 스프레드 문법을 사용하여
            // 기존의 값을 복사한 새로운 객체를 만드는 것과 동일하다
            // setInputs 에 넣어주면 값이 변동됨.
            [name]: value
        })
    }

    let [message, setMessage] = useState('')

    let onClick = () => {
       let {username, password} = inputs
        if (username === password) {
            setMessage('로그인 성공')
        } else {
            setMessage('로그인 실패')
        }
    }

    return (
        <BorderBox>
            <input placeholder='username' name='username' onChange={onChange} />
            <input placeholder='password' type='password' name='password' onChange={onChange} />
            <button onClick={onClick}>log-in</button>
            <h1>{message}</h1>
        </BorderBox>
    );
}

export default MultiInput;