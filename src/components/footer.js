import React from 'react';
import { Link } from 'gatsby';

const BlackBg = {
    backgroundColor : "black",
    color : "white",
    width:"59px"
};


const footer=()=>{
    return(
        <div>
            <footer class="deep page-footer font-small pt-4">
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <h5 class="text-uppercase">
                            <Link 
                                className="card p-2  mr-sm-2 mr-md-4" 
                                to='/'
                                style={ BlackBg }>
                                <span className="font-weight-bold h4 mb-0">RAI</span>
                            </Link>
                            </h5>
                            <p>A blog platform specially for newbie developers</p>
                            
                            <p>
                            <a href="#"><i class="fa fa-facebook-square" ></i></a>
                            <a href="#"><i class="fa fa-github" ></i></a>
                            <a href="#"><i class="fa fa-twitter" ></i></a>
                            <a href="#"><i class="fa fa-twitch" ></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            </p>
                            <p style={{fontSize:"12px",color:"grey"}}>RAI Community Copyright 2020</p>
                        </div>
                        <hr class="clearfix w-100 d-md-none pb-3"></hr>
                        <div class="col-md-3 mb-md-0 mb-3">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Home</a>
                                </li>
                                <li>
                                    <a href="#!">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#!">Login</a>
                                </li>
                                <li>
                                    <a href="#!">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 mb-md-0 mb-3">

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Code of Conduct</a>
                                </li>
                                <li>
                                    <a href="#!">Tags</a>
                                </li>
                                <li>
                                    <a href="#!">About Us</a>
                                </li>
                                <li>
                                    <a href="#!">Privacy Policy</a>
                                </li>
                            </ul>

                        </div>
                    
                    </div>
                    
                </div>
                
            </footer>
        </div>
        )
    }

export default footer;