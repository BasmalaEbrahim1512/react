import React from 'react'
import Abo from '../img/about.jpg'

function Ab() {
    return (
        <div>
            <div>
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.3s" src={Abo} style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="mb-4">
                                    <h5 className="text-success text-uppercase">About Us</h5>
                                    <h1 className="display-5 mb-0">High Quality for Systems &amp; Services</h1>
                                </div>
                                <h4 className="text-body mb-4">Company for Smart Security for All Business</h4>
                                <p className="mb-4">The oldest of the best companies working in the field of supplying, installing and
                                    maintaining insect protection systems under the light. The best and most skilled maintenance
                                    engineers in Egypt</p>
                                <div className="row g-3">
                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                        <div className="bg-success d-flex flex-column justify-content-center text-center border-bottom border-5 border-warning rounded p-3" style={{ height: 200 }}>
                                            <i className="fa fa-star fa-4x text-white mb-4" />
                                            <h4 className="text-white mb-0">15 Years Experience</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.9s">
                                        <div className="bg-warning d-flex flex-column justify-content-center text-center border-bottom border-5 border-success rounded p-3" style={{ height: 200 }}>
                                            <i className="fa fa-award fa-4x text-white mb-4" />
                                            <h4 className="text-white mb-0">Award Winning</h4>
                                        </div>
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

export default Ab