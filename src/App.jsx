import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto  mt-10'>
        <div class="flex justify-between mx-40 w-75">
          <div className='flex justify-center items-center border w-13 rounded-md '>
            <input type="text" class="block w-13 focus:outline-none focus:ring-0 focus:border-transparent border-0 py-1.5 pl-7 pr-20 text-gray-900" placeholder="Rechercher...."/>
            <svg class="fill-[#75797e] stroke-0 h-7 w-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
                <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
            </svg>
          </div>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ajouter</button>
        </div>
      </div>
      <div class="flex justify-center py-10">
        <table class="border-collapse border border-slate-500 w-75">
          <thead>
            <tr>
              <th class="border border-slate-600 px-10 py-2">Taches</th>
              <th class="border border-slate-600 px-10 py-2">Description</th>
              <th class="border border-slate-600 px-10 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="border border-slate-600 px-10 py-2">Coder</th>
              <td class="border border-slate-700 px-10 py-2">Choisir une techno</td>
              <td class="border border-slate-700 px-10 py-2">Indianapolis</td>
            </tr>
            <tr>
              <th class="border border-slate-600 px-10 py-2">Deployer</th>
              <td class="border border-slate-700 px-10 py-2">Utiliser github pour le faire</td>
              <td class="border border-slate-700 px-10 py-2">Columbus</td>
            </tr>
            <tr>
              <th class="border border-slate-600 px-10 py-2">Tester</th>
              <td class="border border-slate-700 px-10 py-2">Utiliser les test unitaire</td>
              <td class="border border-slate-700 px-10 py-2">Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
