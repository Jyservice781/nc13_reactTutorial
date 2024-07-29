import React, {useContext, useEffect} from 'react';
import BorderBox from "./BorderBox";
import {BoardDispatch} from "./App";

let Board = React.memo(
    function Board({board}) {
        let dispatch = useContext(BoardDispatch)
        // react Hook
        // 갈고리를 걸어둠. 이팩트를 위한 갈고리 느낌으로 이해하면 됨.
        useEffect(() => {
            /*  console.log('board 가 컴포넌트에 셋팅 됨')
              console.log(board)*/
            return () => {
                /*console.log('board 컴포넌트가 화면에 사라지거나 수정 됨')
                console.log(board)*/
            }
            // board 를 예의주시하도록 만들 수 있음
            // 하나만 지정해서 바꿀 수 있음
            // [board] 를 주지 않았을 때는 바뀌는 애들 전부 다 감지를 하게 된다.
            // 수정사항 자체를 감지
        }, [board])
        /*
        useEffect(() => {
            return () => {
                console.log('수정수정')
            }
        })
        */

        return (
            <BorderBox>
                <BorderBox>
                    <p style={{
                        cursor: 'pointer',
                        backgroundColor: board.active ? "yellow" : "beige"
                    }} onClick={() => {
                        dispatch({
                            type: 'TOGGLE_TITLE',
                            id: board.id
                        })
                    }}>제목: {board.title}</p>
                    <p>글번호: {board.id}</p>
                    <p>작성자: {board.nickname}</p>
                    <p>내용: {board.content}</p>
                </BorderBox>
                <button onClick={() => {
                    dispatch({
                        type: 'DELETE_BOARD',
                        id: board.id
                    })
                }}>삭제하기</button>
            </BorderBox>
        )
    }
)


function BoardList({boardArray}) {
    /*
      정적 할당을
    // 동적할당으로 변경해줄 것임.
    // map 함수는 key 가 중요함.
    // 해당 key 값을 지정해주어야 처음부터 무작위로 찍어내는
    // map 성질을 잡아줌..?
    return (
       <BorderBox>
           <Board board={boards[0]}/>
           <Board board={boards[1]}/>
           <Board board={boards[2]}/>
           <Board board={boards[3]}/>
       </BorderBox>
    );
   */

    // 자바스크립트 배열의 map 함수

    return (
        <BorderBox>
            {boardArray.map((b) => (
                <Board board={b} key={b.id}/>
            ))}
        </BorderBox>
    )
}

export default React.memo(BoardList)