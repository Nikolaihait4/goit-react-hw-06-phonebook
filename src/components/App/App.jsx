import React from 'react';
import { useSelector } from 'react-redux'; // Импортируем useSelector
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import css from './App.module.css';

export function App() {
  const contacts = useSelector(state => state.contacts.contactList); // Заменяем useState и useEffect
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(
    contact =>
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className={css.appsection}>
      <h1 className={css.apptitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.appcontactstitle}>Contacts</h2>
      <ContactFilter />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}
