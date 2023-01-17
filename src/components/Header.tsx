import logo from '../assets/Logo.svg';
import style from './Header.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
  onAddTask: (taskContent: string) => void;
}

export function Header ({ onAddTask }:Props) {
  const [content, setContent] = useState("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(content)
    setContent("")
  }

  function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
      event.target.setCustomValidity('')
      setContent(event.target.value)
  }  

  function handleNewTaskInvalid (event: InvalidEvent<HTMLInputElement>) {
      event.target.setCustomValidity(' ')
      toast.error(`Este campo precisa ser preenchido`)
    }

  return (

    <>
      <div className={style.header}>
        <img src={logo} alt="Logo da TodoList" />
      </div>

      
      <form className={style.input__container} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Adicionar uma tarefa" 
          className={style.input__area} 
          onChange={onChangeContent}
          value={content}
          required
          onInvalid={handleNewTaskInvalid}
        />

        <button className={style.input__button}>Criar<PlusCircle size={16}/></button>
      </form>
    </>
  )
}