import React from 'react';
import BorderBox from "./BorderBox";
function Hello(){
    return (
        <BorderBox>
          <div>
             <h1>안녕하세요</h1>
             <h2>네이버 클라우드 13기 첫번째 리액트 컴포넌트입니다!!!!</h2>
          </div>
          <div>
             <h1>두번째 디브입니다.</h1>
          </div>
        </BorderBox>
    );
}

// javaScript x 라는 문법임.
// 반드시 태그가 시작이 되면 닫힘 태그가 있어야 한다.
// 아무런 내용이 없는 태그로도 묶어 줄 수 있다. <> </>
// 아무 내용이 없는 태그로 묶어 주면 개발자 도구에서 컴포넌트가 풀려서 보인다.

// export 꼭 있어야 함.
// export 하지 않으면 읽어올 수 없기 때문
export default Hello;