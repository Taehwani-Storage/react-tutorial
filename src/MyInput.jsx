import React, {useState} from 'react';

function MyInput() {
    let [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    let onChange = (e) => {
        // 아래의 코드는
        // let name=  e.target.name
        // let value = e.target.value
        // 이것을 비구조적 할당을 통해 한 줄로 만듦.
        let {name, value} = e.target

        // spread 문법
        // 배열, 객체의 원래 값을 그대로 복사할 때엔
        // spread문접을 사용하는데 사용방법은 다음과 같음.
        // 객체 1 = {값1: 값1, 값2: 값2, ... 값100: 값100}

        // 객체 2 = {...객체1, 값50 : 새로운 값}
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    let onReset = () => {
        setInputs({
            username: '',
            password: ''
        })
    }

    let style = {
        margin: '20px'
    }
    return (
        <>
            <input name="username" placeholder='아이디' onChange={onChange} value={inputs.username}/>
            <input name="password" placeholder='비밀번호' onChange={onChange} value={inputs.password}/>
            <button style={style} onClick={onReset}>Reset</button>
            <hr/>
            <h1 style={style} >username: {inputs.username}</h1>
            <h1 style={style} >password: {inputs.password}</h1>
        </>
    )
}

export default MyInput