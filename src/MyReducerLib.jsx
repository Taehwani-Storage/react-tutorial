export function reducer(state, action) {
    // reducer를 사용할 때 action의 종류에 따라 실행될 코드가 달라야 하므로
    // switch를 사용하여 action 종류를 분류.
    switch (action.type) {
        case 'PLUS':
            return state + 1
        case 'MINUS':
            return state - 1
        default:
            return state
    }
}
