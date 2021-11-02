import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Rocket() {
  const { id } = useParams();
  console.log(id);
  const basURL = `https://api.spacexdata.com/v4/rockets/${id}`;
  const [rocket, setRocket] = useState();
  useEffect(() => {
    axios.get(basURL).then((res) => setRocket(res.data));
  }, [basURL]);

  return (
    <div className="bg-black text-white h-screen p-20">
      <p className="font bold text-xl">RocketName: </p>
      <p>{rocket?.name}</p>
      <p className="font bold text-xl mt-10">RocketDescription:</p>
      <p>{rocket?.description}</p>
    </div>
  );
}

export default Rocket;
