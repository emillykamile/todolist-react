import { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './global.module.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([  ])

  function addTask (taskContent: string) {
    setTasks([
      ...tasks, {
        id: crypto.randomUUID(),
        content: taskContent,
        isCompleted: false,
      }
    ])
  }

  function deleteTasksById (taskToDelete: string) {
    const newTasksWithOutDeletedTask = tasks.filter((task) => {
      return task.id !== taskToDelete;
    })

    setTasks(newTasksWithOutDeletedTask)
  }

  function toggleTaskCompletedById (taskId: string) {
    const newTask = tasks.map((task) => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })

    setTasks(newTask)
  }

  return (
    <>
      <header>
        <Header onAddTask={addTask}/>
      </header>
      
      <main>
        <TodoList 
          tasks={tasks} 
          checkTask={toggleTaskCompletedById}
          onDelete={deleteTasksById}
        />
      </main>

      <ToastContainer
        autoClose={2000}
        theme="dark"
        pauseOnHover={false}
      />
    </>
  )
}