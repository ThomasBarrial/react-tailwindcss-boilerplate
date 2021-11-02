import axios from 'axios';
import React, { useEffect } from 'react';
import '../styles/styles.css';

import { Link } from 'react-router-dom';

function Homepage() {
  const baseURL = 'https://api.spacexdata.com/v4/launches';
  const [launches, setLaunches] = React.useState();
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setLaunches([...res.data].reverse());
    });
  }, []);
  return (
    <div className="w-screen h-full bg-black text-white p-20">
      {launches?.map((item) => {
        return (
          <div className="my-10 flex items-end justify-between border-b border-white pb-2" key={item.id}>
            <div>
              <p className="font-bold text-lg">LaunchName: {item.name}</p>
              <p>FlightNumber: {item.flight_number}</p>
              <p>LaunchDate: {new Date(item.date_local).toLocaleDateString()}</p>
            </div>
            <Link to={`/rockets/${item.rocket}`}>
              <button className="border boder-white px-2 py-2 mb-2">Check Rocket</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage;
