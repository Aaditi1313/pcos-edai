import React from 'react'
// import Navbar from './Navbar'
import styleHome from './CSS/styleHome.css'


import girl from './images/girl.png'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



export default function Homepage() {
    
    return (
        
        <div>
      
        <section id="title">
    <div className="container-fluid">

      <div className="row">
        <div className="col-lg-6">
        <div className="row">
            <h1 className="heading">Your companion through tough times.</h1>
        </div>

        <div className="row">
          <button id="loginbtn" type="button" onClick="/login" className="btn btn-lg btn-outline-dark">Login</button>
          <button id="loginbtn" type="button" className="btn btn-lg btn-outline-dark">About PCOS</button>
          <button id="loginbtn" type="button" className="btn btn-lg btn-outline-dark">Blog</button>
          <button id="loginbtn" type="button" className="btn btn-lg btn-outline-dark">Diet</button>
        </div>

          </div>
        <div className="col-lg-6">

          <img width="740" height="500" src={girl} className="response"alt="iphone-mockup"/>

        </div>
      </div>

    </div>
</section>
        
        



        
        



        <section id="testimonials">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <h1 className="heading">Who can get PCOS?</h1>
      <p className="answer">PCOS normally affects women once they start having menstrual cycles or hit the age of puberty (typically around age 11).</p>
    </div>
    <div className="carousel-item">
      <h1 className="heading">Is there a cure for PCOS?</h1>
      <p>No, there isn’t. It can be managed with the appropriate treatment at a fertility clinic.</p>
    </div>
    <div className="carousel-item">
      <h1 className="heading">Can PCOS affect you fertility?</h1>
      <p className="answer">It might. Because it is a hormonal imbalance, it can hamper normal ovulation and cause female infertility as well as sub-fertility.</p>
    </div>
    <div className="carousel-item">
      <h1 className="heading">Is it true that pregnancy cures PCOS?</h1>
      <p className="answer">Unfortunately, no. However, it is quite common for a woman with PCOS to have a cessation of symptoms while she is pregnant, and many women have improvement and more normal menstrual cycles after having been pregnant.</p>
    </div>
    <div className="carousel-item">
      <h1 className="heading">What does PCOS mean?</h1>
      <p className="answer">PCOS stands for Polycystic Ovary Syndrome.</p>
    </div>
    <div className="carousel-item">
      <h1 className="heading">What causes PCOS?</h1>
      <p className="answer">Presently, the exact cause of PCOS is unknown. Some experts lean toward the theory that it might be a genetic, inherited condition since women who have it are more likely to have a sister or mother who also has it.</p>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>



<section id="title1">
    <div className="container-fluid">

      <div className="row">
        <div className="col-lg-6">
        
            <img width="740" height="500" src={girl} className="response"alt="iphone-mockup"/>

          </div>
        <div className="col-lg-6">

          <h3 className="heading">COS Awareness Association is a non-profit organization dedicated to the advocacy of polycystic ovarian syndrome (PCOS).</h3>
        

        <div className="row">
            <button id="loginbtn" type="button" className="btn btn-lg btn-outline-dark">Join a Campaign!</button>
          
        </div>

        </div>
      </div>

    </div>
</section>






        
        
        </div>
       
    )
}
