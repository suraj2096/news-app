// now we will create navbar compnent 
// component accept props and return react element describing what should appear on the screen.

// *************______problem_______
// 1. here there is a probelm in search in which props is not send in news component i wull seolve this problem later........

// change class based component to function based component
import React from 'react'
import{Link } from 'react-router-dom'
const  Navbar =()=>{
  // this below code is solved later for search
  // search = (event)=>{
  //   // to stop the form drfault behaviour
  //   event.preventDefault();
  //   let searchValue = document.querySelector('#searchValue');
  //   let searchterm = searchValue.value;
  //   console.log(searchterm);
  //   this.setState({
  //     searchValues: searchterm
  //   })
  //   if(searchValue.value!==""){
  //     console.log(searchValue.value);
  //     <News search={this.state.searchvalues}/>
      
  //   }
  // }

      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Faster News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business"> business</Link>
                </li>
               
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment">entertainment</Link></li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health">health</Link></li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science">science</Link></li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sports">sports</Link></li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology">technology</Link></li>
            </ul>
                <form className="d-flex">
        <input className="form-control me-2" id="searchValue"type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" >Search</button>
      </form>         
          </div>
        </div>
      </nav>
      )
    
  }
  export default Navbar
