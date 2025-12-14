import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api/api';

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        api.get('/allOrders').then(res => {
            console.log(res.data);
            setAllOrders(res.data);
        });
    }, []);
    return (
        <div className="orders">
            {allOrders.length === 0 ? (
                <div className="no-orders">
                    <p>You haven't placed any orders today</p>

                    <Link to={'/'} className="btn">
                        Get started
                    </Link>
                </div>
            ) : (
                <>
                    <h3 className="title">Orders ({allOrders.length})</h3>

                    <div className="order-table">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Quantity.</th>
                                <th>Price</th>
                                <th>Mode</th>
                            </tr>

                            {allOrders.map((stock, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{stock.name}</td>
                                        <td>{stock.qty}</td>
                                        <td>{stock.price}</td>
                                        <td>{stock.mode}</td>
                                    </tr>
                                );
                            })}
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default Orders;
