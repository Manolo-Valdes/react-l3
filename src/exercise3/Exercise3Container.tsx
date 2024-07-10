import { ReactNode, useEffect, useState } from "react";
import FilterDropdown from "./FilterDropDown";

export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

export interface TriviaCategory {
    id:   number;
    name: string;
}

function Exercise3Container()
{
    const [categories, setCategories] = useState<TriviaCategory[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<TriviaCategory[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [filter, setFilter] = useState<keyof User>('name');
    const [userPlaceHolder, setUserPlaceHolder] = useState('user name')

    useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
        .then(response => response.json())
        .then(data =>  setCategories(data.trivia_categories))
},[]);
    useEffect(()=>{
        const url ='https://jsonplaceholder.typicode.com/users';
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(json =>  {
            const data:User[] = json;
            setUsers(data);
        })
    },[]);
 
    const onPropChange = (event:React.ChangeEvent<HTMLSelectElement>) =>
        {
            const value = event.target.value as keyof User;
            setFilter(value);
            if (event.target.value === 'user')
                setUserPlaceHolder('user name')
            else
                setUserPlaceHolder('user phone')
        }
    
    

    function triviaToRows(items:TriviaCategory[]):ReactNode
    {
       return items.map((item,i) => (<tr key={i}><td>{item.id}</td><td>{item.name}</td></tr>))
    }

    return(
        <>
            <h1>Exercise 3</h1>
            <div className='row'>
                <div className='col border'>
                    <h3>User data</h3>    
                    <span>Find by:</span><select id="propSelect" onChange={onPropChange}>
                        <option value="name">name</option>
                        <option value="phone">phone</option>
                    </select>
                    <br/>
                    <FilterDropdown<User> items={users} 
                    placeholder={userPlaceHolder}
                    filterProp={filter} />
                </div>
                <div className="col border">
                    <div className="row">
                    <div className='col'>
                    <h3>Trivia data</h3>
                    <FilterDropdown<TriviaCategory> items={categories} filterProp='name'
                        placeholder="trivia name" 
                        valueChange={(items)=> setSelectedCategories(items)}
                        />
                    </div>
                <div className='col'>
                <h4>Filtered Trivia data</h4>
                <br/>
                    <table>
                        <thead>
                            <tr><td>id</td><td>name</td></tr>
                        </thead>
                        <tbody>{triviaToRows(selectedCategories)}</tbody>
                    </table>
                
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Exercise3Container;