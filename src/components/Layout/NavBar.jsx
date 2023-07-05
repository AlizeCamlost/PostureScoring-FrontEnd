import { Outlet, Link } from "react-router-dom"
const NavBar = () => {
    return (
        <nav>
            <div class="flex three demo">
                <div >
                    <Link to='/Layout'>
                        <button class="pseudo">Exercise Test</button>
                    </Link>
                </div>
                <div class="off-fourth-800">
                    <Link to='/Exercises'>
                        <button class="pseudo">Exercise List</button>
                    </Link>
                    <Link to='/Statistics'>
                        <button class="pseudo">Statistics</button>
                    </Link>
                    <Link to='/Profile'>
                        <button>Profile</button>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default NavBar