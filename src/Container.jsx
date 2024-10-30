
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

        let updateTachesTab = [...taches];
        updateTachesTab.push(newTacheItem);

        setTaches(updateTachesTab);
        localStorage.setItem('taches', JSON.stringify(updateTachesTab));

        setNewTache("");
        setNewDesc("");
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

    // Reccuperer le localStorage
    useEffect(() => {
        const reccupTaches = JSON.parse(localStorage.getItem("taches"));

        if (reccupTaches) {
            setTaches(reccupTaches)
        }
    }, []);

    const updateTache = (updatedTaches) => {
        setTaches(updatedTaches);
        localStorage.setItem('taches', JSON.stringify(updatedTaches));
    };

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col w-min sm:w-full items-center mt-10 justify-center'>
                <h1 className=' text-3xl font-bold font-montserrat'>TodoListe</h1>
                <div className=' container w-full'>
                    <div className="mt-2 mx-0 md:mx-10 lg:mx-44">
                        <div className='flex justify-between mt-10'>
                            <InputSearch SearchTache={searchTache} valeur={filter} />
                            <ButtonAjout onClick={ouvrirModal} name="Ajouter" />
                            {/* Modal */}
                            {isModalOpen && (
                                <Modal clickClose={fermerModal} newTache={newTache} setNewTache={setNewTache}
                                    newdesc={newdesc} setNewDesc={setNewDesc} handleAddTache={handleAddTache} />
                            )}

                            {/* Fin Modal */}
                        </div>
                        <div className='flex mt-10'>
                            {/* Tableau */}
                            <Tableau taches={taches} onUpdate={updateTache} />
                            {/* Fin Tableau */}
                        </div>
                        <div className='pt-10'>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                               
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
