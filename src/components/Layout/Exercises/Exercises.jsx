import { Outlet, Link } from "react-router-dom"
import React, { useState } from 'react';
import example from '../../../assets/examplecover.png'
import "../../../../node_modules/picnic/picnic.min.css";
import "picnic"
import NavBar from "../NavBar";
import ExDetail from "./ExDetail";
import ExCard from "./ExCard";


const Exercises = () => {
    const [showDetail, setShowDetail] = useState(false);
    const [selectedEx, setSelectedEx] = useState(null);
    const handleClose = () => {
        setShowDetail(false);
    };
    const handleConfirm = () => {
        // 导航到新的路径
        history.push(`/ex/${selectedEx}`);
        // 关闭 Exdetail 组件
        setShowDetail(false);
    };


    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: '20px',
        fontFamily: 'Arial, sans-serif' // 添加字体样式
    };

    const exContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px', // 添加间隔
        overflowY: 'scroll', // 添加垂直滚动条
        maxHeight: 'calc(100vh - 100px)', // 设置最大高度，以便滚动条出现
        marginTop: '20px'
    };

    const exRowStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px' // 添加间隔
    };

    const exCardStyle = {
        border: '2px solid blue',
        padding: '10px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
    };


    const exerciseTypeStyle = {
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#757BF7',
        marginTop: '20px'
    };

    const exCards = (cardCount) => {
        // 将练习卡片分组为每行3个
        let res = [];
        for (let i = 1; i <= cardCount; i += 3) {
            let row = [];
            for (let j = i; j <= i + 2; j++) {
                if (j <= cardCount) {
                    row.push(
                        // <Link to={`/ex/${j}`} style={{ textDecoration: 'none' }}>
                        //     <img src={example} style={{ width: '300px', height: '300px' }} />
                        //     {/* <div style={exCardStyle}>ex{j}</div> */}
                        // </Link>
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setSelectedEx(j);
                                setShowDetail(true);
                            }}
                        >
                            <img src={example} style={{ width: '300px', height: '300px' }} />
                        </div>
                    );
                }
            }
            res.push(<div style={exRowStyle}>{row}</div>);
        }
        return res;
    };

    return (
        <div style={containerStyle}>
            <NavBar />
            <div style={buttonContainerStyle}>
                <div style={exerciseTypeStyle}>Exercise type</div>
                <button class="pseudo">All</button>
                {
                    (() => {
                        let res = []
                        for (let i = 0; i < 5; i++) {
                            res.push(<button class="pseudo">Type {i}</button>)
                        }
                        return res
                    })()
                }
            </div>
            <div style={exContainerStyle}>
                {exCards(5)}

                {showDetail && (
                    <ExDetail 
                        onConfirm={handleConfirm}
                        onClose={handleClose}
                        exNumber={selectedEx}
                    />
                )}

            </div>
        </div>
    )
}

export default Exercises