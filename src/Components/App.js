import React, { Component } from 'react';

import uuid from 'react-uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css';

const filterContacts = (filter, contacts) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = contact => {
    const stateNames = this.state.contacts.map(({ name }) => name);

    if (stateNames.includes(contact.name)) {
      alert(`${contact.name} is already in contact list`);
      return;
    }

    const contactToAdd = {
      ...contact,
      id: uuid(),
    };

    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd],
    }));
  };

  removeContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const persitedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (persitedContacts) {
      this.setState({ contacts: persitedContacts });
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(filter, contacts);

    return (
      <>
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />

        <h3 className={styles.title}>Contacts</h3>
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}

        {contacts.length > 0 && (
          <ContactList
            items={filteredContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </>
    );
  }
}
