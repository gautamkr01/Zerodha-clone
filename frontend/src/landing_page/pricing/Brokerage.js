import React from 'react';

function Brokerage() {
    return (
        <div className="container">
            <div className="row">
                <h2 className="pb-5 fs-5 text-center">
                    <a href="" style={{ textDecoration: 'none' }}>
                        Calculate your costs upfront
                    </a>
                    &nbsp; using our brokerage calculator
                </h2>
            </div>

            <div className="row">
                <h2 className="fs-4 px-0 mb-4">Charges for account opening</h2>
                <table className="border mb-5">
                    <tr className="border ">
                        <th className="p-3">Type of account</th>
                        <th>Charges</th>
                    </tr>
                    <tr>
                        <td className="p-3">Online account</td>
                        <td>
                            <span
                                className="px-2 py-1"
                                style={{
                                    backgroundColor: '#4caf50',
                                    color: '#fff',
                                    fontSize: '14px',
                                    borderRadius: '2px'
                                }}
                            >
                                FREE
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-3">Offline account</td>
                        <td>
                            <span
                                className="px-2 py-1"
                                style={{
                                    backgroundColor: '#4caf50',
                                    color: '#fff',
                                    fontSize: '14px',
                                    borderRadius: '2px'
                                }}
                            >
                                FREE
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-3">NRI account (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                    <tr>
                        <td className="p-3">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                </table>

                <h2 className="fs-4 px-0 mt-5 mb-4">Demat AMC (Annual Maintenance Charge)</h2>
                <table className="border mb-2">
                    <tr className="border ">
                        <th className="p-3 col-5">Value of holdings</th>
                        <th className="col-7">AMC</th>
                    </tr>
                    <tr>
                        <td className="p-3">Up to ₹4 lakh</td>
                        <td>
                            <span
                                className="px-2 py-1"
                                style={{
                                    backgroundColor: '#4caf50',
                                    color: '#fff',
                                    fontSize: '14px',
                                    borderRadius: '2px'
                                }}
                            >
                                FREE
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-3">₹4 lakh - ₹10 lakh</td>
                        <td>₹ 300 per year, charged quarterly</td>
                    </tr>
                    <tr>
                        <td className="p-3">Above ₹10 lakh</td>
                        <td>₹ 100 per year, charged quarterly</td>
                    </tr>
                </table>
                <p style={{ fontSize: '13px', padding: '0' }}>
                    * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).
                    BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <br />{' '}
                    <a href="" style={{ textDecoration: 'none' }}>
                        click here.
                    </a>
                </p>

                <h2 className="fs-4 px-0 mt-5 mb-4">Charges for optional value added services</h2>
                <table className="border mb-5">
                    <tr className="border ">
                        <th className="p-3 col-3">Service</th>
                        <th className="p-3 col-3">Billing Frquency</th>
                        <th className="p-3">Charges</th>
                    </tr>
                    <tr>
                        <td className="p-3">Tickertape</td>
                        <td className="p-3">Monthly / Annual</td>
                        <td className="p-3"> Free: 0 | Pro: 249/2399</td>
                    </tr>
                    <tr>
                        <td className="p-3">Smallcase</td>
                        <td className="p-3">Per transaction</td>
                        <td className="p-3">Buy & Invest More: 100 | SIP: 10</td>
                    </tr>
                    <tr>
                        <td className="p-3">Kite Connect</td>
                        <td className="p-3">Monthly</td>
                        <td className="p-3">Connect: 500 | Personal: Free</td>
                    </tr>
                </table>

                <div className="row">
                    <h2 className="fs-4 px-0 mt-5 mb-5">Charges explained</h2>
                    <div className="col-6 p-0">
                        <h4 className="fs-6 text-muted py-2">Securities/Commodities transaction tax</h4>
                        <p className="lh-lg text-muted" style={{ fontSize: '13px' }}>
                            Tax by the government when transacting on the exchanges. Charged as above on both buy <br />
                            and sell sides when trading equity delivery. Charged only on selling side when trading
                            <br />
                            intraday or on F&O.
                        </p>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. <br />
                            Important to keep a tab.
                        </p>

                        <h4 className="fs-6 text-muted py-2">Transaction/Turnover Charges</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                        </p>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore{' '}
                            <br /> w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f
                            01.12.2017)
                        </p>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross{' '}
                            <br /> turnover.
                        </p>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            BSE has revised transaction charges for group A, B and other non exclusive scrips (non-{' '}
                            <br />
                            exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat
                            rate <br /> basis w.e.f. December 1, 2022.
                        </p>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross{' '}
                            <br /> turnover.
                        </p>

                        <h4 className="fs-6 text-muted py-2">Call & trade</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including
                            auto square off <br /> orders.
                        </p>

                        <h4 className="fs-6 text-muted py-2">Stamp charges</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting
                            in instruments <br /> on the stock exchanges and depositories.
                        </p>

                        <h4 className="fs-6 text-muted py-2">NRI brokerage charges</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            <ul>
                                <li>
                                    For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever
                                    is lower).
                                </li>
                                <li>
                                    For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                                </li>
                                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                            </ul>
                        </p>

                        <h4 className="fs-6 text-muted py-2">Account with debit balance</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            If the account is in debit balance, any order placed will be charged ₹40 per executed order
                            instead of ₹20 per <br /> executed order.
                        </p>

                        <h4 className="fs-6 text-muted py-2">
                            Charges for Investor's Protection Fund Trust (IPFT) by NSE
                        </h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            <ul>
                                <li>Equity and Futures - ₹10 per crore + GST of the traded value. </li>
                                <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                                <li>
                                    Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of
                                    premium for Options.
                                </li>
                            </ul>
                        </p>

                        <h4 className="fs-6 text-muted py-2">Margin Trading Facility (MTF)</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            <ul>
                                <li>
                                    MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is
                                    applied from T+1 day until the day MTF stocks are sold.{' '}
                                </li>
                                <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                                <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                            </ul>
                        </p>
                    </div>

                    <div className="col-6">
                        <h4 className="fs-6 text-muted py-2">GST</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges
                            <br /> + transaction charges)
                        </p>

                        <h4 className="fs-6 text-muted py-2">SEBI Charges</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the
                            <br /> markets.
                        </p>

                        <h4 className="fs-6 text-muted py-2">DP (Depository participant) charges</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading
                            account ledger when stocks are sold, irrespective of quantity.
                        </p>

                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per
                            transaction <br /> on the CDSL fee.
                        </p>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL{' '}
                            <br /> fee.
                        </p>

                        <h4 className="fs-6 text-muted py-2">Pledging charges</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            ₹30 + GST per pledge request per ISIN.
                        </p>

                        <h4 className="fs-6 text-muted py-2">AMC (Account maintenance charges)</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn{' '}
                            <br />
                            more about BSDA,{' '}
                            <a href="" style={{ textDecoration: 'none' }}>
                                Click here
                            </a>
                        </p>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn{' '}
                            <br /> more about AMC,
                            <a href="" style={{ textDecoration: 'none' }}>
                                Click here
                            </a>
                        </p>

                        <h4 className="fs-6 text-muted py-2">Corporate action order charges</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through{' '}
                            <br /> Console.
                        </p>

                        <h4 className="fs-6 text-muted py-2">Off-market transfer charges</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            ₹25 per transaction.
                        </p>

                        <h4 className="fs-6 text-muted py-2">Physical CMR request</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
                        </p>

                        <h4 className="fs-6 text-muted py-2">Payment gateway charges</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            ₹9 + GST (Not levied on transfers done via UPI)
                        </p>

                        <h4 className="fs-6 text-muted py-2">Delayed Payment Charges</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading
                            account.{' '}
                            <a href="" style={{ textDecoration: 'none' }}>
                                Learn more.
                            </a>
                        </p>

                        <h4 className="fs-6 text-muted py-2">Trading using 3-in-1 account with block functionality</h4>
                        <p className="text-muted lh-lg" style={{ fontSize: '13px' }}>
                            <ul>
                                <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                                <li>Intraday Brokerage: 0.05% per executed order.</li>
                            </ul>
                        </p>
                    </div>

                    <h4 className="fs-6 text-muted py-2 p-0">Disclaimer</h4>
                    <p className="text-muted lh-base p-0" style={{ fontSize: '13px' }}>
                        For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt
                        to receive physical contract notes will be charged ₹20 per contract note plus courier charges.
                        Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and
                        regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised,
                        and assigned options contracts. Free investments are available only for our retail individual
                        clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less)
                        as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts
                        where physical delivery happens. For netted off positions in physically settled contracts, a
                        brokerage of 0.1% will be charged.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
