import React,{useState} from 'react';
import s from "./SearchBar.module.css"


function SearchBar({onSearch,onClear}) {

const [city, setCity] = useState("")

  function handleChange(event){
    setCity(event.target.value);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(city);
      setCity("");
    }
  }
  function searchClick() {
    onSearch(city);
    setCity("");
  }
    return <div className={s.searchbar}>
        <input className={s.input} onKeyDown={handleKeyDown} onChange={handleChange} type="text" placeholder="city.." />
        <button className={s.btn} onClick={searchClick}>Search</button>
        <button className={s.btn} onClick={onClear}>Clear</button>
    </div>;
}

export default SearchBar;