import KeyListener from "./KeyListener";
import ValueEmiter from "./ValueEmiter";


function Example1Container()
{
    return (
        <>
        <h1>Example 1</h1>
        <ValueEmiter storeKey='keyA' value='Hello' />
        <KeyListener storeKey='keyA'/>
        <KeyListener storeKey='keyA'/>
        </>
    );
}

export default Example1Container;