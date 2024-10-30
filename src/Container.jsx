
import { useEffect, useState } from 'react';
import Modal from './Modal';
import Tableau from './Tableau';
import ButtonAjout from './ButtonAjout';
import InputSearch from './InputSearch';

function Container() {
    const [taches, setTaches] = useState([]);
    const [newTache, setNewTache] = useState("");
    const [newdesc, setNewDesc] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
    const [filter, setfilter] = useState('');

    // Test d'input d'entrer
    const [messageErr, setMessageErr] = useState("")

    // déclaration des variable pour le pagination
    const [currentPage, setCurrentPage] = useState(1);
    const reccordsPerPage = 5;
    const lastIndex = currentPage * reccordsPerPage;
    const firstIndex = lastIndex - reccordsPerPage;
    const records = taches.slice(firstIndex, lastIndex);
    const npage = Math.ceil(taches.length / reccordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    // fonction  pour gerer les modal
    const ouvrirModal = () => setModalOpen(true);
    const fermerModal = () => setModalOpen(false);

    // Fonction d'Ajout d'un tache
    const handleAddTache = () => {
        let newTacheItem = {
            titre: newTache,
            description: newdesc
        }
            
        if(newTacheItem.titre.trim() === "" && newTacheItem.description.trim() === ""){
            // alert("Cest pas bon");
            setMessageErr("Veuillez remplir les champs !") }else{
            let updateTachesTab = [...taches];
            updateTachesTab.push(newTacheItem);
    
            setTaches(updateTachesTab);
            localStorage.setItem('taches', JSON.stringify(updateTachesTab));
    
            setNewTache("");
            setNewDesc("");
        }
    }

    // Fonction filter
    const searchTache = (e) => {
        let valeur = e.target.value;
        setfilter(valeur);

        // Si le champ est vide, réinitialise le tableau de tâches
        if (!valeur) {
            const reccupTaches = JSON.parse(localStorage.getItem("taches"));
            setTaches(reccupTaches);
            return;
        }

        const filtered = taches.filter((tache) => {
            return tache.titre.toLowerCase().includes(valeur.toLowerCase());
        });

        setTaches(filtered);
    };

    // Mise ajour des state a chaque modification
    const updateTache = (updatedTaches) => {
        localStorage.setItem('taches', JSON.stringify(updatedTaches));
        setTaches(updatedTaches);
    };

    // Reccuperer le localStorage
    useEffect(() => {
        const reccupTaches = JSON.parse(localStorage.getItem("taches"));

        if (reccupTaches) {
            setTaches(reccupTaches)
        }
    }, []);

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col w-min sm:w-full items-center mt-10 justify-center'>
                <h1 className=' text-3xl font-bold font-montserrat'>TodoListe</h1>
                <div className=' container w-full'>
                    <div className="mt-2 mx-0 m[d:mx-10 lg:mx-44">
                        <div className='flex justify-between mt-10'>
                            <InputSearch SearchTache={searchTache} valeur={filter} />
                            <ButtonAjout onClick={ouvrirModal} name="Ajouter" />
                            {/* Modal */}
                            {isModalOpen && (
                                <Modal clickClose={fermerModal} newTache={newTache} setNewTache={setNewTache}
                                    newdesc={newdesc} setNewDesc={setNewDesc} handleAddTache={handleAddTache} 
                                    messaageErr={messageErr}
                                    />
                            )}

                            {/* Fin Modal */}
                        </div>
                        <div className='flex mt-10'>
                            {/* Tableau */}
                            <Tableau taches={taches} firstIndex={firstIndex} searchTache={searchTache} reccordsPerPage={reccordsPerPage} onUpdate={updateTache} 

                            />
                            {/* Fin Tableau */}
                        </div>
                        <div className='pt-10'>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                               <ul className='flex justify-center items-center  rounded-md py-2'>
                                <li>
                                    <a href='#' className='text-lg text-white bg-[#5499c7] me-3 p-2 rounded'
                                       onClick={prePage}
                                     >Prev</a>
                                </li>
                                 {
                                    numbers.map((n,i) =>(
                                        <li className={`p-2 text-xl ${currentPage === n ? 'active':''}`} key={i}>    
                                            <a href='#' className='page-item font-bold'
                                            onClick={() => changeCPage(n)}
                                            >{n}</a>
                                        </li>
                                    ))
                                 }
                                 <li>
                                    <a href='#' className='text-lg text-white bg-[#5499c7] ms-3 p-2 rounded'
                                       onClick={nextPage}
                                     >next</a>
                                </li>
                               </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function prePage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    }
    
    function changeCPage(id){
        setCurrentPage(id);
    }
    
    function nextPage(){
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
      
    }
    
    
}


export default Container
