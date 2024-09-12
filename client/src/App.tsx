

//* App - Login(---)

function App() {
  

  return (
    <>
      <div className="container-fluid">
          <div>
              {/* Navbar */}
          </div>

          <div className="row">
              <div className="col">
                <div className="my-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="username form-control"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="col">
                    <div className="mb-2">
                      <label htmlFor="password" className="form-label">Password </label>
                      <input type="password" className="password form-control"/>    
                    </div>
                </div>
                
              </div>
          </div>
      </div>
    </>
  )
}

export default App
