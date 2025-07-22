import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { Text } from 'components';

import style from './TodoListItem.module.css';

export const TodoListItem = ({ id, text, count, removeTodo, editTodo }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => removeTodo(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={() =>
          editTodo({
            id,
            text,
          })
        }
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
