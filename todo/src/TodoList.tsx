import * as React from 'react';
import { Todo } from './Todo';
import TodoLisItem from './TodoLisItem';

export interface TodoListProps {
    todos:Todo[];
    onDelete:any;
}
 
 
class TodoList extends React.Component<TodoListProps> {
    
    constructor(props: any) {
        super(props);
    }

    render() { 
        return (  
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">dueDate</th>
                        <th scope="col">comleted</th>
                        <th scope="col">user_id</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.todos.map(
                        (todo:Todo) => <TodoLisItem  key={todo.id} todo={todo} onDelete={this.props.onDelete}/>
                    )}

                </tbody>
            </table>
        );
    }
}

export default TodoList;
 