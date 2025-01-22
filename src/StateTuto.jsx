import React, {useState} from "react";

// 리엑트는 별도의 멸여을 하지 않으면 값을 따로 자기네들이 관리하지 않음.
// 화면에 한번 나온 값은, 자기네들이 관리하지 않ㄴ으면 그 값이 변경되더라도
// 화면에는 반영되지 않음.

// 정적으로 화면을 구성할 때에는 이러한 시스템이 문제 없지만
// 어떠한 버튼을 눌렀을 때 값이 바뀐다든지, input 태그 안에 값을
// 입력할 때 표시가 되게 하려면 우리가 별도로 State로 처리해야 함.
function StateTuto() {
    // useState()를 사용할 때, 왼쪽은 구조적 해체를 통한 useState 반환값
    // 차례대로, value, setValue()로 지정.
    
    // 우리가 이제 value에 값을 저장할 때에는 직접적인 할당이 아니라 setter인
    // setValue를 사용하여 값을 저장하게 됨.
    // useState()의 파라미터는 해당 state의 초기ㅗ하 값이 얼마가 될지를 지정.
    let [value, setValue] = useState(0)
    let onPlus = () => {
        setValue(prevValue => prevValue + 1)
    }

    let onMinus = () => {
        setValue(prevValue => prevValue - 1)
    }

    let style = {
        marginTop: '20px'
    }
    return (
        <>
            <h1>{value}</h1>
            <button style={style} onClick={onPlus}>+</button>
            <button style={style} onClick={onMinus}>-</button>
        </>
    )
}

export default StateTuto