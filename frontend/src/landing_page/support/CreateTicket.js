import React from 'react';

function CreateTicket() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex ">
                <div className="col-8">
                    <div class=" w-100 mb-4">
                        <button
                            class="btn btn-light no-hover p-3 fs-6 text-start w-100 d-flex justify-content-between align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#drop1"
                            aria-controls="drop1"
                            aria-expanded="false"
                        >
                            <span>
                                <i
                                    className="fa-solid fa-circle-plus me-3"
                                    style={{ width: '1rem', color: '#397dd0' }}
                                ></i>
                                &nbsp; &nbsp; Account Opening
                            </span>
                            <i className="fa-solid fa-angle-down" style={{ color: '#397dd0' }}></i>
                        </button>
                        <div id="drop1" class="collapse w-100">
                            <div className="ms-5">
                                <ul className="list-group " style={{ color: '#397dd0' }}>
                                    <li>
                                        <a className="list-group-item" href="#">
                                            Resident individual
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Minor
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Non Resident Indian (NRI)
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Non Resident Indian (NRI)
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Glossary
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class=" w-100 mb-4">
                        <button
                            class="btn btn-light no-hover p-3 fs-6 text-start w-100 d-flex justify-content-between align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#drop2"
                            aria-controls="drop2"
                            aria-expanded="false"
                        >
                            <span>
                                <i
                                    className="fa-regular fa-circle-user me-3"
                                    style={{ width: '1rem', color: '#397dd0' }}
                                ></i>
                                &nbsp; &nbsp; Your Zerodha Account
                            </span>
                            <i className="fa-solid fa-angle-down" style={{ color: '#397dd0' }}></i>
                        </button>
                        <div id="drop2" class="collapse w-100">
                            <div className="ms-5">
                                <ul className="list-group " style={{ color: '#397dd0' }}>
                                    <li>
                                        <a className="list-group-item" href="#">
                                            Your Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Account modification
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Client Master Report (CMR) and Depository Participant (DP)
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Nomination
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Transfer and conversion of securities
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class=" w-100 mb-4">
                        <button
                            class="btn btn-light no-hover p-3 fs-6 text-start w-100 d-flex justify-content-between align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#drop3"
                            aria-controls="drop3"
                            aria-expanded="false"
                        >
                            <span>
                                <i className="fa-brands fa-uikit me-3" style={{ width: '1rem', color: '#397dd0' }}></i>
                                &nbsp; &nbsp; Kite
                            </span>
                            <i className="fa-solid fa-angle-down" style={{ color: '#397dd0' }}></i>
                        </button>
                        <div id="drop3" class="collapse w-100">
                            <div className="ms-5">
                                <ul className="list-group " style={{ color: '#397dd0' }}>
                                    <li>
                                        <a className="list-group-item" href="#">
                                            IPO
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Trading FAQs
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Margin Trading Facility (MTF) and Margins
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Charts and orders
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Alerts and Nudges
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            General
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class=" w-100 mb-4">
                        <button
                            class="btn btn-light no-hover p-3 fs-6 text-start w-100 d-flex justify-content-between align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#drop4"
                            aria-controls="drop4"
                            aria-expanded="false"
                        >
                            <span>
                                <i
                                    className="fa-solid fa-indian-rupee-sign me-3"
                                    style={{ width: '1rem', color: '#397dd0' }}
                                ></i>
                                &nbsp; &nbsp; Funds
                            </span>
                            <i className="fa-solid fa-angle-down" style={{ color: '#397dd0' }}></i>
                        </button>
                        <div id="drop4" class="collapse w-100">
                            <div className="ms-5">
                                <ul className="list-group " style={{ color: '#397dd0' }}>
                                    <li>
                                        <a className="list-group-item" href="#">
                                            Add money
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Withdraw money
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Add bank accounts
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            eMandates
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class=" w-100 mb-4">
                        <button
                            class="btn btn-light no-hover p-3 fs-6 text-start w-100 d-flex justify-content-between align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#drop5"
                            aria-controls="drop5"
                            aria-expanded="false"
                        >
                            <span>
                                <i
                                    className="fa-solid fa-circle-nodes me-3"
                                    style={{ width: '1rem', color: '#397dd0' }}
                                ></i>
                                &nbsp; &nbsp; Console
                            </span>
                            <i className="fa-solid fa-angle-down" style={{ color: '#397dd0' }}></i>
                        </button>
                        <div id="drop5" class="collapse w-100">
                            <div className="ms-5">
                                <ul className="list-group " style={{ color: '#397dd0' }}>
                                    <li>
                                        <a className="list-group-item" href="#">
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Corporate actions
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Funds statement
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Reports
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Segments
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class=" w-100 mb-4">
                        <button
                            class="btn btn-light no-hover p-3 fs-6 text-start w-100 d-flex justify-content-between align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#drop6"
                            aria-controls="drop6"
                            aria-expanded="false"
                        >
                            <span>
                                <i className="fa-solid fa-coins me-3" style={{ width: '1rem', color: '#397dd0' }}></i>
                                &nbsp; &nbsp; Coin
                            </span>
                            <i className="fa-solid fa-angle-down" style={{ color: '#397dd0' }}></i>
                        </button>
                        <div id="drop6" class="collapse w-100">
                            <div className="ms-5">
                                <ul className="list-group " style={{ color: '#397dd0' }}>
                                    <li>
                                        <a className="list-group-item" href="#">
                                            Mutual funds
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            National Pension Scheme (NPS)
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Features on Coin
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            Payments and Orders
                                        </a>
                                    </li>
                                    <li>
                                        <a class="list-group-item" href="#">
                                            General
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className=" d-flex ms-5 " style={{ backgroundColor: '#fff4e5' }}>
                        <div style={{ width: '8px', backgroundColor: '#ff9100' }}></div>
                        <ul className="ms-3 mb-0">
                            <li className="pt-3 text-primary">
                                <a href="#" className="text-primary">
                                    Rights Entitlements listing in December 2025
                                </a>
                            </li>
                            <li className="pt-2 pb-3 text-primary">
                                <a href="#" className="text-primary ">
                                    Latest Intraday leverages and Square-off timings
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className=" ms-5  mt-4">
                        <h5 className="p-3 mb-0" style={{ backgroundColor: '#f6f6f6' }}>
                            Quick links
                        </h5>
                        <a className="p-3 border d-block text-decoration-none" link="#">
                            1. Track account opening
                        </a>

                        <a className="p-3 border d-block text-decoration-none" link="#">
                            2. Track segment activation
                        </a>

                        <a className="p-3 border d-block text-decoration-none" link="#">
                            3. Intraday margins
                        </a>

                        <a className="p-3 border d-block text-decoration-none" link="#">
                            4. Kite user manual
                        </a>

                        <a className="p-3 border d-block text-decoration-none" link="#">
                            5. Learn how to create a ticket
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
