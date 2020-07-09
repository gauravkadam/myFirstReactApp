import React from 'react';
import './header.css';

export default class Header extends React.Component {

    render() {
        return (
            <ul>
                <li>Home</li>
                <li>Service</li>
                <li>Product</li>
            </ul>
        )
    }
}