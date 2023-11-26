import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { useAuthContext } from "../hooks/useAuthContext"

import Navbar from '../components/Navbar';
import ModifierProfile from './ModifierProfile';

const Profile = () => {
  const {auth} = useAuthContext()

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = (user) => {
    setIsModalOpen(true);
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('user'))?.email || '';
    console.log(email)

    if (!email) {
      setError(new Error("No email found in localStorage"));
      setIsLoading(false);
      return;
    }
    fetch(`/api/user/email/${email}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to retrieve user profile data");
        }
      })
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="flex  ml-[-50px]">
    <div class="sidebar mt-[80px] h-[600px] flex flex-col items-center w-50 overflow-hidden text-gray-400  rounded">
		
		<div class="w-full h-full px-2">
			<div class="flex flex-col items-center w-full mt-3 border-t border-gray-700">
			<a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-700 hover:text-gray-300" href="acceuil">

					<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
					<span class="ml-2 text-sm font-medium">Dasboard</span>
				</a>
				<a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-700 hover:text-gray-300" href="#">
					<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
					<span class="ml-2 text-sm font-medium">Ajouter produit</span>
				</a>
				<a class="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-700 hover:text-gray-300" href="#">
					<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<span class="ml-2 text-sm font-medium">Gestion Produits</span>
				</a>
				<a class="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-700 hover:text-gray-300" href="#">
					<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
					</svg>
					<span class="ml-2 text-sm font-medium">Gestion utilisateurs</span>
				</a>
			</div>
			<div class="flex flex-col items-center w-full mt-2 border-t border-gray-700">
				<a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-700 hover:text-gray-300" href="liste">
					<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					<span class="ml-2 text-sm font-medium">Produits</span>
				</a>
				<a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-700 text-gray-200 hover:text-gray-300 bg-green-700" href="add">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span class="ml-2 text-sm font-medium">Profile</span>
					<span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
				</a>
			</div>
		</div>
		
	</div>
  
      <div className='mt-[100px] self-center ml-96 w-[500px]'>
      <h1 className=" ml-6  font-semibold text-[2rem]	dark:text-tunisys-100 text-green-700 text-center mt-3">Paramétres de profile </h1>
      <div className=" p-8 h-full w-full  bg-gray-100 rounded-lg border">
        <div className="mb-4">
          <label className="block  text-gray-700 text-lg font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow   text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            readOnly
            name="email"
            value={user?.email || ''}
           
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700  text-lg  font-bold mb-2" htmlFor="password">
            Mot de passe
          </label>
          <div className='flex'>
          <input
                className="shadow text-lg appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={type}
                name="password"
                placeholder="Password"
                value={user?.password || ''}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <span class="flex justify-around items-center" onClick={handleToggle}>
                <Icon class="absolute mr-10" icon={icon} size={25} />
              </span>
          </div>
          
        </div>
        <div className="mb-4">
          <label className="block text-gray-700  text-lg font-bold mb-2" htmlFor="firstname">
            Prénom
          </label>
          <input
            className="shadow appearance-none border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="firstname"
            readOnly
            name="firstname"
            value={user?.firstname || ''}
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700  text-lg font-bold mb-2" htmlFor="lastname">
            Nom
          </label>
          <input
            className="shadow appearance-none border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            readOnly
            name="lastname"
            value={user?.lastname || ''}
            
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Role
          </label>
          <div className="relative">
            <div class="mb-4 flex">
              <input
                className="shadow text-lg appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
                name="role"
                placeholder="Role"
                value="Seulement admin peut modifier les roles"
              />
             
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
         <button onClick={() => handleOpenModal(user)}
            className="bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  >
            modifier
  </button>
        </div>
        {isModalOpen && (
        <div className='modal'>
          <div className='modal-content border-x-violet-800	'>
            <span className='close' onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            {isModalOpen && <ModifierProfile handleClose={handleCloseModal} user={user} />
            }
          </div>
        </div>
          )}
      </div>
    
    </div>
    </div>

   
    </>
  )
}

export default Profile