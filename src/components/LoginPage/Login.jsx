import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const goTo = () => {
        navigate('/Layout')
    }
    return (
        <div>
            <div>
                Welcome!
            </div>
            <div>
                Username:<input type="text" name="usrname" />
            </div>
            <div>
                Password:<input type="text" name="passwd" />
            </div>
            <button onClick={goTo}>Login</button>
        </div>
    )
}

export default Login