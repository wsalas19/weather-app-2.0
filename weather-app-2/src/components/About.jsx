import React,{useEffect} from 'react';

function About({getPhoto}) {
    useEffect(() => {
        document.title = 'About';
      });
      
    return ( 
    <div>
        <h3>
        404 error - page in progress

        </h3>
        <img src={getPhoto("london")} alt="city-landscape" />
    </div> );
}

export default About;