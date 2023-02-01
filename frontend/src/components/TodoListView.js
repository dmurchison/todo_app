import TodoItem from "./Todo";



function TodoView(props) {
  return (
    <div>
      <ul>
        {props.todoList.map((todo, index) => (
          <TodoItem todo={todo} key={index} />
        ))}
      </ul>
    </div>
  );
}


export default TodoView;

