import React from "react";

function Hello2() {
    // return() 위에는 일반적인 JS 코드를 작성할 수 있음.
    console.log("Hello2() 도착!!!")
    let name = "홍길동"

    return (
        // 만약 div 태그가 아니라면 2개의 h2 태그를 반환하려면?
        // 비어있는 태그로 묶는 것이 가능.
        <>
            <h2>
                여기는 Hello2입니다!<br/>
            </h2>
            <h3>
                {/*
                반환에 주석을 다는 경우, 중괄호, 슬래시, 별로 시작하고, 별, 슬래시, 중괄호로 끝냄.
                */}
                {/* 위에서 만든 변수나 상수를 호출할 때는 {이름}으로 호출. */}
                나는 {name}입니다.
            </h3>
        </>
    )
}

export default Hello2