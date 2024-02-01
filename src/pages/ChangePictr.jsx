import React, { useEffect, useState, useContext, useRef } from 'react';
import { Appcontext2 } from '../App';
import pdp from '../assets/pdp.png';
import { Navbar3 } from '../components/Navbar3';
import img from '../assets/footer.svg';
import upload from '../assets/upload.png';
import AuthContext from '../context/AuthContext'

export const ChangePictr = () => {
  const { isConnected } = useContext(AuthContext);
  const [ref, setRef] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
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

  const [saveMessage, setSaveMessage] = useState('');

  const handleSaveChanges = () => {
    if (user.img !== pdp) {
      // Perform actual saving logic here (e.g., send to server)
      // ...

      setSaveMessage('Your changes have been saved!');
    } else {
      setSaveMessage('No changes made');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setuser((prevUser) => ({
          ...prevUser,
          img: reader.result,
        }));
      };
      reader.readAsDataURL(file);
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
      <div className='px-4 sm:px-10 items-center justify-center w-full  flex-col sm:items-start sm:hidden flex '>
        <h1 className='text-settings-col sm:text-4xl text-3xl mb-6'>
          Change Profile Picture
        </h1>
        <img src={user.img} alt={user.title} className='h-36 w-36 rounded-full mb-8' />
        <div
          className='bg-page-col px-4 cursor-pointer mb-8 flex flex-row rounded-[4px]  focus:cyan-500 font-medium w-full items-center h-12 sm:h-16'
          onClick={handleButtonClick}
        >
          <span className='text-settings-col text-lg sm:text-xl opacity-50'>Upload your picture </span>
          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <img className='absolute end-8 sm:end-14 opacity-50' src={upload} alt='Upload' />
        </div> 
        </div>


        <div className='px-4 sm:px-10 items-center space-x-10 justify-star w-full  flex-row  hidden sm:flex '>
          <div className='flex flex-col w-full'>
        <h1 className='text-settings-col sm:text-4xl text-3xl mb-6'>
          Change Profile Picture
        </h1>
       
        <div
          className='bg-page-col px-4 cursor-pointer mb-8 flex flex-row rounded-[4px]  focus:cyan-500 font-medium w-full items-center h-12 sm:h-16 '
          onClick={handleButtonClick}
        >
          <span className='text-settings-col text-lg sm:text-xl'>Upload your picture </span>
          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <img className='absolute sm:end-64' src={upload} alt='Upload' />
        </div>
        </div>
         <img src={user.img} alt={user.title} className='h-36 w-36 rounded-full mb-8' /> 
        </div>

        <div className='px-4 sm:px-10 '>
        <button
      className='justify-center   items-center  w-full h-12 sm:h-16 bg-search-col text-item-col rounded-[4px] hover:bg-item-col hover:text-sidebar'
      onClick={handleSaveChanges}
    >
      Save
    </button>

    {saveMessage && (
  <div
    className={`${
      saveMessage === 'Your changes have been saved!'
        ? 'text-person-col'
        : 'text-red-500'
    } mt-1 text-sm font-light`}
  >
    {saveMessage}
  </div>
)}
     
    </div>  

      <footer className='h-[70px] w-full absolute bottom-0'>
        <img src={img} alt='footer' />
      </footer>
    </div>
  );
};
