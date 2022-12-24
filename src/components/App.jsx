import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setcontacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parcedContacts = JSON.parse(savedContacts);
      return parcedContacts;
    }
    return [];
  });

  const [filter, setfilter] = useState('');

  const SubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setcontacts([contact, ...contacts]);
  };

  const handlFilterChange = event => {
    setfilter(event.target.value);
  };

  const getFilterdContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = contactid => {
    setcontacts(contacts.filter(contact => contact.id !== contactid));
  };

  useEffect(() => {
    const initialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

    localStorage.setItem('contacts', JSON.stringify(contacts));
    if (contacts.length === 0) {
      localStorage.setItem('contacts', JSON.stringify(initialContacts));
    }
  }, [contacts]);

  const filterdContacts = getFilterdContact();

  return (
    <>
      <Form title="Phonebook" contacts={contacts} onSubmit={SubmitHandler} />
      <Filter value={filter} onChange={handlFilterChange} />
      <Contacts
        title="Contacts"
        contacts={filterdContacts}
        deleteContact={handleDeleteContact}
      />
    </>
  );
};
