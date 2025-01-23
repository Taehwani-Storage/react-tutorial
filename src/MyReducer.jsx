import React, {useReducer, useState} from "react"
import {reducer} from './MyReducerLib.jsx'

function MyReducer() {
    let [value, dispatch] = useReducer(reducer,0)

    let onPlus = () => {
        dispatch({type: 'PLUS'})
    }
    let onMinus = () => {
        dispatch({type: 'MINUS'})
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

export default MyReducer