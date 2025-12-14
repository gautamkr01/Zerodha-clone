import React from 'react';

function Hero() {
    return (
        <div className="container">
            <div className="row mt-5 p-5 text-center">
                <h1 className="pb-2 fs-3">Charges</h1>
                <p className="text-muted fs-5">List of all charges and taxes</p>
            </div>

            <div className="row text-center">
                <div className="col-4">
                    <img src="media/images/pricingEquity.svg" style={{ width: '70%' }} />
                    <h1 className="fs-3 my-4">Free equity delivery</h1>
                    <p className="text-muted my-4  lh-lg">
                        All equity delivery investments (NSE, BSE),
                        <br /> are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/images/intradayTrades.svg" style={{ width: '70%' }} />
                    <h1 className="fs-3 my-4">Intraday and F&O trades</h1>
                    <p className="text-muted my-4  lh-lg">
                        Flat ₹ 20 or 0.03% (whichever is lower) per <br />
                        executed order on intraday trades across <br /> equity, currency, and commodity trades. Flat
                        <br /> ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/images/pricingEquity.svg" style={{ width: '70%' }} />
                    <h1 className="fs-3 my-4">Free direct MF</h1>
                    <p className="text-muted my-4 lh-lg">
                        All direct mutual fund investments are <br />
                        absolutely free — ₹ 0 commissions & DP <br />
                        charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
