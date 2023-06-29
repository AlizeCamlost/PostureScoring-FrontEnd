import { Outlet, Link } from "react-router-dom"

const Exercises = () => {
    return (
        <div>
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