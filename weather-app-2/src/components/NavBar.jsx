import SearchBar from "./SearchBar";


function NavBar({onSearch}) {
    return(
    <div className="navBar">
        <div className="navBarIzquierda"> <img src="####" alt="logo" /></div>
        <div className="navBarDerecha"> <SearchBar onSearch={onSearch}/></div>
       

    </div>
    );
}

export default NavBar;