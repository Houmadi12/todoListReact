import { IoMdClose } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { useEffect, useState } from "react";

function ButtonVoir({index}) {
    const [taches, setTaches] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false)

    // fonction  pour gerer les modal
    const ouvrirModal = () => setModalOpen(true);
    const fermerModal = () => setModalOpen(false);

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
                    <FaRegEye />
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
                            <h2 className="text-lg text-center bg-[#5499c7] text-[#ffffff] ms:w-2/4 lg:w-full font-bold rounded p-2 mt-3 shadow"> Details Tache</h2>
                            <div className="">
                                <table className="table-auto  w-full shadow-xl bg-white mt-7 rounded px-3 ">
                                    <thead className="bg-[#093545] text-white rounded-lg">
                                        <tr>
                                            <th className=" p-3 ">Tache</th>
                                            <th className="">description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                            taches.map((tache, indice) => {
                                                if (index === indice) {
                                                    return (
                                                        <>
                                                            <tr className="bg-[#ededee]">
                                                                <td className="px-3 md:text-sm text-gray-700 font-montserrat font-medium">{tache.titre}</td>
                                                                <td className="p-3 md:text-sm text-gray-700 font-montserrat font-medium"> {tache.description} </td>
                                                            </tr>
                                                        </>
                                                    )
                                                }
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ButtonVoir;