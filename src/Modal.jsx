
function Modal() {
    return (
        // Modal Wrapper
        <div id="modal-wrapper" className="fixed z-10 hidden inset-0 ms-0 sm:ms-40 md:ms-40 overflow-y-auto ">
            <div className="flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-75 transition-all">
                <div className="flex flex-col items-center justify-between bg-white p-10 rounded w-2/3">
                    <div className="flex min-h-full w-full flex-col justify-center pt-10">
                        <div className="flex flex-col">
                            <form className="flex-col sm:flex-col space-y-6 md:px-11" action="#" method="POST">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5 lg:gap-20">
                                    <div className="sm:w-4/4 md:w-2/4">
                                        <label htmlFor="nom" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Nom</label>
                                        <div className="mt-2">
                                            <input id="nom" name="nom" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:w-4/4 md:w-2/4">
                                        <label htmlFor="prenom" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Prénom</label>
                                        <div className="mt-2">
                                            <input id="prenom" name="prenom" type="text" autoComplete="email" required className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5 lg:gap-20">
                                    <div className="sm:w-4/4 md:w-2/4">
                                        <label htmlFor="datNaiss" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Date de naissance</label>
                                        <div className="mt-2">
                                            <input id="datNaiss" name="datNaiss" type="date" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:w-4/4 md:w-2/4">
                                        <label htmlFor="Profession" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Profession</label>
                                        <div className="mt-2">
                                            <input id="Profession" name="Profession" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5 lg:gap-20">
                                    <div className="sm:w-4/4 md:w-2/4">
                                        <label htmlFor="email" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Email</label>
                                        <div className="mt-2">
                                            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:w-4/4 md:w-2/4">
                                        <label htmlFor="telephone" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Téléphone</label>
                                        <div className="mt-2">
                                            <input id="telephone" name="telephone" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5 lg:gap-20">
                                    <div className="sm:w-4/4 md:w-2/4">
                                        <label htmlFor="adresse" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Adresse</label>
                                        <div className="mt-2">
                                            <input id="adresse" name="adresse" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div className="sm:w-4/4 md:w-2/4">
                                        <label htmlFor="organisation" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Organistion</label>
                                        <div className="mt-2">
                                            <input id="organisation" name="organisation" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-full ">
                                    <button type="submit" className="flex w-2/4 justify-center rounded-md bg-[#20DF7F] px-3 py-1.5 text-lg font-semibold font-lexendDeca leading-6 text-[#224957] shadow-sm hover:bg-[#20DF7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20DF7F]    ">Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
