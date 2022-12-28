import { useState } from "react";
import styles from "./styles.module.css";
import { ToDoItemIndivual } from "./ToDoItemIndividual";

interface Task {
    id: number;
    task: string;
}

export function ToDoItem() {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            task:  "Fazer Dever",
        },
        {
            id: 2,
            task: "Malhar",
        }
    ])

    return (
        <div>
            <header className={styles.Contagem}>
                <span>
                    Tarefas criadas
                </span>

                <span>Concluídas</span>
            </header>

            <main>
                {tasks.map((task) => (
                    <ToDoItemIndivual key={task.id} text={task.task} />
                ))}
                
            </main>
        </div>
    )
}