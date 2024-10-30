import ButtonVoir from "./ButtonVoir";
import ButtonModifier from "./ButtonModifier";
import ButtonSupprimmer from "./ButtonSupprimer";

function Tableau({ taches, onUpdate }) {
    

    return (
        <table className="w-full">
            <thead className=" bg-[#5499c7]">
                <tr className="border-b-2 text-white">
                    <th className=" text-10 md:text-xl text-center px-6 md:px-8  py-2">Taches</th>
                    <th className=" text-10 md:text-xl text-center px-6 md:px-8  py-2">Description</th>
                    <th className=" text-10 md:text-xl text-center px-6 md:px-8  py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                   [...taches].reverse().map((tache, index) => {
                    {/* calculer l'index inversé pour l'afficher */}
                    const displayIndex = taches.length - 1 - index;
                    const currentTache = taches[displayIndex];

                        return (
                            <>
                                <tr className="border-b-2" key={displayIndex}>
                                    <th className=" text-5  text-center py-2">{currentTache.titre}</th>
                                    <td className=" text-5  text-center py-2">{currentTache.description}</td>
                                    <td className="flex justify-center items-center text-xl gap-3 p-7 md:p-2">
                                        <button className="text-blue-700 cursor-pointer"><ButtonVoir index={displayIndex} /></button>
                                        <button className="text-green-600 cursor-pointer"><ButtonModifier index={displayIndex} onUpdate={onUpdate} /></button>
                                        <button className="text-red-500 cursor-pointer"> <ButtonSupprimmer index={displayIndex} onUpdate={onUpdate} /> </button>
                                    </td>
                                </tr>
                            </>
                        )
                    }
                
                    )}
            </tbody>
        </table>
    )
}

export default Tableau


