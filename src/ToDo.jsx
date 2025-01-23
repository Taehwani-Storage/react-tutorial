import React, {useReducer, useRef} from 'react';
import InsertToDo from "./InsertToDo.jsx";
import {reducer} from "./TodoReducer.jsx";
import ToDoList from "./ToDoList.jsx";

// 처음 리엑트가 시작될 때 등록할 초기 state 값
let initialState = {
    inputs: {
        date: new Date('yyyy-MM-dd'),
        task: ''
    },
    todos: []
}

function ToDo() {
    // Reducer 등록.
    let [state, dispatch] = useReducer(reducer, initialState)

    // 비구조적 할당을 통한 필요한 변수 등록
    let {todos} = state
    let {date, task} = state.inputs

    // Todo의 id를 자동으로 부여하기 위한 변수 및 useReF 사용
    let nextId = useRef(1)

    let onChange = (e) => {
        // 이벤트가 발생한 대상의 저장된 name과 value attribute을 비구조적 할당으로 불러옴.
        let {name, value} = e.target
        // dispatch를 통해 reducer에 등록된 ON_CHANGE를 실행
        dispatch({
            type: 'ON_CHANGE',
            name,
            value
        })
    }

    let onInsert = () => {
        dispatch({
            type: 'ON_INSERT',
            todo: {
                id: nextId.current,
                date: date,
                task: task,
                isCompleted: false
            }
        })
        nextId.currenct += 1
    }

    let onToggle = (id) => {
        dispatch({
            type: 'ON_TOGGLE',
            id
        })
    }


    return (
        <>
            <InsertToDo
                date={date}
                task={task}
                onChange={onChange}
                onInsert={onInsert}
            />
            <ToDoList todos={todos} onToggle={onToggle}/>
        </>
    );
}

export default ToDo;
