import { useState,useEffect } from "react";

export function useDebounce(value,delay) {
    const [debouncedValue, setDebounceValue]=useState(value);
    console.log(debouncedValue,'debouncedValue');
    

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value)
        },delay);
        return () => clearTimeout(timer);
    },[value,delay])

    return debouncedValue;

}














