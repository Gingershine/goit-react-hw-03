// import { useState } from 'react'
import './App.css'
import { useEffect, useState } from "react"

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import {nanoid} from 'nanoid'

const contactList = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    if (!stringifiedContacts) return contactList;
    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  })

  useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

  const [filter, setFilter] = useState('');

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  const handleFilter = evt => setFilter(evt.target.value)
  
  const onAddContact = (newContact) => {
    const finalContact = {
    ...newContact, id: nanoid(),
    }
    setContacts((prevState) => [...prevState, finalContact])
}

  const onDeleteContact = (contactId) => {
    setContacts((prevContatcs) => {
  return prevContatcs.filter((contact) => contact.id !== contactId)
})
  }

  return (
    
      <div className='wraper'>
  <h1>Phonebook</h1>
      <ContactForm onAddContact={ onAddContact } />
      <SearchBox filter={filter}
        onFilter={ handleFilter } />
      <ContactList contacts={visibleContacts}
  onDeleteContact={onDeleteContact}    />
</div>
    
  )
}

export default App
