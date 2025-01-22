import './App.css'
import BorderedBox from "./BorderedBox.jsx";
import MyArray from "./MyArray.jsx";
import {useMemo, useRef, useState} from "react";
import MyInsert from "./MyInsert.jsx";

function countEnabled(array) {
    console.log('countEnabled() called')
    return array.filter(e => e.enable).length
}

function App() {
    let [array, setArray] = useState(
        [
            {id: 1, username: 'a', password: 'a', nickname: '사용자 A', enable: true},
            {id: 2, username: 'b', password: 'b', nickname: '사용자 B', enable: true},
            {id: 3, username: 'c', password: 'c', nickname: '사용자 C', enable: true},
            {id: 4, username: 'd', password: 'd', nickname: '사용자 D', enable: true},
            {id: 5, username: 'e', password: 'e', nickname: '사용자 E', enable: true},
            {id: 6, username: 'f', password: 'f', nickname: '사용자 F', enable: true}
        ]
    )

    // Array 컴포넌트에 전달할 props 내용들
    let [inputs, setInputs] = useState({
        username: '',
        password: '',
        nickname: ''
    })

    let {username, password, nickname} = inputs
    let onChange = (e) => {
        let {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    let nextId = useRef(7)
    let onInsert = () => {
        let user = {
            id: nextId.current,
            username: username,
            password: password,
            nickname: nickname
        }

        setArray([...array, user])
        setInputs({
            username: '',
            password: '',
            nickname: ''
        })
        nextId.current += 1
    }

    let onDelete = (id) => {
        setArray(array.filter(e => e.id !== id))
    }

    let onToggle = (id) => {
        setArray(
            array.map(e => e.id === id ? {...e, enable: !e.enable} : e)
        )
    }
    // useMemo() 는 기존에 연산한 것을 재사용하되,
    // 특정 요소(지금은 array)가 변경될 때만 해당 연산을 재실행 시킴.
    let enabled = useMemo(() => countEnabled(array), [array])

    return (
        // 반환할 때 여러개 불가능!!
        // div로 묶어서 한 번에 여러 값을 반환할 수 있음
        <BorderedBox>
            <h1>현재 활성화된 유저 수: {enabled}</h1>
            <MyInsert
                username={username}
                password={password}
                nickname={nickname}
                onChange={onChange}
                onInsert={onInsert}
            />
            <hr/>
            <MyArray arr={array} onDelete={onDelete} onToggle={onToggle}/>
        </BorderedBox>
    )
}

export default App
