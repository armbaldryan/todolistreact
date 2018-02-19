import React from 'react';
import Header from './components/Header';
import PropTypes from 'prop-types';
import Todo from './components/Todo';
import Form from './components/Form';

type IAppProps = {
    initialData: Array<
        {
            id : number,
            title: string,
            completed: boolean
        }
    >
}
type IAppState = {
    todos: Array<
        {
            id : number,
            title: string,
            completed: boolean
        }
    >
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps){
        super(props);
        this.state = {
            todos: this.props.initialData
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    nextId(){
        this._nextId = this.state.todos[this.state.todos.length - 1].id + 1;
        return this._nextId;
    }
    handleStatusChange = (id: number): void => {
        let todos = this.state.todos.map(todo =>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos});
    }

    handleEdit(id: number, title: string): void {
        let todos = this.state.todos.map(todo => {
            if(todo.id === id){ todo.title = title;}
            return todo;
        })
        this.setState({
            todos
        })
    }

    handleDelete(id){
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos: todos})
    }
    
    handleAdd = (title: string): void => {
        let todo = {
            id: this.nextId(),
            title,
            completed: false
        };
        let todos = [...this.state.todos,todo];
        this.setState({todos});
    }
    render(){
        return(
            <main>
                <Header title = {this.props.title} todos = {this.state.todos} />
                <section className="todo-list">
                    {this.state.todos.map(item =>       
                        <Todo 
                            key = {item.id}
                            title = {item.title} 
                            completed = {item.completed} 
                            id = {item.id} 
                            onStatusChange = {this.handleStatusChange}
                            onDelete = {this.handleDelete}
                            onEdit = {this.handleEdit}
                        />
                    )}
                </section>
                <Form onAdd = {this.handleAdd}/>
            </main>
        );
    }
 
}

App.propTypes = {
    title: PropTypes.string,
    onStatusChange: PropTypes.func
}
export default App;