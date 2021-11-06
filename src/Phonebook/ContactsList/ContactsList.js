import s from './ContactsList.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.listItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.deleteButton}
            type="button"
            id={contact.id}
            onClick={handleDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
