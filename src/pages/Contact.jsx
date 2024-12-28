import React from 'react'

function contact() {
  return (
    <div>

<div className="container-fluid bg-primary p-5 hero-header mb-5">
  <div className="row py-5">
    <div className="col-12 text-center">
      <h1 className="display-1 text-white animated zoomIn">Contact</h1>
      <a href className="h4 text-white">Home</a>
      <i className="far fa-circle text-white px-2" />
      <a href className="h4 text-white">Contact</a>
    </div>
  </div>
</div>


<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="text-center mx-auto mb-5" style={{maxWidth: 600}}>
      <h1 className="display-5 mb-0">Feel Free To Contact Us</h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-7 wow slideInUp" data-wow-delay="0.3s">
        <div className="bg-success  rounded p-5">
          <form>
            <div className="row g-3">
              <div className="col-6">
                <input type="text" className="form-control border-0 px-4" placeholder="Your Name" style={{height: 55}} />
              </div>
              <div className="col-6">
                <input type="email" className="form-control border-0 px-4" placeholder="Your Email" style={{height: 55}} />
              </div>
              <div className="col-12">
                <input type="text" className="form-control border-0 px-4" placeholder="Subject" style={{height: 55}} />
              </div>
              <div className="col-12">
                <textarea className="form-control border-0 px-4 py-3" rows={8} placeholder="Message" defaultValue={""} />
              </div>
              <div className="col-12">
                <button className="btn btn-warning w-100 py-3" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-5 wow slideInUp" data-wow-delay="0.6s">
        <div className="bg-success rounded p-5">
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-geo-alt fs-1 text-warning me-3" />
            <div className="text-start">
              <h5 className="mb-1 text-light">Our Office</h5>
              <span className="text-light">Egypt</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-envelope-open fs-1 text-warning me-3" />
            <div className="text-start">
              <h5 className="mb-1 text-light">Email Us</h5>
              <span className="text-light">securitysystem@gmail.com</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <i className="bi bi-phone-vibrate fs-1 text-warning me-3" />
            <div className="text-start">
              <h5 className="mb-1 text-light ">Call Us</h5>
              <span className="text-light">+0505006800</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default contact