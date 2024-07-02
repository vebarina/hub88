import '../assets/styles/input-filter.css';
import searchIcon from "../assets/images/search.svg";
import React, {useEffect, useState} from "react";

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

function InputFilter({onFilterChange}: FilterProps) {
  const [searchedCode, setSearchedCode] = useState("");
  const [debouncedValue, setDebouncedValue] = useState('');

  const handleFilter = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchedCode(e.currentTarget.value);
  }

  useEffect(() => {
    // add a debouncer to only filter when the user finishes typing the code
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(searchedCode);
    }, 500); // Debounce time: 500 milliseconds

    // parse the debounced value
    const parsedValue = debouncedValue.replace(/\W/g, '')
    onFilterChange(parsedValue.toUpperCase());

    return () => {
      clearTimeout(debounceTimer);
    };

  }, [searchedCode, debouncedValue, onFilterChange]);

  return (
    <div className="filter-component">
      <label>Country code (e.g. "EE"):

        <div className='input-container'>
          <img src={searchIcon} alt='svg'/>

          <input type="text" name="code-input" placeholder="Enter a country code..."
                 onChange={handleFilter} autoComplete="off"/>
        </div>
      </label>

    </div>
  )
}

export default InputFilter;