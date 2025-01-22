import React, {useEffect} from 'react';

function Element({ele, onDelete, onToggle}) {
    // 각 컴포넌트는 우리 화면에 등장/퇴장 하는 것을 마운트/언마운트 라고 표현.
    // 우리가 특정 컴포넌트가 화면에 등장하거나
    // 사라질 때 특별한 작업을 해주어야 하는 경우도 존재
    // 그럴 때, useEffect()라는 함수를 통해 해당 경우 컨트롤 하게 됨.
    /*useEffect(() => {
        console.log('MyEffect() 등장!')

        // useEffect의 경우, return 부분에 해당 컴포넌트가 사라질 때
        // 실행시킬 코드를 등록하게 됨.
        // 이때, return () => {...} 은 cleanup() 이라고 부름.
        return () => {
            console.log('MyEffect() 퇴장!')
        }
    }, [])*/ // deps는 해당 컴포넌트 안에 특정 요소가 변경되는지 감지하여
    // 변경이 되면 effect가 시작되는 것으로 인식.
    // 이때, return () => {...} 이 발생되지 않음.
    return (
        <div style={{color: ele.enable ? 'black':'red'}}>
            <hr/>
            <h1>
                <b onClick={() => onToggle(ele.id)}>{ele.id}번 회원</b>
                <button onClick={() => {onDelete(ele.id)}}>X</button>
            </h1>
            <h2>username: {ele.username}</h2>
            <h2>password: {ele.password}</h2>
            <h2>nickname: {ele.nickname}</h2>
            <hr/>
        </div>
    )
}

// props로 onDelete를 받아오므로 onDelete는 App에서 가져오는 기능.
function MyArray({arr, onDelete, onToggle}) {

    return (
        <>
            {arr.map(e => (
                <Element ele={e} key={e.id} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default MyArray