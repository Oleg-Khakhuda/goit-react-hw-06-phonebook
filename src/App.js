import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactsList from './Phonebook/ContactsList/ContactsList';
import Filter from './Phonebook/Filter/Filter';
import { useState, useEffect } from 'react';

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const localContacts = localStorage.getItem('contacts');

  //   if (localContacts) {
  //     return JSON.parse(localContacts);
  //   } else {
  //     return [];
  //   }
  // });

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
