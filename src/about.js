import React from 'react';
import './about.css';

export function About() {
  return (
    <div id='aboutWrapper'>
      <div id='aboutContent'>
        <header id='aboutHeader'>
          <p id='headerText'>About</p>
        </header>
        <p className='aboutText'>A People's Calendar (aPC) is a project that seeks to promote the worldwide history of working class movements and liberation struggles in the form of a searchable "On This Day" calendar. This history includes, but is not limited to, indigenous resistance against colonization, the black liberation struggle, unionization efforts, slave rebellions, the women's suffrage movement, and workers' revolution.</p>
        <p className='aboutText'>This endeavor was inspired by Howard Zinn's book "A People's History of the United States". Zinn's scholarship and activism demonstrates that, if we are to understand what is how to approach our own struggles today, we have to begin by understanding the history of liberation struggle. Unfortunately, this history is often overwhelming in complexity and suppressed/obscured by various forces.</p>
        <p className='aboutText'>While not comprehensive, it is our hope that this calendar makes this topic easier to approach and study. The figures and events included here are not presented with an endorsement, but shared with the understanding that the history of all forms of liberation struggle are worth knowing - both their successes and their failures.</p>
        <p className='aboutText'>Although we do our best to fact-check the summaries of each event, this project is ultimately meant to provide a jumping off point for users to research the history and form their own opinions on the matter, using the sourced information below the summary of each event.</p>
        <p className='aboutText'>We are always looking out for important events, people, and texts that are missing from the calendar. You can make suggestions, sign up to volunteer, or just say hello at <a target='_blank' rel="noopener noreferrer" id='emailLink' href='mailto:apeoplescalendar@gmail.com'>apeoplescalendar@gmail.com</a>.</p>
      </div>
    </div>
  );
};
