import React, { useEffect, useState, useContext } from 'react';
import { Appcontext2 } from '../App';
import pdp from '../assets/pdp.png';
import { Navbar3 } from '../components/Navbar3';
import img from '../assets/footer.svg';
import AuthContext from '../context/AuthContext'

export const ChangeName = () => {
  const { isConnected } = useContext(AuthContext);
  const [ref, setRef] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [user, setuser] = useState({
    title: 'Abla RABIA',
    username: 'Abla_08',
    link: '',
    img: pdp,
    description: 'Administrator',
    Email: 'la_rabii@esi.dz',
    Password: '456',
  });
  const [fullName, setFullName] = useState(user.title);
  const [isChangesSaved, setIsChangesSaved] = useState(false);
  const [inputError, setInputError] = useState('');

  const handleOffset = (data) => {
    setRef(data);
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

  const handleSaveChanges = () => {
    if (fullName !== user.title && fullName.trim() !== '') {
      // Save changes
      setuser((prevUser) => ({
        ...prevUser,
        title: fullName,
      }));
      setIsChangesSaved(true);
      setInputError('');
    } else if (fullName.trim() === '') {
      setIsChangesSaved(false);
      setInputError('Full Name cannot be empty');
    } else {
      setIsChangesSaved(false);
      setInputError('No changes made');
    }
  };

  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar3 func={handleOffset} connected={true} sticky={true} />

      <h1 className='px-4 sm:px-10 mt-28 font-semibold text-2xl text-blue-950 mb-8'>
        Settings
      </h1>
      <div className='px-4 sm:px-10'>
        <hr className='border-2 mb-14 border-blue-950'></hr>
      </div>
      <div className='px-4 sm:px-10'>
        <h1 className='text-settings-col sm:text-4xl text-3xl mb-6'>
          Change your name
        </h1>
        <span className='text-person-col text-lg sm:text-xl'>Full Name</span>
        <input
          className='bg-search-col mb-5 outline-none text-item-col h-12 sm:h-16 w-[100%] rounded-[4px] pl-3 mt-2'
          onChange={(e) => setFullName(e.target.value)}
          placeholder={user.title}
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
        {!isChangesSaved && inputError && (
          <p className='text-red-500 mt-2 text-sm font-light'>{inputError}</p>
        )}
      </div>

      <footer className='h-[70px] w-full absolute bottom-0'>
        <img src={img} alt='footer' />
      </footer>
    </div>
  );
};
