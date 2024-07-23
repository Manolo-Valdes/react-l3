import { useStoreKeyListener as useStoreKeyListener } from "./storeHook";

function KeyListener({storeKey}:{storeKey:string})
{
    const value = useStoreKeyListener<string>(storeKey)

    return (
        <>
            <h3>Listener of key: {storeKey}</h3>
            <h4>Value: {value}</h4>
        </>
    );
}

export default KeyListener;