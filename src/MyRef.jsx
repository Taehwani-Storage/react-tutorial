import React, {useRef, useState} from 'react';

function MyRef() {
    let [inputs, setInputs] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: ''
    })

    let [result, setResult] = useState('')

    // userRef는 특정 DOM 객체를 선택할 때 사용.
    // JS 코드에 'let 이름 = useRef()' 로 사용하고
    // 태그에는 ref={이름} 으로 작성.
    let form1 = useRef()
    let form2 = useRef()
    let form3 = useRef()
    let form4 = useRef()

    let {input1, input2, input3, input4} = inputs
    let onChange = (e) => {
        let {name, value} = e.target

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    let validate = () => {
        if(input1 === '') {
            setResult('1번 input이 비었음')
            form1.current.focus()
        } else if(input2 === '') {
            setResult('2번 input이 비었음')
            form2.current.focus()
        } else if(input3 === '') {
            setResult('3번 input이 비었음')
            form3.current.focus()
        } else if(input4 === '') {
            setResult('4번 input이 비었음')
            form4.current.focus()
        } else {
            setResult('아무 문제 없음')
        }
    }

    return (
        <>
            <input name="input1" value={input1} onChange={onChange} ref={form1}/>
            <input name="input2" value={input2} onChange={onChange} ref={form2}/>
            <input name="input3" value={input3} onChange={onChange} ref={form3}/>
            <input name="input4" value={input4} onChange={onChange} ref={form4}/>
            <hr/>
            <button onClick={validate}>빈 곳 찾기</button>
            <h1>{result}</h1>
        </>
    );
}

export default MyRef