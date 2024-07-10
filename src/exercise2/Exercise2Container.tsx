import { useRef } from "react";
import Dialog, { DialogContent, DialogFooter, DialogHeader, iDialog } from "./Dialog";

function Exercise2Container()
{
    const dialogRef = useRef<iDialog | null>(null);
    const dialogRef2 = useRef<iDialog | null>(null);
    return (
        <>
          <h1>Exercise 2</h1>
          <Dialog ref={dialogRef}>
            <DialogHeader>
                <h1>Modal Dialog Title</h1>
            </DialogHeader>
            <DialogContent>
                <p>are you sure to leave</p>
                <p>Select your responce</p>
            </DialogContent>
            <DialogFooter>
                <button onClick={()=>dialogRef.current?.close()}>yes</button>
                <button onClick={()=>dialogRef.current?.close()}>no</button>
            </DialogFooter>
        </Dialog>
        <Dialog ref={dialogRef2}>
            <DialogHeader>
                <h1>Regular Dialog</h1>
            </DialogHeader>
            <DialogContent>
                <p>Great time to use react</p>
                <p>keep working ..</p>
            </DialogContent>
  
            <DialogFooter>
                <button onClick={()=>dialogRef2.current?.close()}>close</button>
            </DialogFooter>
        </Dialog>
        <div className="row">
            <div className="col">
                <button onClick={()=>dialogRef.current?.showModal()}>Show Modal</button>
            </div>
            <div className="col">
                <button onClick={()=>dialogRef2.current?.show()}>Show Dialog</button>    
            </div>
            <div className="col">
                <button onClick={()=>dialogRef2.current?.close()}>Close Dialog</button>    
            </div>
        </div>
        </>
    );
}

export default Exercise2Container;