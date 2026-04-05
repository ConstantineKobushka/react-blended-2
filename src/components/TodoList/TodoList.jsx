import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, deletTodo, editTodo }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            id={id}
            text={text}
            count={index + 1}
            deletTodo={deletTodo}
            editTodo={editTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
