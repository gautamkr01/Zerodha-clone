import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container mt-5 pt-5">
            <div className="row justify-content-between ">
                <div className="col-7 ">
                    <img src={imageURL} />
                </div>
                <div className="col-4 pt-5">
                    <h1 className="fs-4">{productName}</h1>

                    <p className="lh-lg pt-2 text-muted">{productDescription}</p>
                    <div>
                        <a style={{ marginRight: '4rem', textDecoration: 'none' }} href={tryDemo}>
                            Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a style={{ marginRight: '4rem', textDecoration: 'none' }} href={learnMore}>
                            Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="mt-4 ">
                        <a href={googlePlay} style={{ marginRight: '1rem' }}>
                            <img src="media/images/googlePlayBadge.svg" />
                        </a>

                        <a href={appStore}>
                            <img src="media/images/appstoreBadge.svg" />
                            <img src="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
