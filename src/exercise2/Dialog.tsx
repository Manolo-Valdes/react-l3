import './Dialog.css';
import {forwardRef, ReactNode, useImperativeHandle, useRef, useState } from "react";

interface DialogProps {
    children:ReactNode,
}
export interface iDialog
{
    show:()=>void,
    showModal:()=>void,
    close:()=>void
}

function DialogToolBox({visible,onClose}:{visible:boolean,onClose:()=>void})
{
    if (!visible)
        return (<></>);

    return (
        <div style={{ display: "flex", gap: "1em" }}>
        <span className='close' onClick={onClose}></span>
    </div>
    );
}


const Dialog = forwardRef<iDialog,DialogProps> ( ({children}:DialogProps,ref) =>
{
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [closeVisible , setCloseVisible] = useState(false);
    useImperativeHandle(ref, () => {
        return {
          show() {
            console.log('opening Dialog..')
            setCloseVisible(false);
            dialogRef.current?.show();
      },
          showModal() {
            setCloseVisible(true);
            console.log('opening modal Dialog..')
            dialogRef.current?.showModal();
      },
          close() {
            console.log('clossing Dialog..')
            dialogRef.current?.close();
        },
      };
      }, []);


    const closeDlg = () =>{
        if (dialogRef.current?.open)
        {
            console.log('clossing Dialog..')
            dialogRef.current?.close();
        }
    }

    return (
        <dialog ref={dialogRef}>
            <DialogToolBox visible={closeVisible} onClose={closeDlg} />
            <h1>Hello</h1>
            {children}
        </dialog>
    )
});

export default Dialog ;