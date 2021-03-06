import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    return (
      <div>
      <ul>
        { this.props.todos.map( todo => (
          <TodoListItem key={todo.id} todo={todo}/>
        )) }
      </ul>
      < TodoForm createTodo={this.props.createTodo} />
    </div>
    );
  }
}

export default TodoList;
