import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { Filter } from './Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  SubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handlFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilterdContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDeleteContact = contactid => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactid),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const readyContacts = JSON.parse(contacts);
    if (readyContacts) {
      this.setState({ contacts: readyContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const filterdContacts = this.getFilterdContact();

    return (
      <>
        <Form
          title="Phonebook"
          contacts={contacts}
          onSubmit={this.SubmitHandler}
        />
        <Filter value={filter} onChange={this.handlFilterChange} />
        <Contacts
          title="Contacts"
          contacts={filterdContacts}
          deleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}
