import Places from './Places.jsx';
import { useState, useEffect } from 'react';
import ErrorPage from './Error.jsx'
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false); // data state
  const [availablePlaces, setAvailablePlaces] = useState([]); // loading state
  const [error, setError] = useState(); // error state

  /* fetch('http://localhost:3000/places').then((response) => {
    return response.json()
  }).then((resData) => {
    setAvailablePlaces(resData.places);
  }); */  // THIS CREATES LOOP due to the fetch executing everytime the component function re renders when onSelectPlace changes.

  useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces() {
      try {
        /* const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch places');
        } */ //Using fetchAvailablePlaces() instead.

        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError(error);
        setIsFetching(false);
      }
    }

    fetchPlaces();

    /* fetch('http://localhost:3000/places').then((response) => {
      return response.json()
    }).then((resData) => {
      setAvailablePlaces(resData.places);
    }); */ // this or async method. 
  }, []);

  if (error) {
    return <ErrorPage title="An error occured!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
