import React from 'react';

function Hero() {
    return (
        <div className="container text-center py-5 border-bottom">
            <h1 className="fs-3 pt-5">Zerodha Products</h1>
            <h3 className="fs-5 p-3 text-muted">Sleek, modern, and intuitive trading platforms</h3>
            <p className='pb-5'>
                Check out our &nbsp;
                <a href="" style={{ textDecoration: 'none' }}>
                    investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </p>
        </div>
    );
}

export default Hero;
