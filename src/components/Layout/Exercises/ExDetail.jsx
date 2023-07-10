import example from '../../../assets/46999982.jpeg'

// const ExDetail = () => {
//     return <div>this is the exercise's detail</div>

// }


const ExDetail = ({ onConfirm, exNumber }) => {
    const exDetailStyle = {

    };
    const exDetailHeaderStyle = {

    };
    const exDetailContentStyle = {

    };
    const exDetailFooterStyle = {

    };

    return (
        <div style={exDetailStyle}>
            <div style={exDetailHeaderStyle}>
                <button onClick={() => setShowDetail(false)}>退出</button>
            </div>
            <div style={exDetailContentStyle}>
                <img src={example} style={{ width: '200px', height: '200px' }} />
                <div style={{ marginLeft: '20px' }}>
                    <h2>练习 {exNumber}</h2>
                    <p>这里是练习 {exNumber} 的说明</p>
                </div>
            </div>
            <div style={exDetailFooterStyle}>
                <button onClick={onConfirm}>确认</button>
            </div>
        </div>
    );
};


export default ExDetail


