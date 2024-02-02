/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Appcontext2 } from '../App';
import pdp from '../assets/pdp.png';
import { Navbar3 } from '../components/Navbar3';
import img from '../assets/footer.svg';

export const ChangePw = () => {
  const { isConnected } = useContext(Appcontext2);
  const [ref, setRef] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  

  const handleSaveChanges = () => {
    if (newPassword.trim() !== '' && newPassword === confirmPassword) {
      // Save changes
      setuser((prevUser) => ({
        ...prevUser,
        Password: newPassword, // Update the Password property
      }));
      setIsChangesSaved(true);
      setPasswordError('');
    } else {
      setIsChangesSaved(false);
      setPasswordError('Passwords do not match');
    }
  };
  const [user, setuser] = useState({
    title: 'Abla RABIA',
    username: 'Abla_08',
    link: '',
    img: pdp,
    description: 'Administrator',
    Email: 'la_rabii@esi.dz',
    Password: '456',
  });
  const [isChangesSaved, setIsChangesSaved] = useState(false);

  const handleOffset = (data) => {
    setRef(data);
    console.log('Ref immediately after setRef:', ref);
    console.log('Data:', data);
  };

  useEffect(() => {}, [isConnected]);

  useEffect(() => {
    // Effect to handle scrolling
    const handleScroll = () => {
      const offset = window.scrollY;
      if (ref) {
        setIsSticky(offset > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  

  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar3 func={handleOffset} connected={true} sticky={true} />

      <h1 className='px-4 sm:px-10 mt-28 font-semibold text-2xl text-blue-950 mb-8 '>
        Settings
      </h1>
      <div className='px-4 sm:px-10'>
        <hr className='border-2 mb-14 border-blue-950'></hr>
      </div>
      <div className='px-4 sm:px-10'>
        <h1 className='text-settings-col sm:text-4xl text-3xl mb-6'>
        Change your password
        </h1>
        <input
        className='bg-search-col mb-5 outline-none text-item-col h-12 sm:h-16 w-[100%] rounded-[4px] pl-3 mt-2'
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Write your new password"
        type="password"
      />
      <input
        className='bg-search-col mb-5 outline-none text-item-col h-12 sm:h-16 w-[100%] rounded-[4px] pl-3 mt-2'
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
        type="password"
      />
      
      <button
        onClick={handleSaveChanges}
        className='justify-center items-center w-full h-12 sm:h-16 bg-search-col text-item-col rounded-[4px] hover:bg-item-col hover:text-sidebar'
      >
          Save
        </button>
        {isChangesSaved && (
          <p className='text-person-col mt-2 text-sm font-light'>Your changes have been saved!</p>
        )}
         {!isChangesSaved && newPassword.trim() === '' && (
          <p className='text-red-500 mt-2 text-sm font-light'>Password cannot be empty</p>
        )}
        {passwordError && <p className="text-red-500 mt-2 text-sm font-light">{passwordError}</p>}
      </div>

      <footer className='h-[70px] w-full absolute bottom-0'>
        <img src={img} alt='footer' />
      </footer>
    </div>
  );
};

