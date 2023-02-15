import React from "react"

export const Navbar =(props)=>{
    console.log(props)
    return (
        <nav className="navbar navbar-expand-lg bg-primary text-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{ props.config.app }</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.config.menus[0]}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.config.menus[1]}</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    )
}