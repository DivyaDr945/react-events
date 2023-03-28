import React from 'react';
import './style.css';
import Eventhandling from './EventComponent/Eventhandling';
import AlertEventhadle from './EventComponent/AlertEventhadle';
import EventhandlerCompo from './EventComponent/EventhandlerCompo';
import EventbindConstuctor from './EventComponent/EventbindConstuctor';
import EventhandlerArrow from './EventComponent/EventhandlerArrow';
import EventhadlerBind from './EventComponent/EventhadlerBind';
import EventhandlerParameter from './EventComponent/EventhandlerParameter';
import Arrowhandlerfunction from './EventComponent/Arrowhandlerfunction';
import UppercaseInput from './EventComponent/UppercaseInput';

export default function App() {
  return (
    <div>
      <Eventhandling />
      <AlertEventhadle />
      <EventhandlerCompo />
      <EventbindConstuctor />
      <EventhandlerArrow />
      <EventhadlerBind />
      <EventhandlerParameter />
      <Arrowhandlerfunction />
      <UppercaseInput />
    </div>
  );
}
