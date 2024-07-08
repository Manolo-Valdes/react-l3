import { useStoreNotifier } from "./storeHook";

function KeyListener({storeKey}:{storeKey:string})
{
    const value = useStoreNotifier<string>(storeKey)

    return (
        <div>
            <h3>Listener of key: {storeKey}</h3>
            <h4>Value: {value}</h4>
        </div>
    );
}

export default KeyListener;