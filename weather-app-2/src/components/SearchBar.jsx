function SearchBar({onSearch}) {
    return <div>
        <input type="text" placeholder="city.." />
        <button onClick={onSearch}>Search</button>
    </div>;
}

export default SearchBar;