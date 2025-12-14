import React from 'react';

function Universe() {
    return (
        <div className="container pt-5 text-center mb-5">
            <div className="row justify-content-evenly">
                <h2 className="fs-2 mb-4">The Zerodha Universe</h2>
                <p className="my-3">
                    Extend your trading and investment experience even further with our partner platforms
                </p>
                <div className="col-3 p-1 mt-5">
                    <img src="media/images/zerodhaFundhouse.png" style={{ height: '55px' }} />
                    <p className="text-small text-muted  mb-5 mt-3" style={{ fontSize: '.8rem' }}>
                        Our asset management venture <br />
                        that is creating simple and transparent index
                        <br />
                        funds to help you save for your goals.
                    </p>
                    <img src="media/images/streakLogo.png" style={{ height: '55px' }} />
                    <p className="text-small text-muted mt-3" style={{ fontSize: '.8rem' }}>
                        Systematic trading platform <br />
                        that allows you to create and backtest <br />
                        strategies without coding.
                    </p>
                </div>
                <div className="col-4 p-1 mt-5">
                    <img src="media/images/sensibullLogo.svg" style={{ height: '40px' }} />
                    <p className="text-small text-muted mb-5  mt-3" style={{ fontSize: '.8rem' }}>
                        Options trading platform that lets you <br />
                        create strategies, analyze positions, and examine <br />
                        data points like open interest, FII/DII, and more.
                    </p>
                    <img src="media/images/smallcaseLogo.png" style={{ height: '55px' }} />
                    <p className="text-small text-muted  mt-3" style={{ fontSize: '.8rem' }}>
                        Thematic investing platform <br />
                        that helps you invest in diversified <br />
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-3 p-1 mt-5">
                    <img src="media/images/tijori.svg" style={{ height: '55px' }} />
                    <p className=" text-muted mb-5  mt-3" style={{ fontSize: '.8rem' }}>
                        Investment research platform <br />
                        that offers detailed insights on stocks, <br />
                        sectors, supply chains, and more.
                    </p>

                    <img src="media/images/dittoLogo.png" style={{ height: '55px' }} />
                    <p className="text-small text-muted mt-3 " style={{ fontSize: '.8rem' }}>
                        Personalized advice on life <br />
                        and health insurance. No spam <br />
                        and no mis-selling.
                    </p>
                </div>
                <div className='pt-5'>
                    <button className="p-2 btn btn-primary fs-5 mb-5" style={{ width: '25%', margin: '0 auto' }}>
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Universe;
