
function Modal({clickClose,newTache,setNewTache,newdesc,setNewDesc,handleAddTache}) {
    return (
        // Modal Wrapper
        <>
            <div id="default-modal" className="bg-[#000] bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full">
                <div className="relative flex justify-center p-4 max-w-full max-h-full">
                    {/* Modal content  */}
                    <div className="relative bg-white rounded-lg w-10/12 md:w-6/12 shadow dark:bg-gray-700 mt-10">
                        {/* Modal header  */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className=" text-md md:text-xl font-semibold text-gray-900 dark:text-white">
                                Ajouter une tâches
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={clickClose}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        {/* Modal body  */}
                        <div className="p-4 md:p-5 space-y-4">
                            <form className="flex-col sm:flex-col space-y-6 md:px-11">
                                <div className="flex flex-col gap-7">
                                    <div className="">
                                        <label htmlFor="tache" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Tâches</label>
                                        <div className="mt-2">
                                            <input id="tache" type="text" value={newTache} onChange={(e) => setNewTache(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label htmlFor="description" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Description</label>
                                        <div className="mt-2">
                                            <input id="description" type="text" value={newdesc} onChange={(e) => setNewDesc(e.target.value)} required className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Modal footer  */}
                        <div className="flex justify-center w-full py-5 border-t-2 ">
                            <button type="submit" onClick={handleAddTache} className="flex w-2/4 md:w-1/4 justify-center rounded-md bg-[#1d6392] px-3 py-1.5 text-[15px] md:text-lg font-semibold font-lexendDeca leading-6 shadow-sm hover:bg-[#1d6392] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d6392] text-white">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
