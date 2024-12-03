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
                            <img
                                className="img-fluid"
                                style={{ maxWidth: "250px" }}
                                src={logo}
                                alt="Logo"
                            />
                        </a>
                        <form className="d-flex justify-content-center flex-grow-1">
                            <input
                                type="search"
                                className="form-control rounded-pill"
                                placeholder=""
                                style={{ maxWidth: "500px", border: "0px" }}
                            />
                        </form>
                        <button className="btn color btn-outline-primary m-1 ms-auto" type="button">
                            Login
                        </button>
                        
                    </div>
                </nav>
            </header>

            <hr className="hr" />

            <div className="container-fluid down-box">
                <div className="row g-3 ">
                    <div className="col-12 col-md-3 col-lg-2 bg-white p-3 left-sidebar">
                        <ul className="list-unstyled">
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("All")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-list me-2"></i>All
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Breakfast")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-coffee me-2"></i>Breakfast
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Coffee")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-mug-hot me-2"></i>Coffee
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Burgers")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-hamburger me-2"></i>Burgers
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Pizza")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-pizza-slice me-2"></i>Pizza
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Mexican")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-pepper-hot me-2"></i>Mexican
                                </a>
                            </li>
                            <li
                                className="mb-3"
                                onClick={() => handleCategoryClick("Seafood")}
                                style={{ cursor: "pointer" }}
                            >
                                <a className="text-dark link-hover">
                                    <i className="fas fa-fish me-2"></i>Seafood
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-8 col-lg-10 bg-white p-3 content-box">
                        <h5 className="fw-bold">
                            {selectedCategory === "All" ? "All Restaurants" : `${selectedCategory} Restaurants`}
                        </h5>
                        <br />
                        <div className="row g-3 ">
                            {filteredMeals.map((meal) => (
                                <div
                                    key={meal.id}
                                    className="col-12 col-md-6 col-lg-3"
                                    onClick={() => handleCardClick(meal)}
                                >
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{meal.title}</h5>
                                            <p className="card-text">{meal.description}</p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Restaurant: {meal.type}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Distance: {meal.distance}
                                                </small>
                                            </p>
                                            <p className="card-text text-end fw-bold">{meal.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="content mt-4">
                    {selectedMeal && (
                        <>
                            <div className="content-overlay" onClick={handleCloseDetails}></div>
                            <div className="content-popup">
                                <Detail meal={selectedMeal} onClose={handleCloseDetails} />
                                {/* <DetailAdmin meal={selectedMeal} onClose={handleCloseDetails} /> */}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Main;
