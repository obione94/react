import * as React from 'react';
import { Todo } from './Todo';

export interface TodoFormProps {
    value:Todo;
    handleChange:any;
}

class TodoListForm extends React.Component<TodoFormProps> {
    constructor(props: any) {
        super(props);
    }

    handleChangeInput(e:any) {
        this.props.handleChange(e)
    }

    render() { 
        const values = this.props.value;

        return (  
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputTitle">Title</label>
                    <input name="title" onChange={this.handleChangeInput.bind(this)} value={values.title} className="form-control" id="exampleInputTitle" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>

                <div className="form-group form-check">
                    <input name="completed" onChange={this.handleChangeInput.bind(this)}  type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        );
    }

}

export default TodoListForm;