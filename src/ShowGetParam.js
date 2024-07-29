import React from 'react';
import {useLocation, useSearchParams} from "react-router-dom";
import BorderBox from "./BorderBox";

function ShowGetParam() {
    let [params, setParams] = useSearchParams()
    let id = parseInt(params.get('id'));
    let title = params.get('title')

    return(
        <BorderBox>
            <h2>겟으로 넘어온 값은? </h2>
            <h3>id : {id}, id의 type: {typeof (id)}</h3>
            {/*
            주소값을 넘겨주게 되면 string 으로 반환하게 된다.
            정말 숫자가 필요하다면 parseInt 를 사용해서 숫자로 변경해준다.
            문자를 사용했을 때 NaN 이 뜬다
            */}
            <h3>title: {title}, title 의 type: {typeof (title)}</h3>
        </BorderBox>
    )
}

export default ShowGetParam;