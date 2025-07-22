import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';

export const EditForm = ({ updateTodo, cancelUpdate, defaultValue }) => {
  const handelUpdateTodo = event => {
    event.preventDefault();

    updateTodo({
      ...defaultValue,
      text: event.currentTarget.elements.text.value,
    });
  };
  return (
    <form className={style.form} onSubmit={handelUpdateTodo}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue.text}
        autoFocus
      />
    </form>
  );
};
