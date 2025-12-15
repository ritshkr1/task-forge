export default function DateField({ label, input, setInput, placeholder }) {

    return <div className='modal-field'>{label && <label>{label}</label>}
        <input className="date-input" type="date" value={input} onChange={(e) => setInput(e.target.value)} placeholder={placeholder} /></div>

}