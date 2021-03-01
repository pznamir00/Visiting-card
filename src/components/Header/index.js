import React from 'react'
import Loader from './Loader/index'
import './style.scss'
import $ from 'jquery'


const Header = () => {

  const scroll = e => {
    const { section } = e.target.dataset;
    let target = $(`#${section}`);
    $([document.documentElement, document.body]).animate({
      scrollTop: target.offset().top-80
    }, 1000);
  }

  return (
      <header>
          <nav class="navbar navbar-expand-lg">
            <h2 class="navbar-brand mx-auto mx-5 px-5">Patryk Znamirowski</h2>
            <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active text-center">
                        <button data-section="projects" className='text-muted' onClick={scroll}><i className="fa fa-tasks"></i>Projekty</button>
                    </li>
                    <li class="nav-item active text-center">
                        <button data-section="stack" className='text-muted' onClick={scroll}><i className="fa fa-cubes"></i>Technologie</button>
                    </li>
                    <li class="nav-item active text-center">
                        <button data-section="links" className='text-muted' onClick={scroll}><i className="fa fa-link"></i>Odnośniki</button>
                    </li>
                    <li class="nav-item active text-center">
                        <button data-section="contact-form" className='text-muted' onClick={scroll}><i className="fa fa-envelope"></i>Kontakt</button>
                    </li>
                </ul>
            </div>
          </nav>
          <Loader />
      </header>
  )
}

export default Header;
