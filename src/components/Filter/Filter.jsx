import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ name, onFilterChange }) => (
  <form className={css.filterForm}>
    <label className={css.filterFormLabel}>
      <span className={css.filterFormLabelText}>Find contacts by name</span>

      <input
        className={css.filterFormInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        value={name}
        onChange={onFilterChange}
      />
    </label>
  </form>
);

export default Filter;

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
