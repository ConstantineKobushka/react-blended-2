import { FiSearch } from 'react-icons/fi';

import styles from './Form.module.css';

const Form = ({ onSubmit }) => {
  const onFofmSubmit = event => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.search.value.trim();
    onSubmit(inputValue);
    event.currentTarget.reset();
  };

  return (
    <form className={styles.form} onSubmit={onFofmSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={styles.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
