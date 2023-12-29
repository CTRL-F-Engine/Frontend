/* eslint-disable no-unused-vars */
// Content component (content.js)
import React, { Fragment, useState } from "react";
import LinkAdded from "./LinkAdded";
import Popup from "./popup";

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
    <div className={`flex flex-auto flex-col ml-[3%] mt-[3%] mr-[3%] `}>
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
        className="absolute right-[3%] bottom-[10%] text-sidebar pl-9 text-[20px] flex items-center bg-person-col h-12 w-36"
        onClick={addLink} 
      >
        Upload
      </button>
      
      <Popup visible={showPopup} onClose={() => setShowPopup(false)} />
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