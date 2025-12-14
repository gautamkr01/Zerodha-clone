import React from 'react';

function Team() {
    return (
        <div className="container">
            <div className="row text-center">
                <h2 className="fs-4 mt-3 text-muted">People</h2>
            </div>

            <div className="row  text-muted fs-6" style={{ lineHeight: '1.8', fontSize: '1.2em' }}>
                <div className="col-5 p-5 text-center">
                    <img src="media/images/nithinKamath.jpg" style={{ borderRadius: '100%', width: '70%' }} />
                    <h4 className="fs-6 pt-4">Nithin Kamath</h4>
                    <p className="fs-6">Founder, CEO</p>
                </div>

                <div className="col-7 p-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his
                        decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking
                        industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data
                        Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on &nbsp;
                        <a href="" style={{ textDecoration: 'none' }}>
                            Homepage
                        </a>&nbsp;
                        /&nbsp;
                        <a href="" style={{ textDecoration: 'none' }}>
                            TradingQna
                        </a>&nbsp;
                        /&nbsp;
                        <a href="" style={{ textDecoration: 'none' }}>
                            Twitter
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
