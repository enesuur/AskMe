
import { CiSearch } from 'react-icons/ci';
import './Search.css';
import { useState } from 'react';
export default function Search(){
    const [searchTerm,setSearchTerm] = useState('');

    function handleSearchChange(event){
        const value = event.target.current.value;
        setSearchTerm(value);
    }
    return(
        <div className="search">
            <input type='text' placeholder='Search...' onChange={handleSearchChange}/>
            <span>
                <CiSearch/>
            </span>
        </div>
    )
}