import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className='footer' style={{display: 'flex', justifyContent: 'flex-end', backgroundPosition: 'top'}}>
    <button type="button" class="btn btn-light btn-lg">   1-877-7-ADROLL</button>
    <button class="btn btn-secondary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
      </footer>
    </div>
  )
}

export default Footer
