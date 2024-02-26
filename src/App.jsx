import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsState =
  localStorage.getItem('contacts') !== null
    ? JSON.parse(localStorage.getItem('contacts'))
    : defaultContacts;

function App() {
  const [contacts, setContacts] = useState(contactsState);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContacts => {
    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...newContacts },
    ]);
  };

  const handleDeleteContact = e => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== e.target.id)
    );
  };

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox
        filter={filter}
        onChange={setFilter}
        title={'Find contacts by name'}
      />
      <ContactList contacts={filtredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
