import React from 'react';

function Awards() {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-6">
                    <img style={{width:"95%"}}  src="media/images/largestBroker.svg" alt='broker image'/>
                </div>
                <div className="col-6 mt-2 p-3">
                    <h1>Largest stock broker in India</h1>
                    <p>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by
                        trading and investing in:
                    </p>
                    <div className="row ">
                        <div className="col-6 p-2">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 p-2">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direcxt mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities </p>
                                </li>
                            </ul>
                        </div>
                        <img style={{width:"80%"}} src='media/images/pressLogos.png'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
