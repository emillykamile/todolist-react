import { useState } from 'react';
import stylesInput from './styles.module.css';

interface ITask {
  id: number,
  nameTask: string,


}


export function Input() {

  const [task, setTask] = useState<string>("")

  const [todoList, setTodoList] = useState<ITask[]>([])

  function addTask() {

    const idRandom = (num: number) => Math.floor(Math.random() * num)

    const newTask = { id: idRandom(9999999), nameTask: task }

    setTodoList([...todoList, newTask])
  
}
    
    return (

       <div className={stylesInput.ContainerInput}>
             <input 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                className={stylesInput.Input} 
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />
             <button 
                type="submit" 
                onClick={addTask} 
                className={stylesInput.Button}>
                  Criar
            </button>


       </div> 
        
    )


}