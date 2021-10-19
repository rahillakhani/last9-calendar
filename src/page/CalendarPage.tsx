import React from "react";
import EventList from "../components/EventsList";
import "./CalendarPage.scss";
import DatesComponent from "../components/DatesComponent";

const CalendarPage = () => (
    <div className={"calendar--container"}>
        <EventList/>
        <DatesComponent />
    </div>
);

export default CalendarPage;
