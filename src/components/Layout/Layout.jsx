import { Outlet, Link } from "react-router-dom"
import NavBar from "./NavBar"
import Home from './Home/Home'

const Layout = () => {
    return (
        <div>
            <div>
                <div>
                    <NavBar />
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout