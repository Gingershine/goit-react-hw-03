import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul className={css.list}>
              {contacts.map((contact) =>  (
                  <li className={css.item} key={contact.id}>
                  <Contact name={contact.name}
                    number={contact.number}
                    onDeleteContact={onDeleteContact}
                    id={contact.id} />
                  </li>
              ))}
          </ul>
      
    </div>
  )
}

export default ContactList