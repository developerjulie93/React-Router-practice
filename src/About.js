import React from 'react';
import qs from 'qs';

const About =({location})=>{
    const query = qs.parse(location.search,{ignoreQueryPrefix: true}); //remove '?'
    const showDetail = query.detail ==='true'; 
    return(
        <div>
            <h1>About</h1>
            <p>This project is example for react-router</p>
            {showDetail && <p>detail value is true</p>}
        </div>
    );
};
export default About;