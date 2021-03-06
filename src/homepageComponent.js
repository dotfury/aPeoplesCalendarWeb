import React from 'react';
import './App.css';
import {
  NavLink,
} from "react-router-dom";
import {eventLibrary} from './eventLibrary.js';
import {HomepageEventComponent} from './homepageEventComponent.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

export function HomepageComponent(props) {
  console.log('props.winDim');
  console.log(props.winDim);

  //get event of the day
  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  //for the actual getting of data:
  var initTodayString = month + '-' + day;
  //todaysEvents is an object of categories (Rebellion, Labor, etc.), where each prop is a list of events that happened otd
  var todaysEvents = eventLibrary[initTodayString];
  var categoryList = ['Revolution', 'Rebellion', 'Labor', 'Birthdays', 'Assassinations', 'Other'];
  var eventOfTheDay = {description: ''};
  for (var i = 0; i < categoryList.length; i++) {
    var category = categoryList[i];
    for (var j = 0; j < todaysEvents[category].length; j++) {
      //console.log(todaysEvents[category][j].description.length);
      if (todaysEvents[category][j].description.length >= eventOfTheDay.description.length) {
        eventOfTheDay = todaysEvents[category][j];
      };
    };
  };

  return (
    <div id='homepageWrapper'>
      <div id='homepageContent'>
        <img
          src={require('./assets/howardZinnHeadshot.jpg')}
          alt='a portrait of historian Howard Zinn'
          id='homepageImg'
        />
        <div id='homepageText'>
          <p id='homepageHeader'>A People's Calendar</p>
          <div>
            <p id='homepageDescription'>Inspired by Howard Zinn's work "A People's History of the United States", A People's Calendar (aPC) is a project that seeks to promote the worldwide history of working class movements and liberation struggles in the form of a searchable "On This Day" calendar.</p>
            <p id='homepageDescription'>This history includes, but is not limited to, indigenous resistance against colonization, the black liberation struggle, unionization efforts, slave rebellions, the women's suffrage movement, and workers' revolution.</p>
          </div>
          <NavLink to='/calendar' id='toTheCalendarOuterWrapper'>
            <div to='/calendar' id='toTheCalendarWrapper'>
              <p id='toTheCalendar'>To the Calendar</p>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
          </NavLink>
        </div>
        <div id='eventOfTheDayWrapper'>
          <div id='eventOTDTextWrapper'>
            <p id='eventOfTheDay'>Event of the Day</p>
          </div>
          <HomepageEventComponent
            categoryEvent={eventOfTheDay}
            winDim={props.winDim}
          />
        </div>
      </div>
    </div>
  );
};
