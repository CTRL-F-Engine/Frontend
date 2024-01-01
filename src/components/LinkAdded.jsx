/* eslint-disable react/prop-types */


function LinkAdded({ link }) {
  return (
    <div className="bg-page-col rounded-md py-2 px-3 text-item-col hover:underline">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </div>
  );
}

export default LinkAdded;