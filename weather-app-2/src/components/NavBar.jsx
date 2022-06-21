import SearchBar from "./SearchBar";


function NavBar({onSearch}) {
    return(
    <div className="navBar">
        <img src="####" alt="logo" />
        <SearchBar onSearch={onSearch}/>

    </div>
    );
}

export default NavBar;