import stylesInput from './styles.module.css';


export function Input() {


    return ( 
       <div className={stylesInput.ContainerInput}>
             <input 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                className={stylesInput.Input} 
            />
            <button className={stylesInput.Button}>
                Criar
            </button>
       </div> 

        
    )

}