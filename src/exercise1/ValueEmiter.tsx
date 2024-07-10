import { useRef } from "react";
import useStoreValue from "./storeHook";

function ValueEmiter({storeKey,value}:{storeKey:string,value:string})
{
    const setValue = useStoreValue(storeKey,value)
    const inputElement = useRef<HTMLInputElement>(null);

    const onClickHandler = ()=>
        {
            if (inputElement.current)
                setValue(inputElement.current.value)
        } 
    return (
        <>
            <h3>Value Setter for Key: {storeKey}</h3>
            <input type="text" ref={inputElement} />
            <button onClick={onClickHandler}>Change value</button>
        </>
    );
}

export default ValueEmiter;