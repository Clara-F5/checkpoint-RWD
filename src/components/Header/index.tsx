import './style.css'
import {Link} from "react-router-dom"

function Header() {

  return (
    <>
       <header>
<h1>Checkpoint</h1>
<nav>
 <ul>
  <li><Link to ="/">HOME</Link></li>
  <li> <Link to ="/sobre">SOBRE</Link></li>
  <li> <Link to ="/contato">CONTATO</Link></li>
 </ul>
</nav>
 </header>
    
    </>
  )
}

export default Header