
import { FaBox } from "react-icons/fa";



export default function NavbarLogin() {
    return (
        <div>
            <div className="row ">
                <nav className="navbar col-1 d-none d-sm-block pb-5">
                    <div className="">
                        <a className="navbar-brand d-flex justify-content-center m-0" href="#">
                            <p className="text-center"><FaBox style={{width: "50px", height: "50px"}}/></p>
                            {/* <img src= alt="Bootstrap" width="70" height="70"/> */}
                        </a>
                    </div>
                </nav>
                <div className="col-8">
                    <p className="lead pt-4">Sales Inventory</p>
                </div>

                <div className="col-2 pt-4">
                    <a href="http://" className="btn btn-outline-primary d-none d-lg-block" download={"..."}>Download App</a>
                </div>
            </div>
        </div>
    )
}
