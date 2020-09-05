import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <footer>
      <p>Patryk Znamirowski, strona prywatna.</p>
      |
      <p>e-mail: pznamir00@gmail.com</p>
      <span>
        <i dangerouslySetInnerHTML={{ "__html": "&copy; &nbsp;" }} />
        Wszelkie prawa zastrzeżone
      </span>
    </footer>
  )
}

export default Footer;
