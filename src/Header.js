import React from 'react';
import BorderBox from "./BorderBox";
// 비구조적 할당
function Header({name='게스트', age= -1}){
    const HeaderStyle = {
        backgroundColor: 'black',
        fontSize: '50px',
        color: 'pink'
    }

    // 해당 name 을 강제로 하드코딩 하는게 아니라
    // 어디선가 받아오기 위해 parameter 로 처리함.
    // const name = '김주영';
    // 렌더링 때문에 두번 찍혀서 출력됨

    return(
        <BorderBox>
        <div style={HeaderStyle} className="AAA">
            {/* 내부에 자바스크립트를 사용해야 한다면 무조건 {중괄호}로 감싸 줘야함. */}
            {/*{
                console.log(age)
            }*/}
            여기는 헤더입니다
            반갑습니다.
            {name}회원님

            { /* 이것은 여러줄 주석입니다. */}
        </div>
        </BorderBox>
    );
}

// 중괄호로 묶어서 사용하면 이전에 사용한 자바스크립트를 사용할 수 있다.
// jsx 에서는 className 이라고 지칭을 하는게 원칙이다.
// css 의 경우에도 카멜케이스를 사용하는 것이 원칙이다.
// 주석을 script 와 동일하게 사용

export default Header;