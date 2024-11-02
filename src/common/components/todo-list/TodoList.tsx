import { TodoListField } from '_types/todoList';
import { FC } from 'react';
import './styles.css';

export const TodoList: FC = () => {
    const tasks: TodoListField = [
        {
            id: 1,
            title: 'Hello world',
            isComleted: false,
        },
    ];

    return (
        <div className="container">
            <h1>Tasks</h1>
            <div className="input">
                <input />
                <button>Add</button>
            </div>

            <ul>
                {tasks.map((task) => {
                    return <li key={task.id}>{task.title}</li>;
                })}
            </ul>
        </div>
    );
};
