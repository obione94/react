import * as React from 'react';
import { Todo } from './Todo';

export interface TodoProps {
    todo:Todo;
    onDelete:any;

}

class TodoLisItem extends React.Component<TodoProps>{
    
    constructor(props: any) {
        super(props);
    }

    handleDelete(e:any) {
        this.props.onDelete(e);
    }

    render() { 
        const todo = this.props.todo;
        return (  
            <tr>
                <td scope="row">{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.dueDate}</td>
                <td>{todo.completed?'true':"false"}</td>
                <td>{todo.user_id}</td>
                <td><button type="submit" onClick={this.handleDelete.bind(this,todo)} >Delete</button></td>

            </tr>
        );
    }
}

export default TodoLisItem;

 