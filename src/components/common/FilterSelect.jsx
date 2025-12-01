import { useState } from 'react';
import SelectField from './SelectField';
function FiltersSelect({ children, onInputFilter, optionArr, show, setFilterShow }) {
    const [input, setInput] = useState("");
    function handleInput(value) {
        setInput(value);
        onInputFilter(value);
    }
    return <div className="table-head-wrapper">
        <span>{children}</span>
        <span
            className="filter-icon"
            onClick={setFilterShow}
            title="Filter"
        ><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='16' height='16' fill='none' stroke='#555' stroke-width='40' stroke-linecap='round' stroke-linejoin='round'><path d='M64 96h384L304 288v128l-96 32V288L64 96z' /></svg></span>
        {show && <SelectField input={input} setInput={handleInput} optionItems={optionArr} />}
    </div>
}

export default FiltersSelect;