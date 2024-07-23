import React, {useState, useRef} from 'react';
import BorderBox from "./BorderBox";

function MultiInput() {
    let [inputs, setInputs] = useState({
        // 객체 초기화
        username: '',
        password: ''
    })

    // 우리가 일반적으로 자바스크립트로 특정 DOM 객체를 찾을 때에는?
    // getElementById, querySelector
    // 리액트 상에서는 저러한 상황에서는 useRef() 를 사용하게 된다. -> react library 에서 꺼내서 사용 가능

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

    let passwordInput = useRef();

    let [message, setMessage] = useState('')
    // 해당 내용이 전역으로 사용 되어야 하는데,
    // onClick 매서드 안에서만 사용이 되서 value 에 오류를 범하고 있었음.

    let {username, password} = inputs

    let onClick = () => {
        if (username === password) {
            setMessage('로그인 성공')
        } else {
            setMessage('로그인 실패')
            setInputs({
                ...inputs,
                password: ''
            })

            passwordInput.current.focus()
        }
    }

    return (
        <BorderBox>
            <input placeholder='username' name='username' onChange={onChange} value={username}/>
            <input placeholder='password' type='password' name='password' value={password} onChange={onChange} ref={passwordInput}/>
            <button onClick={onClick}>log-in</button>
            <h1>{message}</h1>
        </BorderBox>
    );
}

export default MultiInput;