import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <ul className="nav-list">
                    {/* <li><Link to = "/">Home</Link></li> */}
                    <li className="nav-item nav-item-grid-1"><Link className="nav-link" to = "/experience">Experience</Link></li>
                    <li className="nav-item nav-item-grid-2"><Link className="nav-link" to = "/education">Education</Link></li>
                    <li className="nav-item nav-item-grid-3"><Link className="nav-link" to = "/hardskills">Hardskills</Link></li>
                    <li className="nav-item nav-item-grid-4"><Link className="nav-link" to = "/softskills">Softskills</Link></li>
                </ul>
            </nav>
        </header>
    )  
}
        
export default Header;