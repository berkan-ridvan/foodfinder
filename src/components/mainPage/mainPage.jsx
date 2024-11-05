import React from 'react';
import './index.scss';
import logo from '../../assets/logo-white.png';

function Main() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid header-navbar">
                        <a className="navbar-brand" href="#">
                            <img className="img-fluid" style={{ maxWidth: '250px' }} src={logo} alt="" />
                        </a>
                        <form className="d-flex justify-content-center flex-grow-1">
                            <input
                                type="search"
                                className="form-control rounded-pill"
                                placeholder="Search..."
                                aria-label="Search"
                                style={{ maxWidth: '500px' }}
                            />
                        </form>
                        <button className="btn color btn-outline-primary m-1 ms-auto" type="button">
                            Login
                        </button>
                        <button className="btn color btn-outline-primary ms-auto" type="button">
                            Sign Up
                        </button>
                    </div>
                </nav>
            </header>

            <hr className='hr' />

            <div class="container-fluid down-box">
                <div class="row">
                    <div class="col-12 col-md-3 col-lg-2 bg-white p-3 left-sidebar">
                        <ul class="list-unstyled">

                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-coffee me-2"></i>Breakfast</a></li>
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-mug-hot me-2"></i>Coffee</a></li>
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-hamburger me-2"></i>Burgers</a></li>
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-pepper-hot me-2"></i>Mexican</a></li>
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-pizza-slice me-2"></i>Pizza</a></li>
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-drumstick-bite me-2"></i>Chicken</a></li>
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-ice-cream me-2"></i>Desserts</a></li>
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-bread-slice me-2"></i>Sandwiches</a></li>
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-leaf me-2"></i>Comfort Food</a></li>
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-heartbeat me-2"></i>Healthy</a></li>
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-fish me-2"></i>Seafood</a></li>
                            <hr />
                            <li class="mb-3"><a href="#" class="text-dark link-hover"><i class="fas fa-filter me-2"></i>Filter Area</a></li>


                        </ul>
                    </div>



                    <div class="col-12 col-md-8 col-lg-10 bg-white p-3 content-box">
                        <h5 class="fw-bold">CONTENT</h5>
                        <br />
                        <div class="row g-3 mt-3">
                            
                            
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 1.5 km</small></p>
                                        <p class="card-text text-end fw-bold">$15.00</p>
                                    </div>
                                </div>
                            </div>


                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 2 km</small></p>
                                        <p class="card-text text-end fw-bold">$12.00</p>
                                    </div>
                                </div>
                            </div>


                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 3 km</small></p>
                                        <p class="card-text text-end fw-bold">$10.00</p>
                                    </div>
                                </div>
                            </div>


                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 4 km</small></p>
                                        <p class="card-text text-end fw-bold">$20.00</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 4 km</small></p>
                                        <p class="card-text text-end fw-bold">$20.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 4 km</small></p>
                                        <p class="card-text text-end fw-bold">$20.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 4 km</small></p>
                                        <p class="card-text text-end fw-bold">$20.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 4 km</small></p>
                                        <p class="card-text text-end fw-bold">$20.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 4 km</small></p>
                                        <p class="card-text text-end fw-bold">$20.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 4 km</small></p>
                                        <p class="card-text text-end fw-bold">$20.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 4 km</small></p>
                                        <p class="card-text text-end fw-bold">$20.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 4 km</small></p>
                                        <p class="card-text text-end fw-bold">$20.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Meal Name</h5>
                                        <p class="card-text">Description of the meal goes here.</p>
                                        <p class="card-text"><small class="text-muted">Restaurant: Example Restaurant</small></p>
                                        <p class="card-text"><small class="text-muted">Distance: 4 km</small></p>
                                        <p class="card-text text-end fw-bold">$20.00</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;