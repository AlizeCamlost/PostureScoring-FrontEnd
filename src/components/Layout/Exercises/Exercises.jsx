import { Outlet, Link } from "react-router-dom"
import example from '../../../assets/46999982.jpeg'
import "../../../../node_modules/picnic/picnic.min.css";
import Layout from "../Layout";

const Exercises = () => {
    return (
        <div>
            <Layout />
            <div>
                <div>Exercise type</div>
                <button>All</button>
                {
                    (() => {
                        let res = []
                        for (let i = 0; i < 3; i++) {
                            res.push(<button>Type {i}</button>)
                        }
                        return res
                    })()
                }
            </div>
            <div>
                <Link to='ExCard'>ex1</Link>
                {
                    (() => {
                        let res = []
                        for (let i = 2; i <= 6; i++) {
                            // res.push(<Link to=''>ex{i}</Link>)
                            res.push(<div>ex{i}</div>)
                        }
                        return res
                    })()
                }
            </div>
            <div>
                <p>Ex detail & Try it</p>
                <Outlet />
            </div>
        </div>
    )
}

export default Exercises











// const Exercises = () => {

//     const containerStyle = {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start'
//     };

//     const buttonContainerStyle = {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         marginRight: '20px',
//         fontFamily: 'Arial, sans-serif' // 添加字体样式
//     };

//     const exContainerStyle = {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '20px' // 添加间隔
//     };

//     const exRowStyle = {
//         display: 'flex',
//         flexDirection: 'row',
//         gap: '20px' // 添加间隔
//     };

//     const exCardStyle = {
//         border: '1px solid black',
//         padding: '10px',
//         textAlign: 'center',
//         fontFamily: 'Arial, sans-serif'
//     };


//     const exerciseTypeStyle = {
//         fontWeight: 'bold',
//         fontSize: '20px' // 调整字体大小
//     };

//     const exCards = (() => {
//         // 将练习卡片分组为每行3个
//         let res = [];
//         for (let i = 1; i <= 7; i += 3) {
//             let row = [];
//             for (let j = i; j <= i + 2; j++) {
//                 if (j <= 6) {
//                     row.push(
//                         <Link to={`/ex/${j}`} style={{ textDecoration: 'none' }}>
//                             <img src={example} style={{ width: '300px', height: '300px' }} />
//                             {/* <div style={exCardStyle}>ex{j}</div> */}
//                         </Link>
//                     );
//                 }
//             }
//             res.push(<div style={exRowStyle}>{row}</div>);
//         }
//         return res;
//     })();

//     return (
//         <div style={containerStyle}>
//             {/* <div style={buttonContainerStyle}>
//                 <div>Exercise type</div>
//                 <button>All</button>
//                 {
//                     (() => {
//                         let res = []
//                         for (let i = 0; i < 3; i++) {
//                             res.push(<button>Type {i}</button>)
//                         }
//                         return res
//                     })()
//                 }
//             </div> */}
//             <div style={buttonContainerStyle}>
//                 <div style={exerciseTypeStyle}>Exercise type</div>
//                 <button>All</button>
//                     {
//                         (() => {
//                             let res = []
//                             for (let i = 0; i < 3; i++) {
//                                 res.push(<button>Type {i}</button>)
//                             }
//                             return res
//                         })()
//                     }
//             </div>
//             <div style={exContainerStyle}>
//                 {exCards}
//             </div>
//             <div>
//                 <p>Ex detail & Try it</p>
//                 <Outlet />
//             </div>
//         </div>
//     )
// }

// export default Exercises