import { FC, useState } from 'react';
import './styles.css';
import { Tasks } from '_types/todoList';

export const TodoList: FC = () => {
    const [tasks, setTasks] = useState<Tasks[]>([]);

    const [taskName, setTaskName] = useState('');

    const handleClick = () => {
        setTasks([
            ...tasks,
            { id: Date.now(), title: taskName, isComleted: false },
        ]);
    };

    return (
        <div className="container">
            <h1>Tasks</h1>
            <div className="input">
                <input
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button type="button" onClick={handleClick}>
                    Add
                </button>
            </div>

            <ul>
                {tasks.map((task) => {
                    return <li key={task.id}>{task.title}</li>;
                })}
            </ul>
        </div>
    );
};
