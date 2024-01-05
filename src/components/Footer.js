import React from "react";

export const Footer = () => {

    return (
        <footer className="page-footer font-small blue">
            <hr style={{height :"10px", backgroundColor: "#000"}}></hr>
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 align text-start">
                        <span className="fw-bold">WEIMER BEARING AND TRANSMISSION<br/></span>
                        <span>N112 W13131 Mequon Rd.<br/></span>
                        <span>Germantown, WI 53022<br/><br/></span>
                        <span className="fw-bold">262-781-1992<br/></span>
                        <span className="fw-bold">800-242-7981<br/></span>
                        <a className="footer-link" href="mailto:Sales@WeimerBearing.com">Sales@WeimerBearing.com<br/></a>
                        <span className="fst-italic">We're open Saturdays and 24/7 for emergencies</span>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3 text-start">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled text-start">
                            <li><a className="footer-link" href="/resources">Resources</a></li>
                            <li><a className="footer-link" href="/news">News</a></li>
                            <li><a className="footer-link" href="/rfq">Request for Quote</a></li>
                            <li><a className="footer-link" href="/about">About Us</a></li>
                            <li><a className="footer-link" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2023 Copyright:
                <a className="footer-link" href="https://weimerbearing.com/">Weimer Bearing and Transmission Inc.</a>
            </div>
            <hr style={{height :"10px", backgroundColor: "#000"}}></hr>
        </footer>
    );
}
