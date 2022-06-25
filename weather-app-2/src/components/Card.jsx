

function Card({name,max,min,img,onClose}) {
    return (  
        <div className="card">
            <div className="cardHead">
            <button className="closeButtonCard" onClick={onClose}>X</button>
            <h1>{name}</h1>
            </div>
            <h3>Max:{max}</h3>
            <h3>Min:{min}</h3>
            <img className="cardImage" src={img} alt="weather-description" />

        </div>
    );
}

export default Card;