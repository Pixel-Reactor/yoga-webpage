import { createContext, useContext,useState, useRef } from "react";

export const TaskContext = createContext();
export const Handler = () => {
    const context = useContext(TaskContext)

    if (!context) {
        throw new Error("Handler must be used within a TaskContextProvider ")
    }
    return context;
}

export const TaskContextProvider = ({ children }) => {

   
    const [modmen, setmodmen] = useState(false);
    const home = useRef(null);
    const contact = useRef(null);
    const about = useRef(null);
    const classes = useRef(null);
    const prices = useRef(null)
    
    const Scrollto = (item) =>{
        item.current.scrollIntoView({behavior: "smooth", block: "center"});
    }
   
    return (

        <TaskContext.Provider value={{modmen,setmodmen,home,contact,about,classes,prices,Scrollto}}>
            {children}
        </TaskContext.Provider>



    )
}