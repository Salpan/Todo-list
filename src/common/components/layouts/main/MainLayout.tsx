import { TodoList } from '_components/todo-list/TodoList';
import { FC } from 'react';
import './styles.css';

export const MainLayout: FC = () => {
    return (
        <div className="wrapper">
            <header className="header">Todo List</header>
            <main className="main">
                <TodoList />
            </main>
            <footer className="footer">Salpan Inc.</footer>
        </div>
    );
};
