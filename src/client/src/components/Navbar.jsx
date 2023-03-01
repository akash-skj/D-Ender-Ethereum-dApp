const Navbar = () => {
    return(
        <div className="navbar bg-base-200 bg-opacity-75 w-screen">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">D-Ender</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a className="mx-2">OPEN-TENDERS</a></li>
                <li><a className="mx-2">SELECTIVE-TENDERS</a> </li>
                <li>
                    <button className="btn btn-primary text-black mx-4">CONNECT WALLET</button>
                </li>
            </ul>
        </div>
        </div>
    );
}

export default Navbar;