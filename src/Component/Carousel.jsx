import React from 'react'
import carousel1 from '../img/carousel-1.jpg'
import carousel2 from '../img/carousel-2.jpg'
import carousel3 from '../img/carousel-3.jpg'

function Carousel() {
  return (
    <>
<div className="container-fluid p-0 mb-5">
  <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#header-carousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#header-carousel" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#header-carousel" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="w-100" src={carousel1} />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{maxWidth: 900}}>
            <h5 className="text-white text-uppercase animated bounceInDown">Best Security System For You
            </h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Safe protection and a feeling of
              security.</h1>
            <a href className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft">Read more</a>
            <a href className="btn btn-warning py-md-3 px-md-5 animated slideInRight">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="w-100" src={carousel2} />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{maxWidth: 900}}>
            <h5 className="text-white text-uppercase animated bounceInDown">Best Security System For You
            </h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Safe protection and a feeling of
              security.</h1>
            <a href className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft">Read more</a>
            <a href className="btn btn-warning py-md-3 px-md-5 animated slideInRight">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="w-100" src={carousel3} />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{maxWidth: 900}}>
            <h5 className="text-white text-uppercase animated bounceInDown">Best Security System For You
            </h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Safe protection and a feeling of
              security.</h1>
            <a href className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft">Read more</a>
            <a href className="btn btn-warning py-md-3 px-md-5 animated slideInRight">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
    </>
  )
}

export default Carousel