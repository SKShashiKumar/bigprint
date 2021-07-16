import { Link } from "react-router-dom";

const Nav = () => {
    return (
    <div>
        <nav class="navbar navbar-expand-sm bg-none navbar-dark">
        <Link class="navbar-brand mx-4" to="/"><img src="img/BP.png" alt="logo" height="60px" width="200px" /></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item mx-4">
                    <Link class="nav-link" to="/">
                        <h5 class="text-white">HOME</h5>
                    </Link>
                </li>
                <li class="nav-item mx-4">
                    <Link class="nav-link" to="/">
                        <h5 class="text-white">SUPPORT</h5>
                    </Link>
                </li>
                <li class="nav-item mx-4">
                    <Link class="nav-link" to="/">
                        <h5 class="text-white">SERVICES</h5>
                    </Link>
                </li>
                <li class="nav-item mx-4">
                    <Link class="nav-link" to="/">
                        <h5 class="text-white">CONTACT</h5>
                    </Link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link class="nav-link" to="/">
                        <button class="btn btn-info rounded" style= {{alignContent: 'flex-end'}}>
                            Login
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    );
};

export default Nav;
