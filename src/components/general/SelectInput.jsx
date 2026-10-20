import './general.css'

const SelectInput = ({ label, options, className, value, setValue }) => {
  const handleSelect = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className={`select-container ${className || ''}`}>
      <label className="select-label">
        {label}
        <select value={value} onChange={handleSelect}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default SelectInput