import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.css';

const Filter = ({ changeFilter }) => {
  const inputFilterId = uuidv4();

  return (
    <form className={s.form}>
      <label className={s.label} htmlFor={inputFilterId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        id={inputFilterId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={changeFilter}
      />
    </form>
  );
};

export default Filter;

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
