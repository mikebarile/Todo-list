import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    return (
      <ul>
        { this.props.todos.map( todo => (
          <TodoListItem key={todo.id} todo={todo}/>
        )) }
      </ul>
    );
  }
}

export default TodoList;
