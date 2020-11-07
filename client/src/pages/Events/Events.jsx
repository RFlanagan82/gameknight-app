import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const getEvents = function () {
    return axios.get("/api/events");
  };

  function loadEvents() {
    getEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      {events.map((eventaroo) => (
        <Container>
          <Row>
            <h1>Event Name: {eventaroo.eventName}</h1>
          </Row>
          <Row>
            <h2>Event Date: {eventaroo.date}</h2>
          </Row>
          <Row>
            <h3>Game: {eventaroo.gameName}</h3>
          </Row>
          <Row>
            <h4>Category: {eventaroo.gameCategory}</h4>
          </Row>
          <Row>
            <h5>Event Description: {eventaroo.description}</h5>
          </Row>
          <Row>
            <h6>Max number of players: {eventaroo.maxAttendees}</h6>
          </Row>
          <Row>
          <a href={eventaroo.eventLink}>{eventaroo.eventLink}</a>
          </Row>
          
        </Container>
      ))}
    </>
  );
}

export default Events;