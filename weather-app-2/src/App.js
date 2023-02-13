import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import City from "./components/City";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
	const [cities, setCities] = useState([]);
	const [city, setCity] = useState("");
	const [url, setUrl] = useState("");
	const WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY;
	const PHOTO_API = process.env.REACT_APP_PLACES_API_KEY;
	const technologies = [
		{
			name: "Javascript",
			src: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png",
		},
		{
			name: "HTML",
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
		},
		{
			name: "CSS",
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
		},
		{
			name: "React",
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
		},
	];

	async function getPhoto(query = "london") {
		const request = await axios.get(
			`https://pixabay.com/api/?key=${PHOTO_API}&q=${query}&image_type=photo`
		);
		setUrl(request.data.hits[0].largeImageURL);
		/* console.log(response) */
		/* if (response !== undefined){
        const url = response[0].urls.regular;
        return url;
      } else {return null} */
	}

	function onSearch(ciudad) {
		console.log("search");
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${WEATHER_API}&units=metric`
		)
			.then((r) => r.json())
			.then((recurso) => {
				if (recurso.main !== undefined) {
					const ciudad = {
						min: Math.round(recurso.main.temp_min),
						max: Math.round(recurso.main.temp_max),
						img: recurso.weather[0].icon,
						id: recurso.id,
						wind: recurso.wind.speed,
						temp: recurso.main.temp,
						name: recurso.name,
						weather: recurso.weather[0].main,
						clouds: recurso.clouds.all,
						latitud: recurso.coord.lat,
						longitud: recurso.coord.lon,
						country: recurso.sys.country,
					};
					setCities((oldCities) => [...oldCities, ciudad]);
				} else {
					alert("City not found");
				}
			});
	}

	function onClear() {
		console.log("clear");
		setCities([]);
	}

	function onClose(cardKey) {
		console.log(cardKey);
		let array1 = cities.filter((c) => c.id !== cardKey);
		setCities(array1);
	}

	function getCityDetail(cityId) {
		let targetCity = cities.filter((c) => c.id === parseInt(cityId));
		if (targetCity.length > 0) {
			setCity(targetCity[0]);
		} else {
			return null;
		}
	}

	return (
		<div className="App">
			<Nav />

			<Routes>
				<Route
					exact
					path="/"
					element={
						<Home
							onClear={onClear}
							onClose={onClose}
							onSearch={onSearch}
							cities={cities}
						/>
					}
				/>
				<Route path="/about" element={<About tech={technologies} />} />
				<Route path="/contact" element={<Contact />} />
				<Route
					path="/city/:cityId"
					element={
						<City
							getPhoto={getPhoto}
							url={url}
							city={city}
							getCityDetail={getCityDetail}
						/>
					}
				/>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
