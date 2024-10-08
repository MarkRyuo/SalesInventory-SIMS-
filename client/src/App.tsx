

{/** Import Icons */}
import { IoPersonOutline } from "react-icons/io5";
import { PiPasswordFill } from "react-icons/pi";
import './App.css'


//* App - Login(---)

import NavbarLogin from "./components/Navbar/NavbarLogin"


function App() {
  

  return (
    <>
      <div className="container-fluid">
          <div className="container-lg">
              {/* Navbar */}
              <NavbarLogin/>  
          </div>

          <div style={{width: "75vw", height: "130px"}}></div>{/* Spacing */}

          <div className="row d-flex justify-content-center">
              <img src="/icons8-box.svg" alt="Error Svg" width={"100px"} height={"100px"}/> {/* Logo */} 
          </div>
          
          <form className="container-lg d-flex justify-content-center">
              <div className="formContainer">
                  <div className="row">
                    <div className="col-12">
                      <div className="my-2">
                          <label htmlFor="username" className="form-label"><IoPersonOutline size={20}/>Username</label>
                          <input type="text" className="username form-control"/>
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                      </div>
                    </div>
                    
                    <div className="col-12">
                        <div className="mb-2">
                          <label htmlFor="password" className="form-label"><PiPasswordFill size={20}/>Password </label>
                          <input type="password" className="password form-control"/>    
                        </div>
                    </div>

                    <div className="col-12 my-2 d-flex justify-content-center">
                      <button type="button" className="btn btn-primary btn-lg" onClick={() => {
                          
                      }}>Log in</button> 
                    </div> 

                    <div className="col-12 my-4 d-block d-sm-none">
                        <a href="#" download={"..."} style={{textDecoration: "none"}}>Download App</a>
                    </div>
                  </div> {/* end row */}
              </div>  {/* end formContainer */}
          </form> {/* end container-lg*/}
      </div>
    </>
  )
}

export default App
