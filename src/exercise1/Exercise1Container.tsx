import KeyListener from "./KeyListener";
import ValueEmiter from "./ValueEmiter";


function Exercise1Container()
{
    return (
        <>
        <h1>Exercise 1</h1>
        <ValueEmiter storeKey='keyA' value='Hello' />
        <KeyListener storeKey='keyA'/>
        <KeyListener storeKey='keyA'/>
        </>
    );
}

export default Exercise1Container;