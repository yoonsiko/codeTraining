import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const fetchedEvents = data.events
  return <EventsList events={fetchedEvents} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
  } else {
    // const resData = await response.json();
    // const res = new Response(resData.events, {status: })
    return response; // useLoaderData will automatically extract the data part of response object
  }
}
