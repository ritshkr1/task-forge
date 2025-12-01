export default function SelectField({ label, input, setInput, optionItems }) {
    return <div className='modal-field'>{label && <label>{label}</label>}
        <select value={input} onChange={(e) => setInput(e.target.value)}>
            {optionItems.map((curr) => <option value={curr} key={curr}> {curr}</option>
            )}
        </select></div>
}