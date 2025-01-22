import React from "react";

// 어떠한 컴포넌트 안에 다른 컴포넌트가 출력이 되어야 한다면,
// 바깥쪽 컴포넌트의 내용을 비어 놓으면, 아무것도 출력이 되지 않음.
// 이런 경우, 바깥쪽 컴포넌트에 파라미터로 {children}을 보내어
// 이 컴포넌트가 다른 것을 포함할 수 있다는 것을 적어주면 됨.
function BorderedBox({children}) {
    let style = {
        padding: '20px',
        border: '2px solid blue'
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default BorderedBox