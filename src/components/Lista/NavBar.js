import "./Nav.css";
import CartWidget from '../CartWidget';

export default function NavBar() { 
    return(
     <nav className="nav-main">
        <ul className="nav-list">
            <li >Ilustraciones</li>
            <li>Hot ilustraciones</li>
            <li>ofertas</li> 
            <CartWidget/>
        </ul> 
    </nav> 
    )

}
