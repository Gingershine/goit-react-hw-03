import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import css from './Contact.module.css'

const Contact = ({name, number, id,  onDeleteContact}) => {
  return (
      <div className={css.wrap}>
          <div className={css.wraper}>
                <div className={css.line}>
                  {<BsFillPersonFill/>}{name}
                </div>
        
                <div className={css.line}>
                  {<FaPhone/>} {number}
                </div>
          </div>
                <button className={css.btn} onClick={() => onDeleteContact(id)}>Delete</button>
      </div>
  )
}

export default Contact