import React, { Component } from 'react';
import propTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    // const {name, value} = evt.target;
    // this.setState({[name]: value})
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    this.props.handleSubmit(this.state);
    form.reset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.formLabel}>Name</label>
        <input
          className={css.formName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label className={css.formLabel}>Number</label>
        <input
          className={css.formNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};

export default ContactForm;
