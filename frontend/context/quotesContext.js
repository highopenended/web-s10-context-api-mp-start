// Create your context here
import React, {createContext} from "react";

const dataToProvide={
    test:'test'
}

export const QuotesContext = createContext()

export function QuotesProvider(props){
    return(
        <QuotesContext.Provider value ={dataToProvide}>
            {props.children}
        </QuotesContext.Provider>
    )
}