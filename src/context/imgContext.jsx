import {createContext, useReducer} from 'react'

export const ImgContext = createContext();

export const imgReducer = (state, action)=>{
    switch(action.type){
        case 'ADD':
            return {images: action.payload}
        default:
            return state
    }
}

export const ImgContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(imgReducer, {
        images: null
    });

    return (
        <ImgContext.Provider value={{...state, dispatch}}>
            {children}
        </ImgContext.Provider>
    )
}