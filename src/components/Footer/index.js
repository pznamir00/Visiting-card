import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <footer>
        <div>
            e-mail: pznamir00@gmail.com
            <p>
                <a href="https://github.com/pznamir00"><i className="fa fa-github-square"/></a>
                <a href="https://www.linkedin.com/in/patryk-znamirowski-b3a57b1b4/"><i className="fa fa-linkedin-square"/></a>
            </p>
        </div>
        <div id='cpy'>
            &copy; wszelkie prawa zastrzeżone, autor: Patryk Znamirowski
        </div>
    </footer>
  )
}

export default Footer;
