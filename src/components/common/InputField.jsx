export default function InputField({ label, input, setInput, placeholder }) {

    return <div className='modal-field'>{label && <label>{label}</label>}
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={placeholder} /></div>
}