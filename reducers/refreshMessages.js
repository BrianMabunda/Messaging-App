import React from 'react';

function reFreshMessage(state=0,action) {
    if(action.type==="refresh"){
        state=1;
        return state;
        // console.log("hello world");
    }
    else if(action.type==="Done"){
        state=0;
        return state;
    }
    else
        return state;;
}

export default reFreshMessage;