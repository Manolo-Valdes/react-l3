import {Dispatch , SetStateAction, useEffect, useState } from "react";


const eventName = "storage";
type Nullable<T> = T | null;


function useStoreValue<T>(key:string,_value:T):[T, (v:T)=>void]
{
    const [value , _setValue] = useState<T>(() => {
        //Check if there is a value for the key in the localstorage
        //if so, return the value from the localstorage, otherwise return _value
        const value = localStorage.getItem(key);
        if (value !== null) {
          return JSON.parse(value);
        }
        return _value;
      });

    useEffect(() => {
        console.log('setting value on store:',value , key);
        const json = JSON.stringify(value);
        localStorage.setItem(key, json);
        window.dispatchEvent(new StorageEvent(eventName, {
            key: key,
            newValue: json
        }));
      }, [key, value]);

      const setValue = (value:T) => {
        console.log('value setter called');
        _setValue(value);
      }
      return [value, setValue];
}

function useStoreNotifier<T>(key:string):Nullable<T>
{
    const [value , setValue] = useState<Nullable<T>>(() => {
        const value = localStorage.getItem(key);
        if (value !== null) {
          return JSON.parse(value);
        }
        return null;
      });
    
    useEffect(() => {
        console.log('setting notifier event listener');
        const eventHandler:EventListener = (e:Event) => {
            const ee:StorageEvent = e as StorageEvent; 
            console.log('handling storage event',e,ee.key);
            if (ee.key === key)
            {
                if (ee.newValue)
                {
                    const value = JSON.parse(ee.newValue) ;
                    setValue(value);
                }else{
                    setValue(null);
                }
            }
        };
        
        
        window.addEventListener(eventName, eventHandler);
        return () =>{
            console.log('removing storage event listener');
            window.removeEventListener(eventName, eventHandler);
        } 
      }, [key]
    );
    return value;
}

export  {useStoreNotifier};
export default useStoreValue;
