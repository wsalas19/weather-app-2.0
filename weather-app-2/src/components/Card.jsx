

function Card({name,max,min,img,onClose}) {
    return (  
        <div>
            <button onClick={onClose}>X</button>
            <h1>{name}</h1>
            <h3>Max:{max}</h3>
            <h3>Min:{min}</h3>
            <img src={img} alt="weather-description" />

        </div>
    );
}

export default Card;