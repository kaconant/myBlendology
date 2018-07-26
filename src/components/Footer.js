import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return(
        <div>
            <footer id="myFooter">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <h2 class="logo"><a href="#"><img class="logo-footer" src="./img/drop.png" height='85' /></a></h2>
                    </div>
                    <div class="col-sm-2">
                        <h5>Get started</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-2">
                        <h5>About Us</h5>
                        <ul>
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-2">
                        <h5>Support</h5>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help Desk</a></li>
                            <li><a href="#">Work With Us</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <div class="social-networks">
                            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#" class="google"><i class="fa fa-google-plus"></i></a>
                        </div>
                        <button type="button" class="btn btn-default">Contact us</button>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <p>© 2018 myBlendology, inc. </p>
            </div>
        </footer>
        </div>
        )
}
}
export default Footer;