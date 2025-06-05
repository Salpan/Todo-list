import { FC, useCallback, useState } from 'react';
import './styles.css';
import { Task } from '_types/todoList';

export const TodoList: FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const [taskName, setTaskName] = useState('');

    const addTaskButton = () => {
        if (taskName.trim() !== '') {
            setTasks([
                ...tasks,
                { id: Date.now(), title: taskName, isComleted: false },
            ]);
        }
    };

    const testButton = (id: number) => () => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, isComleted: !task.isComleted }
                    : task,
            ),
        );
    };

    const call = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, isComleted: !task.isComleted }
                    : task,
            ),
        );
    };

    const deleteButton = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <h1>Tasks</h1>
            <div className="input">
                <input
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button type="button" onClick={addTaskButton}>
                    Add task
                </button>
            </div>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li
                            className={
                                task.isComleted === true
                                    ? 'isComleted'
                                    : 'isNotComleted'
                            }
                            key={task.id}
                        >
                            {task.title}
                            <button type="button" onClick={testButton(task.id)}>
                                Comleted
                            </button>
                            <button
                                type="button"
                                onClick={() => deleteButton(task.id)}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
            <></>
        </div>
    );
};
