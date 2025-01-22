import React from "react";

function Hello3() {
    // jsx에서 스타일을 지정할 때, 다음과 같이 ㅂ려개의 JS 객체를 만들어 처리.
    let style = {
        color: 'red',
        // font-size: 30px 와 같은 코드는 에러가 남.
        // 우리가 스타일에서 -를 쓰면 모두 다 낙타등 표기법으로 치환해 작성해야 함.
        fontSize: '30px',
        backgroundColor: 'green'
    }

    return (
        <>
            {/* class를 줄 때에 class='' 으로 주는 것이 아니라 className으로 주어야 함. */}
            <h1 style={style} className={"card"}>Hello3 입니다.</h1>
        </>
    )
}

export default Hello3