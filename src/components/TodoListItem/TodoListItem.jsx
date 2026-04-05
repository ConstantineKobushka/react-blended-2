import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import Text from '../Text/Text';

import styles from './TodoListItem.module.css';

const TodoListItem = ({ id, text, count, deletTodo, editTodo }) => {
  return (
    <div className={styles.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => deletTodo(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={styles.editButton}
        type="button"
        onClick={() => editTodo({ id, text })}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
