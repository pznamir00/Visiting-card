import React from 'react'
import './projects.scss'
import './stack.scss'
import './links.scss'



const Projects = () => {
  return (
    <div className="projects content-element">
      <h2><i className="fa fa-tasks"/>Projekty</h2>
      <div>
        <h5><i className="fa fa-money"/>Aplikacja walutowa w ReactJS</h5>
        <p>
          Strona pozwala na szybki wgląd w aktualne kursy walut.<br/>
          Możemy sprawdzić tam dzisiejsze dane jak i historyczne wpisując konkretną datę.<br/>
          Aplikacja zawiera również prosty kalkulator walutowy.<br/>
          <br/>
          <span>
            Link: <a href="https://pznamir00.github.io/Rate-React-App/">https://pznamir00.github.io/Rate-React-App/</a><br/>
            Repozytorium na GitHubie: <a href="https://github.com/pznamir00/Rate-React-App">https://github.com/pznamir00/Rate-React-App</a>
          </span>
        </p>
      </div>
      <div>
        <h5><i className="fa fa-sticky-note"/>WonderfullPlace - blog z ciekawymi miejscami, Laravel/ReactJS</h5>
        <p>
          Strona jest blogiem, w którym zalogowany użytkownik może dodać ciekawe miejsce.<br/>
          Będzie one zaznaczone na mapie głównej strony.<br/>
          Aplikacja ma opcję dodawania komentarzy.<br/>
          <br/>
          <span>
            Link: <a href="http://floating-castle-27345.herokuapp.com/">http://floating-castle-27345.herokuapp.com/</a><br/>
            Repozytorium na GitHubie: <a href="https://github.com/pznamir00/Laravel-React-Locations-Blog">https://github.com/pznamir00/Laravel-React-Locations-Blog</a>
          </span>
        </p>
      </div>
      <div>
        <h5><i className="fa fa-shopping-basket"/>Sklep internetowy w Laravel/ReactJS</h5>
        <p>
          Nieaktywny sklep surfingowy stworzony w Laravelu.<br/>
          Aplikacja zawiera system logowania, koszyk internetowy, system składania zamówienia oraz system ról użytkowników.<br/>
          Strona korzysta z panelu administracyjnego Voyager.<br/>
          <br/>
          <span>
            Link: <a href="http://surf-store-1.herokuapp.com/">http://surf-store-1.herokuapp.com/</a><br/>
            Repozytorium na GitHubie: <a href="https://github.com/pznamir00/Surf-Store-Laravel-ReactJS">https://github.com/pznamir00/Surf-Store-Laravel-ReactJS</a>
          </span>
        </p>
      </div>
    </div>
  )
}



const Stack = () => {
  return (
    <div className="stack content-element">
      <h2><i className="fa fa-cubes"/>Technologie</h2>
      <b><i className="fa fa-code"/>Frontend</b>
      <div>
        <p>JavaScript</p>
        <p>ReactJS</p>
        <p>React-Hooks</p>
        <p>Redux</p>
        <p>jQuery</p>
        <p>HTML5/CSS3</p>
        <p>SASS</p>
        <p>Bootstrap</p>
      </div>
      <br/>
      <b><i className="fa fa-server"/>Backend</b>
      <div>
        <p>PHP</p>
        <p>Laravel</p>
        <p>REST API</p>
        <p>MySql/Sqlite</p>
      </div>
    </div>
  )
}



const Links = () => {
  return (
    <div className="links content-element">
      <h2><i className="fa fa-link"/>Odnośniki</h2>
      <table>
        <tbody>
          <tr>
            <td><i className="fa fa-github"/>GitHub</td>
            <td><a href="https://github.com/pznamir00">https://github.com/pznamir00</a></td>
          </tr>
          <tr>
            <td><i className="fa fa-linkedin"/>Linkedin</td>
            <td><a href="https://www.linkedin.com/in/patryk-znamirowski-b3a57b1b4/">https://www.linkedin.com/in/patryk-znamirowski-b3a57b1b4/</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}



export {
    Projects,
    Stack,
    Links
};
