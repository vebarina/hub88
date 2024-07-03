import '../assets/styles/input-filter.css';
import React, {useEffect, useState} from "react";
import searchIcon from "../assets/images/search.svg";

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

function InputFilter({onFilterChange}: FilterProps) {
  const [searchedCode, setSearchedCode] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  const handleFilter = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchedCode(e.currentTarget.value);
  }

  useEffect(() => {
    // add a debouncer to only filter when the user finishes typing the code
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(searchedCode);
    }, 500);

    // parse the debounced value to only allow letters
    const parsedValue = debouncedValue.replace(/\W/g, '')
    onFilterChange(parsedValue.toUpperCase()); // transform to upper case to match the GraphQL data

    return () => {
      clearTimeout(debounceTimer);
    };

  }, [searchedCode, debouncedValue, onFilterChange]);

  return (
    <div className="filter-component">
      <label>
        Country code (e.g. "EE"):
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