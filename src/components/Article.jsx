/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import myImage from '../assets/bookmark.svg';
import Bookmark2 from '../assets/Bookmark2.png';
import { KeyWord } from './KeyWord';
import { ReadMore } from './ReadMore';

export const Article = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(props.isFavorPage);

  const handleSave = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="sm:px-10 px-4">
      <h1 className="inline mr-3 text-[32px] sm:text-3xl md:text-4xl text-gray-900 font-bold">
        {props.title}
      </h1>
      <span className="text-gray-500 sm:text-[12px] text-[3vw] font-medium">{props.date}</span>
      <p className="font-normal text-justify lg:text-[1.5vw] text-[3.85vw] sm:text-[3vw] md:text-[2vw] text-black text-opacity-70 mt-5">
        {props.content}
      </p>
      <div className="xs:flex grid gap-y-4 mt-10 items-center justify-between">
        <div className="flex sm:gap-x-4 gap-x-2">
          <KeyWord content="Data Science" />
          <KeyWord content="Machine Learning" />
          <KeyWord content="NLP" />
        </div>
        <div className="flex justify-end gap-x-3">
        <button onClick={handleSave}>
          <img
            className="sm:w-8 w-5"
            src={isBookmarked ? Bookmark2 : myImage}
            alt="Bookmark"
          />
        </button>
          <ReadMore />
        </div>
      </div>
    </div>
  );
};
