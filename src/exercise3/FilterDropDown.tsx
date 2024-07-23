import './FilterDropDown.css';
import { useCallback, useEffect, useRef, useState } from "react";

interface FilterDropdownProps<T>
{
    items:T[],
    filterProp:keyof T,
    placeholder?:string
    valueChange?:(items:T[])=>void
}


function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  
function FilterDropdownList({items}:{items:string[]})
  {
    if (items.length ===0)
        return (<></>)
    return (<ul className="dropDown">{items.map((value,i) => <li key={i} dangerouslySetInnerHTML={{ __html:value}} />)}</ul>);
  }  

function FilterDropdown<T>({items,filterProp,placeholder,valueChange=(items:T[])=>{}}:FilterDropdownProps<T>)
{
    const inputRef = useRef<HTMLInputElement>(null);
    const [filteredItems , setFilteredItems] = useState<string[]>([])
  
    function filterItems(filter:string):T[]
    {
        console.log(filter);
        const filtered = items.filter(item => {
            const value = getProperty(item,filterProp) as string;
            if (value)
                return value.toUpperCase().includes(filter.toUpperCase()) 
            else
                return false;
        });
        return filtered;
    }

    const filterCb = useCallback(filterItems,[items,filterProp])
    useEffect(()=>{
        const value = inputRef.current?.value;
        if (value)
            {
            const filtered:T[] = filterCb(value);
        const filteredvalues = filtered.map(item => boldPattern((getProperty(item,filterProp) as string), value));
        setFilteredItems(filteredvalues);
            }
        },[filterCb,filterProp]
        );


    function boldPattern(value:string,pattern:string):string
    {
        console.log('pattern:',pattern);
        var re = new RegExp(pattern, 'ig')
        return (
            value.replace(re, '<b>$&</b>')
        )
    }
    function onchangeHandler()
    {
        const value = inputRef.current?.value;
        console.log(value);
        if (value)
        {
            const filtered:T[] = filterItems(value);
            const filteredvalues = filtered.map(item => boldPattern((getProperty(item,filterProp) as string), value));
            setFilteredItems(filteredvalues);
            valueChange(filtered);
        }
        else
        {
            setFilteredItems([]);
            valueChange([]);
        }
    }

    return (
        <>
        <input ref={inputRef} type="text" 
         onChange={onchangeHandler}
         placeholder={placeholder}
        />
        <FilterDropdownList items={filteredItems}/>
        </>
    );
}


export default FilterDropdown;