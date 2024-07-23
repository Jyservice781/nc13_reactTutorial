import React from 'react';
import BorderBox from "./BorderBox";

function Board({board, onDelete, onToggle}) {
    return (
        <BorderBox>
            <BorderBox>
                <p style={{
                    cursor: 'pointer',
                    backgroundColor: board.active ? "yellow" : "beige"
                }} onClick={() => onToggle(board.id)}>제목: {board.title}</p>
                <p>글번호: {board.id}</p>
                <p>작성자: {board.nickname}</p>
                <p>내용: {board.content}</p>
            </BorderBox>
            <button onClick={() => onDelete(board.id)}>삭제하기</button>
        </BorderBox>
    )
}

function BoardList({boards, onDelete, onToggle}) {
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
            {boards.map((b) => (
                <Board board={b} key={b.id} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </BorderBox>
    )
}

export default BoardList