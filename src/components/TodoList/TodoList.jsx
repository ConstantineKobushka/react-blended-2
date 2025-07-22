import { Grid, TodoListItem, GridItem } from 'components';

export const TodoList = ({ todos, removeTodo, editTodo }) => {
  return (
    <Grid>
      {todos.map((item, index) => {
        return (
          <GridItem key={item.id}>
            <TodoListItem
              id={item.id}
              text={item.text}
              count={index + 1}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};
