import React from 'react'

function Footer() {
    return (
        <>
            <div
                className="container-fluid bg-success text-light mt-5 py-5 wow fadeInUp"
                data-wow-delay="0.1s"
            >
                <div className="container pt-5">
                    <div className="row g-5">
                        {/* Quick Links */}
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Quick Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="#">
                                    <i className="bi bi-arrow-right text-warning me-2"></i>Home
                                </a>
                                <a className="text-light mb-2" href="#">
                                    <i className="bi bi-arrow-right text-warning me-2"></i>About Us
                                </a>
                                <a className="text-light mb-2" href="#">
                                    <i className="bi bi-arrow-right text-warning me-2"></i>Our Services
                                </a>
                                <a className="text-light mb-2" href="#">
                                    <i className="bi bi-arrow-right text-warning me-2"></i>Latest Blog
                                </a>
                                <a className="text-light" href="#">
                                    <i className="bi bi-arrow-right text-warning me-2"></i>Contact Us
                                </a>
                            </div>
                        </div>

                        {/* Popular Links */}
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Popular Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="#">
                                    <i className="bi bi-arrow-right text-warning me-2"></i>Home
                                </a>
                                <a className="text-light mb-2" href="#">
                                    <i className="bi bi-arrow-right text-warning me-2"></i>About Us
                                </a>
                                <a className="text-light mb-2" href="#">
                                    <i className="bi bi-arrow-right text-warning me-2"></i>Our Services
                                </a>
                                <a className="text-light mb-2" href="#">
                                    <i className="bi bi-arrow-right text-warning me-2"></i>Latest Blog
                                </a>
                                <a className="text-light" href="#">
                                    <i className="bi bi-arrow-right text-warning me-2"></i>Contact Us
                                </a>
                            </div>
                        </div>

                        {/* Get In Touch */}
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Get In Touch</h3>
                            <p className="mb-2">
                                <i className="bi bi-geo-alt text-warning me-2"></i>Egypt
                            </p>
                            <p className="mb-2">
                                <i className="bi bi-envelope-open text-warning me-2"></i>securitysystem@gmail.com
                            </p>
                            <p className="mb-0">
                                <i className="bi bi-telephone text-warning me-2"></i>+0505006800
                            </p>
                        </div>

                        {/* Follow Us */}
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Follow Us</h3>
                            <div className="d-flex">
                                <a className="btn btn-lg btn-warning btn-lg-square rounded me-2" href="#">
                                    <i className="fab fa-twitter fw-normal"></i>
                                </a>
                                <a className="btn btn-lg btn-warning btn-lg-square rounded me-2" href="#">
                                    <i className="fab fa-facebook-f fw-normal"></i>
                                </a>
                                <a className="btn btn-lg btn-warning btn-lg-square rounded me-2" href="#">
                                    <i className="fab fa-linkedin-in fw-normal"></i>
                                </a>
                                <a className="btn btn-lg btn-warning btn-lg-square rounded" href="#">
                                    <i className="fab fa-instagram fw-normal"></i>
                                </a>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="col-12">
                            <form className="mx-auto" style={{ maxWidth: '600px' }}>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control border-white p-3"
                                        placeholder="Your Email"
                                    />
                                    <button className="btn btn-warning px-4">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer