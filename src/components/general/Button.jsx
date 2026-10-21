   import './general.css'
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   import Button from '../../components/general/Button'

   const Button = ({ label, className, onClick, icon, type = 'button' }) => {
     return (
       <button type={type} className={`button ${className || ''}`} onClick={onClick}>
         {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
         {label}
       </button>
     )
   }

   export default Button