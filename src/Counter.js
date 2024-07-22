import React, {useState} from 'react';
import BorderBox from './BorderBox';

function Counter(){
    const [number, setNumber] = useState(0);
    // const [value, setValue] = useState(0);
    // const [값, 변동되는 값] = 동적값의 초기값(0);

    /*
`      let numberState = useState(0);
       let number = numberState[0];
       let setNumber = numberState[1];`
   */

    // 해당 글자가 계속적으로 렌더링 되기
    // 위해서는 상태값으로 관리를 해야한다.
    let onMinus = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    let onPlus = () => {
        setNumber(number + 1);
    }

    return(
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

export default Counter;