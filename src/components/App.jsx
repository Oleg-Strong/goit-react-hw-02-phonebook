import React, { Component } from 'react';
import phonebook from './phonebook';
import shortid from 'shortid';
import css from './App.module.css';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: phonebook,
    filter: '',
  };

  checkscContactBeforeAdding = contact => {
    const { name, number } = contact;
    const { contacts } = this.state;
    const normalazetName = name.toLowerCase().split(' ').join('');
    const normalazetNumber = number.split('-').join('');
    const existingName = contacts.some(
      ({ name }) => name.toLowerCase().split(' ').join('') === normalazetName
    );
    const existingNumber = contacts.some(
      ({ number }) => number.split('-').join('') === normalazetNumber
    );
    if (existingName || existingNumber) {
      alert(`${existingNumber ? number : name} is already in contacts!!!`);
      return;
    }
    this.addContact(contact);
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  changeFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={css.appConteiner}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.checkscContactBeforeAdding}></ContactForm>
        </Section>
        <Section title="Contacts">
          <Filter name={filter} onFilterChange={this.changeFilter}></Filter>
          <ContactList
            phonebook={this.getFilteredContacts()}
            onDeleteContact={this.deleteContact}
          ></ContactList>
        </Section>
      </div>
    );
  }
}
export default App;
