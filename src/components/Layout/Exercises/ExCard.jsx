import { Outlet, Link } from "react-router-dom"

const ExCard = () => {
    return (
        <div>
            This is ExCard
            <div>
                <p>
                    <Link to=''>【Details】</Link>
                    <Link to='ExRecord'>【Start Exercising!】</Link>
                </p>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default ExCard