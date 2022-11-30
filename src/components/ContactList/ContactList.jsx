import css from './ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ phonebook, onDeleteContact }) => (
  <ul className={phonebook.length === 0 ? css.hidden : css.contactList}>
    {phonebook.map(({ id, name, number }) => (
      <li className={css.contactItem} key={id}>
        <p className={css.contactName}>{name}</p>
        <p className={css.contacNumber}>{number}</p>
        <button
          className={css.contactBtn}
          type="buttom"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
ContactList.propTypes = {
  phonebook: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
