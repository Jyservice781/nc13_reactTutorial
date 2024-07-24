import './App.css';
//useMemo - 변수의 값을 재사용
//useCallback - 함수의 값을 재사용
import React, {useCallback, useMemo, useReducer, useRef} from 'react';
import BoardList from "./BoardList";
import WriteBoard from "./WriteBoard";

function countRead(boardArray) {
    return boardArray.filter(b => b.active).length;
    // filter -> 조건식에 부합하는 부분을 제외하고 새로운 배열을 만들어 냄.
    // length 가 filter 매서드를 통해서
    // 글을 적을 때마다 렌딩되고 있음
    // -> 해당 부분을 방지? 하기 위해서 useMemo 를 사용함.
}

// 여러개의 reduce 를 사용하기 위해서 객체로 만들어서 사용
let initialState = {
    inputs: {
        title: '',
        content: '',
        nickname: ''
    },
    boardArray: [
        {
            id: 1,
            title: '지금은 점심',
            content: '집 갈까..',
            nickname: '학생',
            active: false
        },
        {
            id: 2,
            title: '지금은 점심 이후',
            content: '공부하자',
            nickname: '학생',
            active: false
        }
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        case 'WRITE_BOARD':
            return {
                inputs: initialState.inputs,
                boardArray: state.boardArray.concat(action.board)
            }

        case 'TOGGLE_TITLE':
            return {
                ...state,
                boardArray: state.boardArray.map(
                    b => b.id === action.id ? {...b, active: !b.active} : b
                )
            }
        case 'DELETE_BOARD':
            return {
                ...state,
                boardArray: state.boardArray.filter(
                    b => b.id !== action.id
                )
            }
        default:
            return state
    }
}

// !!!!!!!!!! Context 사용  !!!!!!!!!!!!!!!
export let BoardDispatch = React.createContext(null)

// boardList 에서 직접 관리를 하는게 아닌
// app 에서 props 형태로 가져오는 식으로 할것임.
function App() {
    /* let [boards, setBoards] = useState([
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

     let onChange = useCallback((e) => {
         console.log('onChange 실행')

         let {name, value} = e.target;
         setInputs(inputs => ({
             ...inputs,
             [name]: value
         }))
     }, [])

     let onWrite = useCallback(() => {
         console.log('onWrite 실행')
         let board = {
             id: nextId.current,
             title,
             content,
             nickname
         }

         setBoards(boards => boards.concat(board))

         // 초기화
         setInputs({
             title: '',
             content: '',
             nickname: ''
         })

         // 작성이 끝나고 나서 작성 버튼을 눌렀을때 초기화가 되야함.
         nextId.current += 1;
         // 내부에서 사용하고 있는 state 의 값을 deps 에 적어줌.
     }, [title, content, nickname])

     let onDelete = useCallback((id) => {
         console.log('onDelete 실행')
         //원 코드- setBoards(boards.filter(board => board.id !== id))
         setBoards(boards => boards.filter(board => board.id !== id))
         // === / !== -> 데이터 타입 + 값 자체를 검증한다.
         // === - 값과 데이터타입이 동일할때 true 를 반환한다 (일치)
         // !== - 두 데이터 타입이 동일 하지 않을때 true 를 반환한다 (불일치)
     }, [])
     // filter 매서드
     // 조건식에 알맞는 부분을
     // 새로운 배열로 반환한다.

     // 삼항 연산자 (Ternary Operator)
     // 조건식 ? true 일떄 : false 일때


     let onToggle = useCallback((id) => {
         console.log('onToggle 실행')

         // setBoards 안에 넣어서 () 안의 일련의 값을 셋팅해줌.
         setBoards(boards => boards.map(
                 board =>
                     board.id === id ? {...board, active: !board.active} : board
             )

             /!* 원 코드
             boards.map(b =>
                     b.id === id ? {...b, active: !b.active} : b
                 // b.id === id 일때 b. active 의 값만 반전시켜라
             )
             *!/
         )
     }, [])

     // 내가 적용한 값을 따로 계산하지 않도록 하는 매서드임. react Hook
     // useMemo 를 사용하면 hook 을 사용하게 되면 컴포넌트에서만 사용해야함.
     // [deps] 에는 반드시 사용하고 있는 state 의 값을 지정해주어야한다.
     let count = useMemo(() => countRead(boards), [boards])
 */
    let [state, dispatch] = useReducer(reducer, initialState)
    let nextId = useRef(3)
    let {title, content, nickname} = state.inputs
    let {boardArray} = state;

    let onChange = useCallback(e => {
        let {name, value} = e.target
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        })
    }, [])

    let onWrite = useCallback(() => {
        nextId.current += 1;
        dispatch({
            type: 'WRITE_BOARD',
            board: {
                id: nextId.current,
                title,
                content,
                nickname
            }
        })

    },[title, content, nickname])

    // count -> board 의 읽은 갯수를 count 하기 위한 변수임.
    // useMemo 를 사용하여 성능 최적화를 했다고 볼 수 있음.
    let count = useMemo(() => countRead(boardArray), [boardArray])

    return (
        <BoardDispatch.Provider value={dispatch}>
        <div className="App">
            <WriteBoard
                title={title}
                content={content}
                nickname={nickname}
                onChange={onChange}
                onWrite={onWrite}
            />
            <h1>읽은 글의 갯수: {count} </h1>
            <BoardList boardArray={boardArray} />
        </div>
        </BoardDispatch.Provider>
    );
}

export default App;