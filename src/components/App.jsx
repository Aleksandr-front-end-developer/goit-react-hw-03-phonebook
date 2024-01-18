import { nanoid } from 'nanoid';
import { Component } from 'react';

import Contactsform from './Contactsform/Contactsform';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import './style.scss';

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

  handleSubmit = data => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { ...data, id: nanoid() }],
      };
    });
  };
  handleFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };
  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    return (
      <div className="phonebook">
        <h1>Phonebook</h1>
        <Contactsform
          contacts={this.state.contacts}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactsList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}
