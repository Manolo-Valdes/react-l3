import React, { ReactElement } from 'react';
import './Dialog.css';
import {forwardRef, ReactNode, useImperativeHandle, useRef, useState } from "react";

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

function DialogHeader({children}:{children:ReactNode})
{
    return (
        <>
        {children}
        </>
    )
}
function DialogContent({children}:{children:ReactNode})
{
    return (
        <>
        {children}
        </>
    )
}
function DialogFooter({children}:{children:ReactNode})
{
    return (
        <>
        {children}
        </>
    )
}
const Dialog = forwardRef<iDialog,{children:ReactNode}> ( ({children}:{children:ReactNode},ref) =>
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


    let header:ReactElement;
    let footer:ReactElement;
    let content:ReactElement;

    React.Children.forEach(children, (child) => {
        console.log(child);
        if (!React.isValidElement(child)) return;
        if (child.type === DialogHeader) {
          header = child;
        } else if (child.type === DialogFooter) {
          footer = child;
        } else if (child.type === DialogContent){
            content=child;
        }
      });

      function renderHeader()
      {
        console.log(header);
        if (header)
            return header
      }
      function renderContent()
      {
        if (content)
            return content
      }
      function renderFooter()
      {
        if (footer)
            return footer
      }

    return (
        <dialog ref={dialogRef}>
            <DialogToolBox visible={closeVisible} onClose={closeDlg} />
            <>{renderHeader()}</>
            <>{renderContent()}</>
            <>{renderFooter()}</>
        </dialog>
    )
});

export default Dialog ;
export {DialogHeader , DialogContent, DialogFooter}