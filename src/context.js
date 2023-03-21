import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export const AppProvider = ({children}) => {
    const [filmIndex, setFilmIndex] = useState(0)


    return (
        <AppContext.Provider value={{ filmIndex, setFilmIndex }}>
                {children}
            </AppContext.Provider>
        )
}