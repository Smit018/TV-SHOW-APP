import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TicketForm from './TicketForm';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formshow,setFormShow]=useState(false);
  

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error('Error fetching show:', error);
      });
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const handleBookTicket = () => {

    // Handle logic for opening the ticket booking form
    // You can show/hide the TicketForm component based on a state variable
    // Pass the necessary movie details to the TicketForm component
    setFormShow(true);
  };

  const handleClose=()=>{
    setFormShow(false);
  }

  return (
    <div>
      <h2>Show Summary</h2>
      <h3>{show.name}</h3>
      <p>{show.summary}</p>
      <button className='bg-red-300 mt-12'  onClick={handleBookTicket}>Book Ticket</button>
      {/* Render the TicketForm component conditionally based on state */}
      {/* Pass the movie details to the TicketForm component */}

      {formshow? (<TicketForm movieName={show.name} movieLanguage={show.language} movieSchedule={show.language} Close={handleClose}/>):null}
    </div>
  );
};

export default ShowDetail;
