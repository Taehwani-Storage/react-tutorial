// react 컴포넌트는 반드시 react를 임포트 해야 함.
import React from "react";

// 이 컴포넌트가 로딩될 때 어떠한 작업을 할지를 만들어 줌.
// 위의 컴포넌트로부터 값을 받아올 때, 파라미터로 props를 추가.
// 컴포넌트가 보낸 값은 props 안에 객체의 형태로 저장되므로
// props.속성이름 으로 해당 어트리뷰트 값을 불러옴
function Hello(props) {
    console.log(props.name)
    console.log(props.color)

    let style = {
        color: props.color
    }
    // jsx 에서는 반드시 한 쌍으로 묶인 태그가 반환.
    // 만약 리턴되는 내용 중에 닫히는 태그가 없다면 에러!!
    // 한 쌍보다 많은 태그가 반환되면 에러!!
    return (
        <h1 style={style}>안녕하세요!!!</h1>
    )

}
// 만양 외부에서 호출할 때, name이나 color를 넘겨주지 않을 경우를 대비해
// 우리가 기본값을 세팅하고 싶다면 다음과 같이 지정.
Hello.defaultProps = {
    nam: '안 넘어옴',
    color: 'beige'
}

// 외부에서 해당 컴포넌트를 불러올 때 사용할 이름
export default Hello