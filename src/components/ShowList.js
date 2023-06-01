import React from 'react';
import { useNavigate} from 'react-router-dom';

const ShowList = ({ shows }) => {
  const navigate = useNavigate();

  const handleShowClick = (showId) => {
    navigate(`/show/${showId}`);
  };

  return (
    <div className=''>
      <h1 className='text-bold'>List of Shows</h1>
      {shows.map((show) => (
        <div className='bg-blue-200 mt-3 mb-3'  key={show.show.id}>
          <h3>SHOW NAME: {show.show.name}</h3>
          <p>Language: {show.show.language}</p>
          <button className='bg-red-500 text-black' onClick={() => handleShowClick(show.show.id)}>SHOW SUMMARY</button>
        </div>
      ))}
    </div>
  );
};

export default ShowList;

