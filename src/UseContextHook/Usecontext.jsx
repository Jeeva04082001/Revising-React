import React,{createContext,useState} from 'react'
import Container from './Container'

export const ThemeContext = createContext();

//   {/* 14-06-2025 */}
const Usecontext = () => {
    const [Theme, setTheme] = useState('light');

    const toogleTheme = () =>{
        setTheme((curr)=> (curr === "light" ? "dark" : "light"));
    };





    return(
    <>
        {/* / Single Value/ */}
        {/* <ThemeContext.Provider value={Theme}/> */}

        {/* / Value passed javascript object and passed multiplt values /  */}

        <ThemeContext.Provider value={{Theme}}>
            <button onClick={toogleTheme}>Toogle theme</button>
            <h1>App Component</h1>
            <Container/>
        </ThemeContext.Provider>

        
    </>
    );
}

export default Usecontext;