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
            nickname: '강사'
        },
        {
            id: 2,
            title: '집에 가고 싶다',
            content: '집에가고 싶다 ㅠㅠ',
            nickname: '학생1'
        },
        {
            id: 3,
            title: '집에 가고 싶다',
            content: '집에가고 싶다 ㄱ-',
            nickname: '학생2'
        },
        {
            id: 4,
            title: '집에 가고 싶다',
            content: '집에가고 싶다 ㄱ-',
            nickname: '학생3'
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
            <BoardList boards={boards} onDelete={onDelete}/>
        </div>
    );
}

export default App;