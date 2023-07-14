import React, { useState } from 'react';
import example from '../../../assets/46999982.jpeg'
import { Link } from "react-router-dom"



const ExDetail = ({ onConfirm, onClose, exNumber}) => {

    const exDetailStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        zIndex: '100',
    };
    const exDetailExitButtonStyle = {
        position: 'absolute',
        top: '10px',
        left: '10px',
    };
    const exDetailContentStyle = {
        padding: '50px',
    };
    const exDetailFooterStyle = {

    };

    return (
        <div style={exDetailStyle}>
            <div style={exDetailExitButtonStyle}>
                <button onClick={onClose}>退出</button>
            </div>
            <div style={exDetailContentStyle}>
                <img src={example} style={{ width: '200px', height: '200px' }} />
                <div style={{ marginLeft: '20px' }}>
                    <h2>练习 {exNumber}</h2>
                    <p>这里是练习 {exNumber} 的说明</p>
                </div>
            </div>
            <div style={exDetailFooterStyle}>
                <Link to='/Camera'>
                        <button onClick={onConfirm} >确认</button>
                </Link>
            </div>
        </div>
    );
};


export default ExDetail


