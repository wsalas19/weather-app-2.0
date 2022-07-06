import React from 'react';
function TechCards({name,src}) {
    return (
        <div>
            <img src={src} alt={`${name}-logo`} />
            <h3> {name} </h3>
        </div>
      );
}

export default TechCards;