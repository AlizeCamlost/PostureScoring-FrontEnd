import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div>
                <p>
                    <Link to=''>【Home】</Link>
                    <Link to='Exercises'>【Exercise List】</Link>
                    <Link to='Statistics'>【Statistics】</Link>
                    <Link to='Profile'>【Profile】</Link>
                </p>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout