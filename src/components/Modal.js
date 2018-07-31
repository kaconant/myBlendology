import React from 'react';

class Modal extends React.Component {
    handleClick(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <form action="/login" method="GET">
                    <div className="modal fade" id="share" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control-form " id="signup-name" placeholder="Your Name" />                                            </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control-form " id="blend-name" placeholder="Name of Your Blend" />
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input id="remember-me" type="checkbox" />Remember Me 
                                            </label>
                                        </div>   
                                        <div className="form-group">
                                            <input type="text" className="form-control-form " id="recName" placeholder="Recepient's Name" />
                                        </div>
                                        <div id="vehicle-info">
                                            <div className="form-group">
                                                <input type="text" className="form-control-form " id="recEmail" placeholder="Recepient's Email" />
                                            </div>  
                                            <div className="form-group">
                                                
                                            </div>
                                        </div>  
                            
                                        <p>    By sharing my blends, I agree to Blendology's <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>. </p>
                                        <div className="row">   
                                            <div className="col-md-12"> 
                                                    
                                            </div>          
                                        </div>
                                        <button type="submit" className="btn-lgin" id="signup-button">Share Your Blend!</button>

                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="row">   
                                            <div className="col-md-6">
                                                <p className="ta-r">Already a Blendologist? </p>
                                            </div>  
                                            <div className="col-md-4 col-md-offset-2">  
                                                <button className="btn-gst"  data-toggle="modal"  data-dismiss="modal" data-target="#at-login">Login</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
    }

export default Modal;