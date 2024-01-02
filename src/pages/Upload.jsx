// Content component (content.js)
import React, { Fragment, useState } from "react";
import LinkAdded from "../components/LinkAdded";
import Popup from "../components/popupU";
import Sidebar from '../components/Sidebar';
function Content() {
  const [newLink, setNewLink] = useState("");
  const [LinksUploaded, setLinksUploaded] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    setNewLink(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      addLink();
    }
  };

  const addLink = () => {
    if (!newLink) return;
    const link = {
      id: LinksUploaded.length === 0 ? 1 : LinksUploaded.length + 1,
      link: newLink,
    };
    setLinksUploaded([...LinksUploaded, link]);
    setNewLink("");
    setShowPopup(true);
  };

  const [showpopup, setShowpopup]=useState(false);

  return (
    <div className='flex flex-row w-screen bg-page-col '>
      <Sidebar />
    <div className={`flex flex-auto flex-col ml-[3%] mt-[3%] mr-[3%]  relative `}>
      <h1 className="text-person-col text-[300%]">Upload Articles</h1>
      <div className="bg-sidebar mt-10 h-52 rounded-md shadow p-9 pt-12">
        <h2 className="text-[130%] text-person-col mb-4">Paste here your articles URL</h2>
        <div className="AddArticle w-[100%]">
          <input
            className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3 outline-none"
            placeholder="Articles URL"
            onChange={handleChange}
            onKeyUp={handleEnterKey}
          />
        </div>
      </div>
      <button
        className="absolute right-0 bottom-12 sm:w-[110px] w-fit box-border xs:h-[38px] h-[30px] text-[13px] sm:text-[15px] font-medium sm:font-bold  text-sidebar  bg-person-col font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]"
        onClick={addLink} 
      >
        Upload
      </button>
      
      <Popup visible={showPopup} onClose={() => setShowPopup(false)} />
    </div>
    </div>
  );
}

export default Content;

/**
 * {LinksUploaded.length > 0 && (
        <div className="List">
          {LinksUploaded.map((Link) => (
            <LinkAdded key={Link.id} link={Link.link} />
          ))}
        </div>
      )}
 */
