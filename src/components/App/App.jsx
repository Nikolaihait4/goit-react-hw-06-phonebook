import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import css from './App.module.css';
import { deleteContact } from '../../redux/contactSlice'; // Импортируйте функцию deleteContact

export function App() {
  const contacts = useSelector(state => state.contacts.contactList);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch(); // Используйте useDispatch для доступа к функции deleteContact

  const handleDeleteContact = id => {
    dispatch(deleteContact(id)); // Вызовите deleteContact с помощью dispatch
  };

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
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />{' '}
      {/* Передайте onDeleteContact в ContactList */}
    </div>
  );
}
