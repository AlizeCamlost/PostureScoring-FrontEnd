// import React, { useState } from 'react';
// import { Link } from "react-router-dom"

// import ex_a from '../../../assets/a.png';
// import ex_b from '../../../assets/b.png';
// import ex_c from '../../../assets/c.png';
// import ex_d from '../../../assets/d.png';
// import ex_e from '../../../assets/e.png';
// import ex_f from '../../../assets/f.png';
// import ex_g from '../../../assets/g.png';
// import ex_h from '../../../assets/h.png';
// import ex_i from '../../../assets/i.png';

// const ExDetail = ({ onConfirm, onClose, exNumber }) => {
//     const examples = [ex_a, ex_b, ex_c, ex_d, ex_e, ex_f, ex_g, ex_h, ex_i];

//     const exDetailStyle = {
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: '80%',
//         height: '80%',
//         backgroundColor: '#fff',
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         padding: '20px',
//         zIndex: '100',
//     };
//     const exDetailExitButtonStyle = {
//         position: 'absolute',
//         top: '10px',
//         left: '10px',
//     };
//     const exDetailContentStyle = {
//         padding: '50px',
//     };
//     const exDetailFooterStyle = {

//     };

//     return (

//         <div style={exDetailStyle}>
//             <div style={exDetailExitButtonStyle}>
//                 <button onClick={onClose}>退出</button>
//             </div>
//             <div style={exDetailContentStyle}>
//                 <img src={examples[exNumber - 1]} style={{ width: '200px', height: '200px' }} />
//                 <div style={{ marginLeft: '20px' }}>
//                     <h2>Exercise {exNumber}</h2>
//                     <p>这里是练习 {exNumber} 的说明</p>
//                 </div>
//             </div>
//             <div style={exDetailFooterStyle}>
//                 <Link to='/Camera'>
//                         <button onClick={onConfirm} >确认</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };


// export default ExDetail




import React from 'react';
import { Link } from 'react-router-dom';
import ex_a from '../../../assets/a.png';
import ex_b from '../../../assets/b.png';
import ex_c from '../../../assets/c.png';
import ex_d from '../../../assets/d.png';
import ex_e from '../../../assets/e.png';
import ex_f from '../../../assets/f.png';
import ex_g from '../../../assets/g.png';
import ex_h from '../../../assets/h.png';
import ex_i from '../../../assets/i.png';

const examples = [ex_a, ex_b, ex_c, ex_d, ex_e, ex_f, ex_g, ex_h, ex_i];

const ExDetail = ({ onConfirm, onClose, exNumber }) => {
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
    const exDetailFooterStyle = {};

    return (
        <div style={exDetailStyle}>
            <div style={exDetailExitButtonStyle}>
                <button onClick={onClose}>退出</button>
            </div>
            <div style={exDetailContentStyle}>
                <img src={examples[exNumber - 1]} style={{ width: '200px', height: '200px' }} />
                <div style={{ marginLeft: '20px' }}>
                    <h2>Exercise {exNumber}</h2>
                    <p>这里是练习 {exNumber} 的说明</p>
                </div>
            </div>
            <div style={exDetailFooterStyle}>
                <Link to={`/Camera/${exNumber}`}>
                    <button onClick={onConfirm}>确认</button>
                </Link>
            </div>
        </div>
    );
};

export default ExDetail;