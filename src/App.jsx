import { useState } from 'react';
import Modal from './modal';

const click = () => {
  document.getElementById("modal-wrapper").classList.remove("hidden");
  // alert("Bonjour");
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center mt-10 text-5xl'>Todolist</h1>
      <div className='container flex justify-center mt-10'>
        <div className="flex justify-between w-3/4">
          <div className='flex justify-center items-center border w-13 rounded-md '>
            <input type="text" class="block w-13 focus:outline-none focus:ring-0 focus:border-transparent border-0 py-1.5 pl-7 pr-20 text-gray-900" placeholder="Rechercher...." />
            <svg className="fill-[#75797e] stroke-0 h-7 w-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
              <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
            </svg>
          </div>
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={click}>Ajouter</button>
          {/* modal */}
          <div id="modal-wrapper" className="fixed z-10 hidden inset-0 ms-0 sm:ms-40 md:ms-40 overflow-y-auto ">
            <div className="flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-75 transition-all">
              <div className="flex flex-col items-center justify-between bg-white p-10 rounded w-2/3">
                <div className="flex min-h-full w-full flex-col justify-center pt-10">
                  <div className="flex flex-col">
                    <h1 className='text-lg font-bold text-center pb-10 '>Ajouter une Tache </h1>
                    <form className="flex-col sm:flex-col space-y-6 md:px-11" action="#" method="POST">
                      <div className="flex flex-col gap-2 md:gap-5 lg:gap-20">
                        <div className="">
                          <label htmlFor="nom" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Tâche</label>
                          <div className="mt-2">
                            <input id="nom" name="nom" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                        <div className="">
                          <label htmlFor="prenom" className="block text-xs md:text-md lg:text-lg font-medium font-lexendDeca leading-6 text-[#000000]">Description</label>
                          <div className="mt-2">
                            <input id="prenom" name="prenom" type="text" autoComplete="email" required className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center w-full ">
                        <button type="submit" className="flex w-2/4 justify-center rounded-md bg-[#20DF7F] px-3 py-1.5 text-lg font-semibold font-lexendDeca leading-6 text-[#224957] shadow-sm hover:bg-[#20DF7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20DF7F]">Ajouter</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal */}
        </div>
      </div>
      <div className="flex justify-center py-10">
        <table className="border-collapse border border-slate-500 w-75">
          <thead>
            <tr>
              <th className="border border-slate-600 px-10 py-2">Taches</th>
              <th className="border border-slate-600 px-10 py-2">Description</th>
              <th className="border border-slate-600 px-10 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-slate-600 px-10 py-2">Coder</th>
              <td className="border border-slate-700 px-10 py-2">Choisir une techno</td>
              <td className="border border-slate-700 px-10 py-2">Indianapolis</td>
            </tr>
            <tr>
              <th className="border border-slate-600 px-10 py-2">Deployer</th>
              <td className="border border-slate-700 px-10 py-2">Utiliser github pour le faire</td>
              <td className="border border-slate-700 px-10 py-2">Columbus</td>
            </tr>
            <tr>
              <th className="border border-slate-600 px-10 py-2">Tester</th>
              <td className="border border-slate-700 px-10 py-2">Utiliser les test unitaire</td>
              <td className="border border-slate-700 px-10 py-2">Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
