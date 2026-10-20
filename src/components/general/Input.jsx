import './general.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
  const handleInput = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className={`input-container ${className || ''}`}>
      <label className="input-label">
        {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
        {label}
        <input
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </label>
    </div>
  )
}

export default Input