import React, {useReducer} from 'react';
import BorderBox from './BorderBox';

function Counter() {
    // const [number, setNumber] = useState(0);
    // -> 아래에서 reducer 사용
    // 상태값을 관리하는 아이가 하나 더 있다.
    // useReducer -> 분리가 가능해짐.

    // const [value, setValue] = useState(0);
    // const [값, 변동되는 값] = 동적값의 초기값(0);

    /*
`      let numberState = useState(0);
       let number = numberState[0];
       let setNumber = numberState[1];`
   */

    // 해당 글자가 계속적으로 렌더링 되기
    // 위해서는 상태값으로 관리를 해야한다. -> useState, useReducer

    let [number, dispatch] = useReducer(reducer, 0)

    let onMinus = () => {
        // action 의 종류를 정해 줘야함
        dispatch({type: 'MINUS'})
    }

    let onPlus = () => {
        dispatch({type: 'PLUS'})
    }

    return (
        <BorderBox>
            <div>
                {number}
            </div>
            <div>
                <button onClick={onMinus}>-1</button>
                <button onClick={onPlus}>+1</button>
            </div>
        </BorderBox>
    );
}
//reducer 는 switch 문을 사용해서 함.
function reducer(state, action) {
    switch (action.type) {
        case 'MINUS':
            return state - 1;
        case 'PLUS':
            return state + 1;
        default:
            return state;
    }
}

export default Counter;