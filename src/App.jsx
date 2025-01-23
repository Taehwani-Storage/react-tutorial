import './App.css'
import BorderedBox from "./BorderedBox.jsx";
import React, {useMemo, useReducer, useRef} from "react";
import ToDo from "./ToDo.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Hello from "./Hello.jsx";
import Hello2 from "./Hello2.jsx";


function countEnabled(array) {
    console.log('countEnabled() called')
    return array.filter(e => e.enable).length
}

function reducer(state, action) {
    switch (action.type) {
        case 'ON_CHANGE':
            return {
                ...state,
                inputs: {...state.inputs},
                [action.name]: action.value
            }
        case 'ON_INSERT':
            return {
                inputs: initialState.inputs,
                array: [...state.array, action.user]
            }
        case 'ON_DELETE':
            return {
                ...state,
                array: state.array.filter(e => e.id !== action.id)
            }
        case 'ON_TOGGLE':
            return {
                ...state,
                array: state.array.map(e => e.id === action.id ?
                    {...e, enable: !e.enable} : e)
            }
    }
}

let initialState = {
    inputs: {
        username: '',
        password: '',
        nickname: ''
    },
    array: [
        {id: 1, username: 'a', password: 'a', nickname: '사용자 A', enable: true},
        {id: 2, username: 'b', password: 'b', nickname: '사용자 B', enable: true},
        {id: 3, username: 'c', password: 'c', nickname: '사용자 C', enable: true},
        {id: 4, username: 'd', password: 'd', nickname: '사용자 D', enable: true},
        {id: 5, username: 'e', password: 'e', nickname: '사용자 E', enable: true},
        {id: 6, username: 'f', password: 'f', nickname: '사용자 F', enable: true}
    ]
}

let todoState = {
    inputs: {
        datetime: '',
        todolist: ''
    },
    array: [
        {id: 1, datetime: '2025-01-23', todolist: '독서 하기'},
        {id: 2, datetime: '2025-01-24', todolist: '코테 준비하기'},
        {id: 3, datetime: '2025-01-25', todolist: '영화 관람하기'},
        {id: 4, datetime: '2025-01-26', todolist: '영화 게시판 개발하기'},
        {id: 5, datetime: '2025-01-27', todolist: '정보처리기사 학습하기'}
    ]

}

function App() {

    let [state, dispatch] = useReducer(reducer, todoState)

    let {array} = state
    // let {username, password, nickname} = state.inputs
    let {datetime, todolist} = state.inputs

    let nextId = useRef(6)

    let onChange = (e) => {
        let {name, value} = e.target
        dispatch({
            type: 'ON_CHANGE',
            name,
            value
        })
    }

    /*let onInsert = () => {
        let user = {
            id: nextId.current,
            username: username,
            password: password,
            nickname: nickname
        }
        dispatch({
            type: 'ON_INSERT',
            user: user
        })
        nextId.current += 1
    }*/
    // 실습
    let onInsert = () => {
        let todo = {
            id: nextId.current,
            datetime: datetime,
            todolist: todolist,
        }
        dispatch({
            type: 'ON_INSERT',
            user: todo
        })
    }

    let onDelete = (id) => {
        dispatch({
            type: 'ON_DELETE',
            id
        })
    }

    let onToggle = (id) => {
        dispatch({
            type: 'ON_TOGGLE',
            id
        })
    }
    // useMemo() 는 기존에 연산한 것을 재사용하되,
    // 특정 요소(지금은 array)가 변경될 때만 해당 연산을 재실행 시킴.
    let enabled = useMemo(() => countEnabled(array), [array])

    return (
        // 반환할 때 여러개 불가능!!
        // div로 묶어서 한 번에 여러 값을 반환할 수 있음
        <BrowserRouter>
            {/*<h1>현재 활성화된 유저 수: {enabled}</h1>
            <MyInsert
                datetime={datetime}
                todolist={todolist}
                onChange={onChange}
                onInsert={onInsert}
            />
            <hr/>
            <MyArray arr={array} onDelete={onDelete} onToggle={onToggle}/>*/}
            <Routes>
                {/*{ 인덱스 화면 접속할 때 보여줄 컴포넌트 }*/}
                <Route path="/" element={<Hello/>}/>
                {/* http://localhost:~~~/todo 에 접속할 때 보여줄 컴포넌트 */}
                <Route path="/todo" element={<ToDo/>}/>
                {/* http://localhost:~~~/todo/33 에 접속할 때 보여줄 컴포넌트 */}
                <Route path="/todo/:tempId" element={<Hello2/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
