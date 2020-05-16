import React from 'react';
import preloader from '../images/preloading.gif';

const Preloader = () => {
    return ( 
        <div className="container preloader">
            <img src={preloader} alt="preloader" />
            <p><h5 className="display-5">Loading</h5></p>
        </div>
        
     );
}
 
export default Preloader;