


const identityChangeAction = (identity) => {

    return (dispatch)=> {
        dispatch({
            type: 'identityChangeAction',
            identity
        })
    }
}

const user = {
    identityChangeAction
}

export default user