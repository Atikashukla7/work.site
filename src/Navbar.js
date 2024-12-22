import React from 'react'



const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand me-6" href="#">        <span className="custom-color">Ad</span><span className="custom">Rol</span><span className="custom" style={{ fontSize: 'larger', fontStyle: 'italic', display: 'inline-block' }}>L</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">PRODUCTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CUSTOMERS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">GETTING STARTED</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">RESOURCES</a>

        </li>
        <li className="nav-item">
        <button className="btn style me-1" type="submit">TRY IT OUT</button>
        </li>
        <li className="nav-item">
        <button className="btn" type="submit">LOGIN</button>
        </li>
      </ul>
      
        
        
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
