import { Trash } from "phosphor-react"
import styles from "./Indivual.module.css"

interface ItemProps {
    text: string
}

export function ToDoItemIndivual({ text }: ItemProps) {

    return (
        <article >
            <div >
                <div >
                    <input type="checkbox" name="checkboxTask" id="checkboxTask" />
                    <label htmlFor="checkboxTask">{text}</label>
                </div>

                <Trash size={24} />
            </div>
        </article>
    )

    }