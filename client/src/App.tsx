

//* App - Login(---)

function App() {
  

  return (
    <>
      <div className="container-fluid">
          <div>
              {/* Navbar */}
          </div>

          <div>
              {/* Logo */}
          </div>
          
          <form className="container-lg d-flex justify-content-center">
              <div className="row">
                <div className="col-12">
                  <div className="my-2">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input type="text" className="username form-control"/>
                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                </div>
                
                <div className="col-12">
                    <div className="mb-2">
                      <label htmlFor="password" className="form-label">Password </label>
                      <input type="password" className="password form-control"/>    
                    </div>
                </div>

                <div className="col">
                  <button type="button" className="btn button-primary" onClick={() => {}}>Log in</button> 
                </div>
              </div> {/* end row */}
          </form> {/* end container-lg*/}
      </div>
    </>
  )
}

export default App
