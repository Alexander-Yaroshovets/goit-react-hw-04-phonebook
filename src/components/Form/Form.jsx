import React from 'react';

import {
  ContactForm,
  FormInput,
  FormLabel,
  FormTitle,
  FormButton,
} from './Form.styled';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    const { contacts } = this.props;

    contacts.find(contact => {

      if (contact.name.toLowerCase() === value.toLowerCase()) {
        console.log(alert(`${value} is olredy in contact`));
      }

      return this.setState({ [name]: value });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { number, name } = this.state;

    return (
      <>
        <FormTitle>{this.props.title}</FormTitle>

        <ContactForm onSubmit={this.handleSubmit}>

          <FormLabel>
            Name
            <FormInput
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </FormLabel>

          <FormLabel>
            Number
            <FormInput
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          </FormLabel>

          <FormButton type="submit">add contact</FormButton>

        </ContactForm>
      </>
    );
    
  }
}


