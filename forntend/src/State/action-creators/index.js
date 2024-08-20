export const addName = (name) => {
    return(dispatch) => {
        dispatch({
            type: 'add',
            payload: name
        })
    }
}

export const removeName = (name) => {
    return(dispatch) => {
        dispatch({
            type: 'remove',
            payload: name
        })
    }
}