import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactsList from './Phonebook/ContactsList/ContactsList';
import Filter from './Phonebook/Filter/Filter';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localContacts = localStorage.getItem('contacts');

    if (localContacts) {
      return JSON.parse(localContacts);
    } else {
      return [];
    }
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts!`);
    } else setContacts(prev => [...prev, contact]);
  };

  const changeFilter = e => {
    const filterValue = e.target.value;
    setFilter(filterValue);
  };

  const handleFilter = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const handleDelete = e => {
    setContacts(contacts.filter(contact => contact.id !== e.target.id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <h1>Contacts</h1>
      <Filter changeFilter={changeFilter} />
      <ContactsList contacts={handleFilter()} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
