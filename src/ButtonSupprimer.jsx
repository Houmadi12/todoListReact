import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";

function ButtonSupprimmer({index,onUpdate}) {
    const [taches, setTaches] = useState([]);

        // Fonction de Suppression
        const handleDeleteTache = (e) => {
            e.preventDefault(); 

            // Suppression de tableau
            const updateTodos = taches.filter((_, indice) => indice !== index);
            
            // Mettre à jour le state et le localStorage
            setTaches(updateTodos);
            onUpdate(updateTodos);
        }
    

    useEffect(() => {
        const todoListe = JSON.parse(localStorage.getItem("taches"));

        if (todoListe) {
            setTaches(todoListe);
        }
    }, [])

    return (
        <div className="">
            <div className="">
                <span className="focus:outline-none "
                    onClick={handleDeleteTache}
                >
                    <MdDelete />
                </span>
            </div>
        </div>
    )
}

export default ButtonSupprimmer;