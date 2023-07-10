import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
        // <li key={id}>
        //   {contact.name}: {contact.number}
        //   <button
        //     type="submit"
        //     className={css.contactListItemBtn}
        //     onClick={() => handleDelete(contact.id)}
        //   >
        //     Delete
        //   </button>
        // </li>
        <ContactListItem 
        key={contact.id} 
        name={contact.name} 
        number={contact.number} 
        // onClick={() => handleDelete(contact.id)}
        />
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  // handleDelete: propTypes.func.isRequired,
};

export default ContactList;
