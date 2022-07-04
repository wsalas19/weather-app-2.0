import React from 'react';
import { useParams } from 'react-router-dom';
import s from "./City.module.css"
function City({city,getCityDetail}) {
    const params = useParams();
    if(params.cityId) getCityDetail(params.cityId);
    return ( 
    <div className={s.cityDetail}>
        <div className={s.head}>
        <h2>{city.name}</h2><p className={s.country}>{city.country}</p>
        </div>
        <div className={s.body}>
            <div className={s.info}>
                <p>Weather: {`${city.weather}`}</p>
                <p>Temperature: {`${city.temp}°C`}</p>
                <p>Minimun Temperature: {`${city.min}°C`}</p>
                <p>Maximum Temperature: {`${city.max}°C`}</p>
                <p>Wind speed: {`${city.wind} m/s`}</p>
            </div>
            <div >
                <img className={s.pic} src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="" />
            </div>
        </div>
    </div> 
    );
}

export default City;