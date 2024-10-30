import { IoMdClose } from "react-icons/io";
import { BiSolidEdit } from "react-icons/bi";
import { useEffect, useState } from "react";

function ButtonModifier({ index, onUpdate }) {

    const [taches, setTaches] = useState([]);
    const [editTache, setEditTache] = useState("");
    const [editDesc, setEditDesc] = useState("");
    const [isModalOpen, setModalOpen] = useState(false)
    const [messageErr, setMessageErr] = useState("")

    // fonction  pour gerer les modal
    const ouvrirModal = () => {
        setModalOpen(true);

        // Initialiser les valeurs d'édition avec les valeurs actuelles
        const currentTache = taches[index];
        if (currentTache) {
            setEditTache(currentTache.titre);
            setEditDesc(currentTache.description);
        }
    }


    const fermerModal = () => {
        setModalOpen(false);
        setMessageErr("");
    } 

    // Fonction de modification
    const handleAddTache = (e) => {
        e.preventDefault(); // Empêcher le rechargement de la page
        
        // Créer une copie du tableau
        if(editDesc.trim() === "" || editTache.trim() === ""){
            setMessageErr("Veuillez remplir tous les champs !")
        } else {
            const newTaches = taches.map((tache, indice) => {
                if (index === indice) {
                    // Retourner un nouvel objet avec les valeurs modifiées
                    return {
                        ...tache,
                            titre: editTache,
                            description: editDesc
        
                    };
                }
                return tache;
            });
    
            // Mettre à jour le state et le localStorage
            setTaches(newTaches);
            onUpdate(newTaches);
            fermerModal(); // Fermer le modal après modification
        }
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
                    onClick={ouvrirModal}
                >
                    <BiSolidEdit />
                </span>
            </div>
            {isModalOpen && (
                <div className="fixed z-10 inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50">
                    <div className="bg-white  rounded-lg p-6 mx-4 max-w-lg w-full overflow-auto">
                        <div className="text-end">
                            <button
                                onClick={fermerModal}
                                className="py-2 px-4 bg-slate-200 rounded-lg hover:bg-slate-400"
                            >
                                <IoMdClose />
                            </button>
                        </div>
                        <div className="pb-10">
                            <h2 className="text-lg text-center bg-[#5499c7] text-[#ffffff] ms:w-2/4 lg:w-full font-bold rounded p-2 mt-3 shadow"> Modifie Tache</h2>
                            <div className="">
                                <div className="p-4 md:p-5 space-y-4">
                                    <form className="flex-col sm:flex-col space-y-6 md:px-11">
                                        <div className="flex flex-col gap-7">
                                            <div className="">
                                                <label htmlFor="tache" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Tache</label>
                                                <div className="mt-2">
                                                    <input id="tache" type="text" value={editTache} onChange={(e) => setEditTache(e.target.value)}
                                                        required className="block w-full rounded-md border-0 px-3  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm  md:text-lg sm:leading-6" />
                                                </div>
                                            </div>
                                            <div className="">
                                                <label htmlFor="description" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Description</label>
                                                <div className="mt-2">
                                                    <input id="description" type="text" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} required 
                                                    className="block w-full rounded-md px-3  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600   sm:text-sm md:text-lg  sm:leading-6" />
                                                </div>
                                            </div>
                                            <div className="text-red-500">
                                                {messageErr}
                                            </div>
                                        </div>
                                        <div className="flex justify-center bg-blue-600 bg-opacity-10 w-full py-5 border-t-2 ">
                                            <button type="submit" onClick={handleAddTache} className="justify-center rounded-md bg-[#1d6392] px-10 py-3 text-lg font-semibold font-lexendDeca leading-6 shadow-sm hover:bg-[#1d6392] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d6392] text-white">Modifier</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ButtonModifier;
