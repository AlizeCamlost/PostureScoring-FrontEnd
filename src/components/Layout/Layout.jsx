import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div>
                <div>
                    <Link to=''>【Home】</Link>
                    <Link to='Exercises'>【Exercise List】</Link>
                    <Link to='Statistics'>【Statistics】</Link>
                    <Link to='Profile'>【Profile】</Link>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout