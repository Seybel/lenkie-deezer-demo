import React, { useEffect, useState } from "react";
// import { http } from "../services/apiConfig";
import { makeApiRequest } from "../services/apiRequests";
import Card from "../components/UI/Card";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const artistID = 27;

    makeApiRequest(`artist/${artistID}`)
      .then((data) => {
        console.log(data);
        setArtists(data);
      })
      .catch((error) =>
        console.error("Error fetching artist information:", error)
      );
  }, []);

  const allArtists = artists.map((artist) => (
    <Card
      key={artist.id}
      imgSrc={artist.picture}
      artistName={artist.name}
      fansAmount={artist.nb_fan}
    />
  ));

  return <>{allArtists}</>;
};

export default ArtistList;
