import {React, useState, useEffect } from 'react';
import axios from 'axios';
import ShowList from '../components/ShowList';
import '../App.css'

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
      });
  }, []);

  return (
    <div>
      <h1 className=''>TV Shows</h1>
      <div className='bg-slate-100 mt-3 mb-3'>
      <ShowList shows={shows} />
      </div>
      
    </div>
  );
};

export default Home;

