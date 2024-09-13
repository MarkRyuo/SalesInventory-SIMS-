import { IoPersonOutline } from "react-icons/io5";
import { PiPasswordFill } from "react-icons/pi";

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
              {/* Logo */} <img src="/icons8-box.svg" alt="Error Svg" width={"100px"} height={"100px"}/>
          </div>
          
          <form className="container-lg d-flex justify-content-center">
              <div className="row">
                <div className="col-12">
                  <div className="my-2">
                      <label htmlFor="username" className="form-label"><IoPersonOutline />Username</label>
                      <div className="d-flex justify-content-center">
                        <input type="text" className="username form-control" style={{width: "300px"}}/>

                      </div>
                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                </div>
                
                <div className="col-12">
                    <div className="mb-2">
                      <label htmlFor="password" className="form-label"><PiPasswordFill />Password </label>
                      <input type="password" className="password form-control"/>    
                    </div>
                </div>

                <div className="col-12 my-2 d-flex justify-content-center">
                  <button type="button" className="btn btn-primary btn-lg" onClick={() => {
                      return {
                        
                      }
                  }}>Log in</button> 
                </div>
              </div> {/* end row */}
          </form> {/* end container-lg*/}
      </div>
    </>
  )
}

export default App
