import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand me-6" href="#">        <span class="custom-color">Ad</span><span class="custom">Rol</span><span class="custom" style={{ fontSize: 'larger', fontStyle: 'italic', display: 'inline-block' }}>L</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">PRODUCTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CUSTOMERS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">GETTING STARTED</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">RESOURCES</a>

        </li>
        <li class="nav-item">
        <button class="btn style me-1" type="submit">TRY IT OUT</button>
        </li>
        <li class="nav-item">
        <button class="btn" type="submit">LOGIN</button>
        </li>
      </ul>
      
        
        
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
