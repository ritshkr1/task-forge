import {useState} from 'react';
function FiltersInput({ children, onInputFilter, show, setFilterShow }) {
  const [input,setInput] = useState("");
  function handleInput(value){
    setInput(value);
    onInputFilter(value);
  }
  return <div className="table-head-wrapper">
      <span className="table-head-title">{children}</span>
      <span
        className="filter-icon"
      onClick={setFilterShow}
        title="Filter"
      ><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='16' height='16' fill='none' stroke='#555' stroke-width='40' stroke-linecap='round' stroke-linejoin='round'><path d='M64 96h384L304 288v128l-96 32V288L64 96z'/></svg></span>
    {show && (
        <input
          type="text"
          value={input}
          onChange={(e) => handleInput(e.target.value)}
          className="table-head-filter"
          placeholder="Filter..."
        />
      )}
    </div>
}

export default FiltersInput;