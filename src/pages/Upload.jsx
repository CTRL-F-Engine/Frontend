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
    <div className='flex flex-row w-screen h-[100vh] bg-page-col '>
      <Sidebar />
    <div className={`flex flex-auto flex-col ml-[3%] mt-8 mr-[3%]  `}>
      <h1 className="text-person-col text-5xl">Upload Articles</h1>
      <div className="bg-sidebar mt-10 h-52 rounded-md shadow p-9 pt-12">
        <h3 className=" text-[25px] text-person-col mb-4">Paste here your articles URL</h3>
        <div className="AddArticle w-[100%]">
          <input
            className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3 outline-none"
            placeholder="Articles URL"
            onChange={handleChange}
            onKeyUp={handleEnterKey}
          />
        </div>
      </div>
      <div className="flex flex-auto flex-col place-items-end" >
      
      <button
        className="mt-[20%] sm:w-[110px] w-fit box-border xs:h-[38px] h-[30px] text-[13px] sm:text-[15px] font-medium sm:font-bold  text-sidebar  bg-person-col font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]"
        onClick={addLink} 
      >
        Upload
      </button>
      </div>
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
