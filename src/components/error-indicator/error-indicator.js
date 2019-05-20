import React, { Component } from 'react';
import './error-indicator.css';
import burst from './burst.png';

const ErrorIndicator =() => {
    return (
        <div className="error-indicator">
            <img src={burst} alt="burst img" className='burst'/>
            <span className="text-info">
                OOPS! Our droids try to fix problems!
            </span>
        </div>
    );
};

export default ErrorIndicator;