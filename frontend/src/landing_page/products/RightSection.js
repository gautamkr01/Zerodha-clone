import React from 'react';

function RightSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container mt-5 pt-5">
            <div className="row justify-content-between align-items-center">
                <div className="col-4 pt-5">
                    <h1 className="fs-4 mt-5">{productName}</h1>

                    <p className="lh-lg pt-2text-muted">{productDescription}</p>
                    <div>
                        <a style={{ marginRight: '4rem', textDecoration: 'none' }} href={learnMore}>
                            Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className="col-7 ">
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
