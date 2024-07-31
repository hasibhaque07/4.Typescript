export type TodoType = {
  id: string;
  title: string;
};
export type TodosProps = {
  todos: TodoType[];
  handleDeleteTodo: Function;
};
export type TodoProps = {
  todo: TodoType;
  handleDeleteTodo: Function;
};
export type AddTodoProps = {
  handleAddTodo: Function;
};
