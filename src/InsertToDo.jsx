import React from 'react';

function InsertToDo({date, task, onChange, onInsert}) {
    return (
        <>
            <input name='date' type='date' value={date} onChange={onChange}/>
            <input name='task' placeholder='할 일' value={task} onChange={onChange}/>
            <button onClick={onInsert}>입력</button>
        </>
    )
}

export default InsertToDo;