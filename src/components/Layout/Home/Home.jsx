import "../../../../node_modules/picnic/picnic.min.css";
import logo from '../../../assets/211608346964.jpg'
import Layout from "../Layout";

const Home = () => {
    const brandStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const logoStyle = {
        width: '400px', // 控制图片的宽度
        height: 'auto' // 根据宽度自动调整高度
    };
    const textStyle = {
        textAlign: 'center',
        fontSize: '34px', // 控制文字大小
        fontFamily: 'Arial, sans-serif', // 设置字体
        fontWeight: 'bold' // 设置字体加粗
    };
    return(
        <div>
            <Layout />
            <a class="brand" style={brandStyle}>
                <img class="logo" src={logo} style={logoStyle}/>
                <span style={textStyle}>Welcome to Exercise Test Program</span>
            </a>
        </div>

    )
}


export default Home