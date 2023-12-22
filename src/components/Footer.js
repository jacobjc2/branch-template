import React from "react";

export const Footer = () => {

    return (
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 pl-4 align text-start">
                        <span class="fw-bold">WEIMER BEARING AND TRANSMISSION<br/></span>
                        <span>N112 W13131 Mequon Rd.<br/></span>
                        <span>Germantown, WI 53022<br/><br/></span>
                        <span class="fw-bold">262-781-1992<br/></span>
                        <span class="fw-bold">800-242-7981<br/></span>
                        <a href="mailto:Sales@WeimerBearing.com">Sales@WeimerBearing.com<br/></a>
                        <span class="fst-italic">We're open Saturdays and 24/7 for emergencies</span>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2023 Copyright: 
                <a href="https://weimerbearing.com/">Weimer Bearing and Transmission Inc.</a>
            </div>

        </footer>
    );
}
