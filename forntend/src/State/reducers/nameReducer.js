const reducer = (state = 'Login First!', action) => {
    if(action.type === 'add'){
        return action.payload;
    }
    else if(action.type === 'remove'){
        return 'Logged Out!';
    }
    else{
        return state;
    }
}

export default reducer;