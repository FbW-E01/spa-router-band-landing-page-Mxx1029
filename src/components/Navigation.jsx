import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <ul className="d-flex justify-content-between m-auto pb-5">
            <li><NavLink className="link" to="/">Home</NavLink></li>
            <li><NavLink className="link" to="/vocals">Vocals</NavLink></li>
            <li><NavLink className="link" to="/violin">Violin</NavLink></li>
            <li><NavLink className="link" to="/bass">Bass</NavLink></li>
            <li><NavLink className="link" to="/guitar">Guitar</NavLink></li>
            <li><NavLink className="link" to="/keyboard">Keyboard</NavLink></li>
            <li><NavLink className="link" to="/drums">Drums</NavLink></li>
        </ul>
    )
}