import React from 'react';

const TicketForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the movieName and movieDetails values from the form data
    props.Close();
  };

  return (
    <div>
      <h2>Book Movie Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Name:
          <input type="text" value={props.movieName} readOnly />
        </label>
        {/* Add more input fields for relevant details */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
