import './Header.css'

function Header(){
    return (
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="#">Mensageiro</a>
            </div>
            <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            </ul>
        </div>
        </nav>
    );
}


export default Header;