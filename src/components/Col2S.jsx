// Col2.jsx
import React, { useRef } from 'react';
import image from '../assets/editt.png';

function Col2({ props }) {
  const { user, handleImageChange } = props;
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='flex flex-col relative'>
      <img src={`http://127.0.0.1:8000${user.photo}`} alt={user.FullName} className="lg:h-48 lg:w-48 md:h-32 md:w-32 h-24 w-24 rounded-full" />
      <input
        type="file"
        accept="image/*"
        name="photo"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={(e) => handleImageChange(e)}
      />
      <img
        src={image}
        alt="Edit Photo"
        className="lg:h-8 lg:w-8 h-5 w-5  rounded-full hover:scale-110 cursor-pointer absolute lg:top-36 lg:left-3 md:top-24 top-16"
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default Col2;