import React from 'react';

const Banner = ({children}) => (
    <div className="banner">
        <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>{children}</p>
        </div>
    </div>
);

export default Banner;