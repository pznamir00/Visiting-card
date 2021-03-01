import React, { useState, useEffect } from 'react'
import { Projects, Stack, Links } from './Content/index'
import Contact from './Contact/index'
import './style.scss'
import $ from 'jquery';


const Main = () => {

  const scroll = () => {
    let elements = [
      { name: 'projects', top: $('#projects').offset().top },
      { name: 'stack', top: $('#stack').offset().top },
      { name: 'links', top: $('#links').offset().top }
    ];
    let top = document.documentElement.scrollTop;
    elements.forEach(i => {
      let el = $(`#${i.name}`);
      if(top + 700 >= i.top && el.attr('data-moved') === "false"){
        if(i.name === "stack"){
          el.animate({
            marginRight: '0px'
          }, 1000).attr("data-moved", "true");
        } else {
          el.animate({
            marginLeft: '0px'
          }, 1000).attr("data-moved", "true");
          if(i.name === "links") $(document).off();
        }
      }
    })
  }

  useEffect(() => { $(document).on('scroll', scroll); scroll(); }, []);

  return (
    <main style={{paddingTop: '200px'}}>
      <div id="content">
          <section>
            <Projects/>
          </section>
          <section>
            <Stack/>
          </section>
          <section>
            <Links/>
          </section>
      </div>
      <div>
          <div className="dot bg-dark"></div>
          <section className="contact-field bg-dark">
              <Contact/>
          </section>
      </div>
    </main>
  )
}

export default Main;
