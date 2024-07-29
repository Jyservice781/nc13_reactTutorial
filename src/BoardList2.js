import {Link, NavLink, Outlet} from "react-router-dom";

let BoardList2 = () => {
    let style = {
        fontStyle : 'italic',
        fontSize : '15px',
    }

    return (
        <>
           {/*
           ?? <> 빈 태그의 의미가 있나?
           <> 태그가 없다면 동시에 두 개의
           Outlet 자리에 서브루트를 출력하게 됨.
                -> boardList 에서 boardOne 을 outlet 자리에 출력시켜줌.
           */}
            <Outlet/>
           <ol style={{
               listStyle: 'none'
           }}>
                <li>
                    <Link to={"/board/1"}>
                        {/* NavLink 는 해당 링크와 같을 때 style 에 대해서 엑티브 속성을 먹일 수 있다.*/}
                        <NavLink to={"/board/1"} style={({isActive}) => (isActive ? style : undefined)}>
                            1번 게시글
                        </NavLink>
                    </Link>
                </li>
                <li>
                    <Link to={"/board/2"}>
                        <NavLink to={"/board/2"} style={({isActive}) => (isActive ? style : undefined)}>
                            2번 게시글
                        </NavLink>
                    </Link>
                </li>
                <li>
                    <Link to={"/board/3"}>
                        <NavLink to={"/board/3"} style={({isActive}) => (isActive ? style : undefined)}>
                            3번 게시글
                        </NavLink>
                    </Link>
                </li>
                <li>
                    <Link to={"/board/4"}>
                        <NavLink to={"/board/4"} style={({isActive}) => (isActive ? style : undefined)}>
                            4번 게시글
                        </NavLink>
                    </Link>
                </li>
            </ol>
        </>
    )
}

export default BoardList2;