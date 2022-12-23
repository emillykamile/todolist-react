import styles from './global.module.css';
import logo from './assets/logo.svg';
import { Input } from './Components/Input/Input';
export function App() {


  return (

        <main className={styles.container}>
          <nav className={styles.navMenu}>
              <img src={logo} className={styles.logo}/>
          </nav>
          <div>
            <section>
              {/* Input para adicionar novas tarefas */}
              <div>
                <Input />
              </div>
            </section>
            <div>
              {/* // Renderizar as novas tarefas. */}
            </div>
          </div>
        </main>
     
  )
}

