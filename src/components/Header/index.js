import React from 'react'
import Loader from './Loader/index'
import './style.scss'
import $ from 'jquery'


const Header = () => {

  const scroll = (e) => {
    const { level } = e.target.dataset;
    $('html').animate({
      scrollTop: level
    }, 300)
  }

  return (
    <header>
      <h2>Patryk Znamirowski</h2>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-3">
            <button data-level="360" onClick={scroll}><i className="fa fa-tasks"></i>Projekty</button>
          </div>
          <div className="col-12 col-md-3">
            <button data-level="1200" onClick={scroll}><i className="fa fa-cubes"></i>Technologie</button>
          </div>
          <div className="col-12 col-md-3">
            <button data-level="1600" onClick={scroll}><i className="fa fa-link"></i>Odnośniki</button>
          </div>
          <div className="col-12 col-md-3">
            <button data-level="2100" onClick={scroll}><i className="fa fa-envelope"></i>Kontakt</button>
          </div>
        </div>
      </div>
      <Loader />
    </header>
  )
}

export default Header;
