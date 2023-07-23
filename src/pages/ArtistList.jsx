import React, { useEffect, useState } from "react";
import http from "../services/apiConfig";
import Card from "../components/UI/Card";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Fetch artists
    http
      .get("/artist/27")
      .then((response) => {
        console.log(response);
        setArtists(response);
      })
      .catch((error) => {
        console.error("Error fetching artists:", error);
      });
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
