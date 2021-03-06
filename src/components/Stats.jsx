import React from 'react';

function State(props){
    let total = props.todos.length;
    let completed = props.todos.filter(todo => todo.completed).length;
    let notcompleted = total - completed;
    return(
        <table className = "stats">
        <tbody>
            <tr>
                <th>Всего задач</th>
                <td>{total}</td>
            </tr>
            <tr>
                <th>Выполнено</th>
                <td>{completed}</td>
            </tr>
            <tr>
                <th>Осталось</th>
                <td>{notcompleted}</td>
            </tr>
        </tbody>
        </table>
    );
}
export default State;