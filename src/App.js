import './App.css';
import {useRef, useState} from 'react';
import BoardList from "./BoardList";
import WriteBoard from "./WriteBoard";

// boardList 에서 직접 관리를 하는게 아닌
// app 에서 props 형태로 가져오는 식으로 할것임.
function App() {
    let [boards, setBoards] = useState([
        {
            id: 1,
            title: '집에 가고 싶다',
            content: '집에가고 싶다 ㅠㅠ',
            nickname: '강사',
            active: true
        },
        {
            id: 2,
            title: '집에 가고 싶다',
            content: '집에가고 싶다 ㅠㅠ',
            nickname: '학생1',
            active: false
        },
        {
            id: 3,
            title: '집에 가고 싶다',
            content: '집에가고 싶다 ㄱ-',
            nickname: '학생2',
            active: false
        },
        {
            id: 4,
            title: '집에 가고 싶다',
            content: '집에가고 싶다 ㄱ-',
            nickname: '학생3',
            active: false
        }
    ]);

    // {} : 객체
    // [] : 배열

    let [inputs, setInputs] = useState({
        title: '',
        content: '',
        nickname: ''
    });

    // 비구조적 할당
    // 비구조적 할당이란, 배열이나
    // 객체 속성을 해체하여 개별 변수에 값을
    // 담을 수 있는 JavaScript 표현식을 말한다.
    // 또는 구조 분해 할당이라고 한다.

    // 따라서 이부분은 inputs.title, inputs.content, inputs.nickname
    // 이 title, content, nickname 으로 선언해도 될 수 있도록 해체해준다고 보면 된다.
    let {title, content, nickname} = inputs

    // 다음번 id
    let nextId = useRef(5)

    let onChange = (e) => {
        let {name, value} = e.target;
        setInputs({
            // 스프레드 문법
            // -> 앞 전에 선언되었던 배열을 복사
            ...inputs,
            [name]: value
        })
    }

    let onWrite = () => {
        let board = {
            id: nextId.current,
            title,
            content,
            nickname
        }

        setBoards([
            ...boards,
            board
        ])
        // 초기화
        setInputs({
            title: '',
            content: '',
            nickname: ''
        })

        // 작성이 끝나고 나서 작성 버튼을 눌렀을때 초기화가 되야함.
        nextId.current += 1;
    }

    let onDelete = (id) => {
        setBoards(boards.filter(board => board.id !== id))
        // === / !== -> 데이터 타입 + 값 자체를 검증한다.
        // === - 값과 데이터타입이 동일할때 true 를 반환한다 (일치)
        // !== - 두 데이터 타입이 동일 하지 않을때 true 를 반환한다 (불일치)
    }
    // filter 매서드
    // 조건식에 알맞는 부분을
    // 새로운 배열로 반환한다.

    // 삼항 연산자 (Ternary Operator)
    // 조건식 ? true 일떄 : false 일때

    let onToggle = (id) => {
        // setBoards 안에 넣어서 () 안의 일련의 값을 셋팅해줌.
        setBoards(
            boards.map(b =>
                    b.id === id ? {...b, active: !b.active} : b
                // b.id === id 일때 b. active 의 값만 반전시켜라
            )
        )
    }

    return (
        <div className="App">
            <WriteBoard
                title={title}
                content={content}
                nickname={nickname}
                onWrite={onWrite}
                onChange={onChange}
            />
            <BoardList boards={boards} onDelete={onDelete} onToggle={onToggle}/>
        </div>
    );
}

export default App;