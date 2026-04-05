import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import styles from './EditForm.module.css';

const EditForm = ({ updateTodo, cancelUpdate, defaultValue }) => {
  const onFormSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const todoValue = form.elements.text.value.trim();

    updateTodo(defaultValue.id, todoValue);
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <button className={styles.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={styles.editButton}
        type="button"
        onClick={cancelUpdate}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={styles.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue.text}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
