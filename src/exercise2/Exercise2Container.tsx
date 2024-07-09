import { useRef } from "react";
import Dialog, { iDialog } from "./Dialog";

function Exercise2Container()
{
    const dialogRef = useRef<iDialog | null>(null);
    const dialogRef2 = useRef<iDialog | null>(null);
    return (
        <>
        <Dialog ref={dialogRef}>
            <h1>Modal Dialog</h1>
        </Dialog>
        <Dialog ref={dialogRef2}>
        <h1>Regular Dialog</h1>
        </Dialog>

        <button onClick={()=>dialogRef.current?.showModal()}>Show Modal</button>
        <button onClick={()=>dialogRef2.current?.show()}>Show Dialog</button>    
        <button onClick={()=>dialogRef2.current?.close()}>Close Dialog</button>    
        </>
    );
}

export default Exercise2Container;