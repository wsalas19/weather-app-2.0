import React from "react";
import { NavLink } from "react-router-dom";
import s from "../styles/Card.module.css";

function Card({ name, max, min, img, id, onClose }) {
	return (
		<div className={s.card}>
			<div className={s.head}>
				<button className={s.close} onClick={onClose}>
					X
				</button>
				<NavLink to={`/city/${id}`}>
					<h1 className={s.name}>{name}</h1>
				</NavLink>
			</div>
			<div className={s.info}>
				<h3 className={s.temp}>Max: {`${Math.floor(max)}°C`}</h3>
				<h3 className={s.temp}>Min: {`${Math.floor(min)}°C`}</h3>
				<img
					className="cardImage"
					src={`http://openweathermap.org/img/wn/${img}@2x.png`}
					alt="weather-description"
				/>
			</div>
		</div>
	);
}

export default Card;
