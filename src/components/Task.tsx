import style from './Task.module.css';
import { Trash } from 'phosphor-react';
import { ITask } from '../App';
import {BsFillCheckCircleFill } from 'react-icons/bs'
import { toast } from 'react-toastify';

interface Props {
  task: ITask;
  checkTask: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}


export function Task({ task, checkTask, onDelete }: Props) {
  return (
    <div className={style.task__container}>

      <div className={style.container}>
        <button className={style.task__checkButton} onClick={() => checkTask(task.id)}>
         {task.isCompleted ? <BsFillCheckCircleFill /> : <div/>}
        </button>
        <p className={task.isCompleted ? style.task__textCompleted : ""}>
          {task.content}    
        </p>
      </div>

      <button className={style.task__button} onClick={() => onDelete(task.id)}>
        <Trash size={14} />
      </button>
    </div>
  )
}