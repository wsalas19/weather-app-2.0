import React, { useEffect } from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import s from "../styles/Home.module.css";
function Home({ cities, onClose, onClear, onSearch }) {
	useEffect(() => {
		document.title = "Home - Weather App";
	});

	let nothing = (
		<div className={s.nothing}>
			<p>No cities to show.</p>
		</div>
	);

	return (
		<div
			className={
				cities.length === 0 || cities === undefined ? s.mainContainer : null
			}
		>
			<SearchBar onClear={onClear} onSearch={onSearch} />
			{cities.length === 0 || cities === undefined ? (
				nothing
			) : (
				<Cards cities={cities} onClose={onClose} />
			)}
		</div>
	);
}

export default Home;
