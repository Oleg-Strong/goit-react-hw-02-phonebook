import css from './Filter.module.css';
import React, { Component } from 'react';

class Filter extends Component {
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    // const { contacts } = this.state;

    return (
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
            value={this.props.name}
            onChange={this.props.onFilterChange}
          />
        </label>
      </form>
    );
  }
}
export default Filter;
