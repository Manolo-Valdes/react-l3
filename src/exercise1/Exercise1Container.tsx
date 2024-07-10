import KeyListener from "./KeyListener";
import ValueEmiter from "./ValueEmiter";


function Exercise1Container()
{
    return (
        <>
        <h1>Exercise 1</h1>
        <p>In order to test the key listener for external apps  key changes. open the app in other tab, or edit directly the local Storage from the dev tools</p>
        <div className="row">
        <div className="col border">
            <ValueEmiter  storeKey='keyA' value='' />
        </div>
        <div className="col border">
            <KeyListener storeKey='keyA'/>
            <KeyListener storeKey='keyA'/>  
        </div>
        </div>
        </>
    );
}

export default Exercise1Container;