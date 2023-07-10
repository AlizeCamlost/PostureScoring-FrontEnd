import { Outlet, Link } from "react-router-dom"
const NavBar = () => {
    return (
        <nav>
            <div class="flex three demo">
                <div >
                    <Link to='/Layout'>
                        <button class="pseudo">Home</button>
                    </Link>
                    <Link to='/Exercises'>
                        <button class="pseudo">Do Exercise</button>
                    </Link>
                    <Link to='/Statistics'>
                        <button class="pseudo">Statistics</button>
                    </Link>
                </div>
                <div class="off-third">
                    <Link to='/Profile'>
                        <button>Profile</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar