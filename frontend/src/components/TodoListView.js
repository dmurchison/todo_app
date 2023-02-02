import TodoItem from "./Todo";



function TodoView(props) {

  return (
    <>
      <ul className="divide-y divide-gray-200">
        {props.todoList.map((todo, index) => (
          <TodoItem todo={todo} key={index} />
        ))}
      </ul>
    </>
  );

}


export default TodoView;

