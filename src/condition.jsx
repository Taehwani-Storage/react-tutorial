// 특정 조건에 따라 무엇이 출력될 지 결정.

import React from "react";

// js에서 구조적 해체
// 우리가 어떠한 파라미터를 넘길 경우 props로 전체를 받아올 수 있지만
// 필요에 따라 다음과 같이 작성할 수도 있음.
function Condition({name, age, color, isEnabled}) {
    console.log(age)
    console.log(color)
    console.log(isEnabled)

    return (
        <div>
            {name === '홍길동' ? <h1>관리자</h1> : <h2>일반 사용자</h2>}
            {name} 입니다.
        </div>
    )
}

export default Condition