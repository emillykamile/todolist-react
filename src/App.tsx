import styles from './global.module.css';
import logo from './assets/logo.svg';
import { Input } from './Components/Input/Input';
import { ToDoItem } from './Components/TodoItem/ToDoItem';

export function App() {


  return (

        <main className={styles.container}>
          <nav className={styles.navMenu}>
              <img src={logo} className={styles.logo}/>
          </nav>
          <div className={styles.containerToDo}>
            <section>
              {/*  Adicionar novas tarefas */}
              <div>
                <Input />
              </div>
            </section>
            <div>
              {/* // Renderizar as novas tarefas adicionadas no Input. */}
              <ToDoItem />

              
            </div>
          </div>
        </main>
     
  )
}

