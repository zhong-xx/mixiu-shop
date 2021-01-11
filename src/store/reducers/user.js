const initState = {
    identity: 'visitor'
}

function user(state = initState, action) {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'identityChangeAction':
            newState.identity = 'admin'
            return newState
        default:
            return state
    }
}

export default user